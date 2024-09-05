'use client';

import 'react-quill/dist/quill.snow.css';
import { useMemo } from 'react';
import { setS3Url } from '@/lib/s3Util';
import moment from 'moment';
import { getCustomImageBlot } from '@/app/community/write/_components/getCustomImageBlot';
import dynamic from 'next/dynamic';

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
  'height',
  'width',
];

const Editor = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    await getCustomImageBlot(QuillComponent, true);

    const Quill = ({ quillRef, data, setData }) => {
      const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/png, image/jpg');
        input.click();
        input.onchange = async (e: any) => {
          const file = Array.from(e.target.files) as Array<any>;
          console.log(file);
          if (!file) return;
          for (let i = 0; i < file.length; i++) {
            const [fileType, fileExecutor] = file[i].type.split('/');
            if (fileType != 'image') continue;
            if (fileExecutor != 'jpg' && fileExecutor != 'jpeg' && fileExecutor != 'png') continue;
            try {
              const title = `posts${moment().format('YYYYMMDDHHmmss')}${i}`;
              const url = `community/${title}.${fileExecutor}`;

              // 이번에야말로 사진 압축하는 거 집어넣자
              const [response, error] = await setS3Url(url, file[i]);

              if (!error) {
                const imageUrl = `${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`;
                const editor = quillRef.current?.getEditor();
                if (editor) {
                  const range = editor.getSelection();
                  const delta = editor.insertEmbed(range?.index || 0, 'image', {
                    src: imageUrl,
                    alt: 'post image',
                    width: '80%',
                    dataSrc: imageUrl,
                  });
                }
              } else {
                console.error('Error uploading image:', error);
              }
            } catch (error) {
              console.error('Failed to upload image: ', error);
            }
          }
        };
      };

      const modules = useMemo(
        () => ({
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
              ['image'],
              ['clean'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
          clipboard: {
            matchVisual: false,
          },
        }),
        [],
      );

      return (
        <QuillComponent
          ref={quillRef}
          className="mb-5"
          style={{ maxWidth: '1150px', height: '25vw' }}
          value={data}
          onChange={setData}
          modules={modules}
          formats={formats}
          placeholder={'트러스 포스팅을 위한 플레이스 홀더'}
          theme="snow"
        />
      );
    };
    return Quill;
  },
  { loading: () => <div> 로딩 중입니다. </div>, ssr: false },
);

export default Editor;
