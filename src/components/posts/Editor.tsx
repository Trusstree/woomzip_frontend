"use client"

import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import EditorSaveButton from './EditorSaveButton';

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
  'blockquote',
  'list',
  'bullet',
  'align',
  'image',
];

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default function Editor(props: EditorProps) {
  const [value, setValue] = useState('');
  const quillRef = useRef();

  // const imageHandler = () => {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  
  //   input.addEventListener('change', async () => {
  //     const file = input.files[0];
  
  //     try {
  //       const res = await imageApi({ img: file });
  //       const imgUrl = res.data.imgUrl;
  //       const editor = quillRef.current.getEditor(); 
  //       const range = editor.getSelection();
  //       editor.insertEmbed(range.index, 'image', imgUrl);
  //       editor.setSelection(range.index + 1);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  // };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }, { indent: '-1' }, { indent: '+1' },],
          ['link','image'],
          ['clean']
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        className='m-5 mb-3'
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder={'트러스 포스팅을 위한 플레이스 홀더'}
        theme="snow"
      />
      <div className='d-flex justify-content-center'>
        <EditorSaveButton
          className="mx-2 my-3 btn-secondary">
          LOAD
        </EditorSaveButton>
        <EditorSaveButton
          className="mx-2 my-3 text-white btn-success">
          SAVE
        </EditorSaveButton>
        <EditorSaveButton
          className="mx-2 my-3 text-white"
          style={{backgroundColor:"#101648"}}>
          POST
        </EditorSaveButton>
      </div>
    </div>
  )
}