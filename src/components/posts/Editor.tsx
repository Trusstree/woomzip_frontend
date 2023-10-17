"use client"

import 'react-quill/dist/quill.snow.css';
import { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import * as DOMPurify from "dompurify";
import AWS from "aws-sdk";
import useForm from '@/hooks/useForm';
import SubmitButton from '../forms/SubmitButton';
import { isRequired } from '@/utils/validator';
import { postPost } from '@/api/postAPI';
import TextBox from '../forms/Textbox';
import { confirmSuccess } from '@/utils/alertUtil';
import SelectBox from '../forms/SelectBox';

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

  const [dataTitle, setDataTitle] = useState("");
  const [dataText, setDataText] = useState("");
  const [dataCategory, setDataCategory] = useState("일반");

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

  const handleSubmit = useCallback(async ()=>{

    const result = await confirmSuccess("포스팅 확인", "현재 입력하신 정보가 모두 맞습니까?", '맞습니다!', '아닙니다.');

    if (result.isConfirmed) {
      console.log({
        "dataTitle":dataTitle,
        "dataText":dataText,
        "dataCategory":dataCategory
      })
    }
    
  },[dataTitle, dataText]);

  return (
    <div>
      <form className='my-3'>
        <div className='d-flex'>
          <input
            type={'text'}
            className={`col-10 py-2 px-4`}
            placeholder={`제목`}
            onChange={(e)=>{setDataTitle(e.target?.value || "");}}
            value={dataTitle}
          />
          <SelectBox
            className={`col-2`}
            value={dataCategory}
            handleChange={setDataCategory}
            array={["일반"]}
          />
        </div>

        <ReactQuill
          ref={quillRef}
          className='mb-5'
          style={{height:"25vw"}}
          value={dataText}
          onChange={setDataText}
          modules={modules}
          formats={formats}
          placeholder={'트러스 포스팅을 위한 플레이스 홀더'}
          theme="snow"
        />

        <div className='d-flex justify-content-center'>
          <button
            type="button"
            className={`w-100 btn btn-lg fw-bold btn-light`}
            onClick={()=>{
              handleSubmit();
            }}
            >
            Post
          </button>
        </div>
      </form>

      {dataText && (
        <div
          style={{
            width: "60vw",
            whiteSpace: "normal",
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(dataText)),
          }}
        />
      )}
    </div>
  )
}