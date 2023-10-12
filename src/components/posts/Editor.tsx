"use client"

import 'react-quill/dist/quill.snow.css';
import { ChangeEvent, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import * as DOMPurify from "dompurify";
import AWS from "aws-sdk";
import useForm from '@/hooks/useForm';
import SubmitButton from '../forms/SubmitButton';
import { isRequired } from '@/utils/validator';
import { postPost } from '@/api/postAPI';
import TextBox from '../forms/Textbox';

type EditorProps = {
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'align',
  'image',
];

const validate = (values: any) => {
  const errors = {
    title: isRequired(values.title),
    text: isRequired(values.text),
  };

  return errors;
};

export default function Editor(props: EditorProps) {
  const callback = async (postData:any)=>{
    const { data, error } = await postPost({
      ...postData,
      viewCount:0,
      likeCount:0,
      comments:""
    });
    console.log(data);
    if(error)console.log(error);
  };
  
  const { handleChange, handleClick, handleSubmit, values, errors } = useForm(callback, validate);

  const quillRef = useRef();

  const imageHandler = async () => {
    if(document) return;
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    

    input.addEventListener("change", async () => {
      //생성한 s3 관련 설정들
      const config = {
        bucketName: process.env.AWS_S3_BUCKETNAME,
        region: process.env.AWS_S3_REGION,
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET,
      };
      AWS.config.update(config);

      //이미지를 담아 전송할 file을 만든다
      const file = input.files?.[0];
      console.log(file);
      try {
        //업로드할 파일의 이름으로 Date 사용
        const name = Date.now();
        

        //앞서 생성한 file을 담아 s3에 업로드하는 객체를 만든다
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: "public-read",
            Bucket: process.env.AWS_S3_BUCKETNAME, //버킷 이름
            Key: `upload/${name}`,
            Body: file,
          },
        });

        //이미지 업로드 후 곧바로 업로드 된 이미지 url을 가져오기
        //useRef를 사용해 에디터에 접근한 후 에디터의 현재 커서 위치에 이미지 삽입

        const IMG_URL = await upload.promise().then((res) => res.Location);
        console.log(IMG_URL);
        // const editor = quillRef.current.getEditor();
        // const range = editor.getSelection();

        // // 가져온 위치에 이미지를 삽입한다
        // editor.insertEmbed(range.index, "image", IMG_URL);

      } catch (error) {
        console.log(error);
      }
    });
  };









  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }, { align: [] },],
        ['image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      matchVisual: false,
    },
  }),[]);

  return (
    <div>
      <form>
        <div className='d-flex justify-content-center'>
          {/* <EditorSaveButton
            className="mx-2 my-3 btn-secondary"
            postData={data}>
            LOAD
          </EditorSaveButton>
          <EditorSaveButton
            className="mx-2 my-3 text-white btn-success"
            postData={data}>
            SAVE
          </EditorSaveButton> */}


          <SubmitButton
            title={'LOAD'}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            keys={["title", "text"]}
            allRequired={true}
          />
        </div>
        <TextBox
          id={''}
          label={''}
          placeholder={''}
          disabled={false}
          readonly={false}
          handleChange={handleChange}
          name={''}
          value={values["title"]}/>

        <ReactQuill
          ref={quillRef}
          className='mb-3'
          value={values["text"]}
          onChange={values["text"]}
          modules={modules}
          formats={formats}
          placeholder={'트러스 포스팅을 위한 플레이스 홀더'}
          theme="snow"
        />
      </form>

      {values["text"] && (
        <div
          style={{
            width: "60vw",
            whiteSpace: "normal",
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(values["text"])),
          }}
        />
      )}
    </div>
  )
}