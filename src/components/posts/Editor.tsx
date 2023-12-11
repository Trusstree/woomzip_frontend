"use client"

import 'react-quill/dist/quill.snow.css';
import { useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import DOMPurify from "dompurify";
import { isRequired } from '@/utils/validator';
import { postPost } from '@/api/postAPI';
import { confirmSuccess } from '@/utils/alertUtil';
import SelectBox from '../forms/SelectBox';
import { setS3Url } from '@/utils/s3Util';
import Swal from 'sweetalert2';
import dynamic from 'next/dynamic';

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
  // const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
  const [dataTitle, setDataTitle] = useState("");
  const [dataText, setDataText] = useState("");
  const [dataCategory, setDataCategory] = useState("일반");
  const [dataThumbnail, setDataThumbnail] = useState("");

  // const callback = async (postData:any)=>{
  //   const { data, error } = await postPost({
  //     ...postData,
  //     viewCount:0,
  //     likeCount:0,
  //     comments:""
  //   });
  //   console.log(data);
  //   if(error)console.log(error);
  // };

  // const quillRef = useRef(null);

  // const imageHandler = async () => {
  //   if(!document) return;
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  //   input.addEventListener("change", async () => {
  //     //이미지를 담아 전송할 file을 만든다
  //     const file = input.files?.[0];
  //     console.log(file);

  //     const key = "key";
  //     await setS3Url(key , file);
  //     const editor = quillRef.current.getEditor();
  //     const range = editor.getSelection();
  //     // 가져온 위치에 이미지를 삽입한다
  //     editor.insertEmbed(range.index, "image", `https://trussbucket.s3.ap-northeast-2.amazonaws.com/${key}`);
  //   });
  // };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }, { align: [] },],
        // ['image'],
        ['clean']
      ],
      // handlers: {
      //   image: imageHandler,
      // },
    },
    clipboard: {
      matchVisual: false,
    },
  }),[]);

  const handleDataText = useCallback( async (e)=>{
    
  },[]);

  const handleSubmit = useCallback(async ()=>{
    // const { value: file } = await Swal.fire({
    //   title: "Select image",
    //   input: "file",
    //   inputAttributes: {
    //     "accept": "image/*",
    //     "aria-label": "Upload your profile picture"
    //   }
    // });
    // console.log(file);

    // const key = "thumbnail";
    // await setS3Url(key , file);
    
    const result = await confirmSuccess("포스팅 확인", "현재 입력하신 정보가 모두 맞습니까?", '맞습니다!', '아닙니다.');
    if (result.isConfirmed) {
      postPost({
        "title": dataTitle,
        "text": dataText,
        "category": dataCategory,
        "thumbnail": "",
        // "thumbnail": `https://trussbucket.s3.ap-northeast-2.amazonaws.com/${key}`,
        "author": "",
        "likeCount": 0,
        "viewCount": 0,
        "comments": ""
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

      {/* {dataText && (
        <div
          style={{
            width: "60vw",
            whiteSpace: "normal",
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(dataText)),
          }}
        />
      )} */}
    </div>
  )
}