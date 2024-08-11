'use client';

import 'react-quill/dist/quill.snow.css';
import { postPost } from '@/actions/apis/postAPI';
import { confirmSuccess } from '@/lib/alertUtil';
import { useCallback, useMemo, useState } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setS3Url } from '@/lib/s3Util';
import moment from 'moment';
import ReactQuill, { Quill } from 'react-quill';
import { ImageActions } from '@xeger/quill-image-actions';

Quill.register('modules/imageActions', ImageActions);
// Quill.register("modules/imageFormats", ImageFormats);

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

export default function Editor() {
  const router = useRouter();
  const [dataTitle, setDataTitle] = useState('');
  const [dataText, setDataText] = useState('');
  const [dataCategory, setDataCategory] = useState('일반');
  const category = ['일반', '질문', '공지', '칼럼'];

  const quillRef = useRef(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async (e: any) => {
      const file = Array.from(e.target.files) as Array<any>;
      if (!file) return;
      for (let i = 0; i < file.length; i++) {
        if (file[i].type.split('/')[0] != 'image') continue;
        try {
          const title = `posts${moment().format('YYYYMMDDHHmmss')}${i}`;
          const url = `community/${title}.${file[i].type.split('/')[1]}`;

          // 새로운 사진 포메팅 기법이 필요함

          const [response, error] = await setS3Url(url, file[i]);

          if (!error) {
            const imageUrl = `${process.env.NEXT_PUBLIC_AWS_S3_URL}/${url}`;
            const editor = quillRef.current?.getEditor();
            if (editor) {
              const range = editor.getSelection();
              const delta = editor.insertEmbed(range?.index || 0, 'image', imageUrl);
              editor.removeFormat(range?.index, range?.index + 1);
              const newOps = delta.ops?.map((op) => {
                if (op.insert && typeof op.insert === 'object' && op.insert.image) {
                  const imageAttributes = {
                    ...op.attributes,
                    alt: 'post images',
                    width: 500,
                  };
                  return {
                    ...op,
                    attributes: imageAttributes,
                  };
                }
                return op;
              });
              delta.ops = newOps;
              editor.updateContents(delta);
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
      imageActions: {},
    }),
    [],
  );

  const handleSubmit = useCallback(async () => {
    const result = await confirmSuccess('포스팅 확인', '현재 입력하신 정보가 모두 맞습니까?', '맞습니다!', '아닙니다.');
    if (result.isConfirmed) {
      const { data, error } = await postPost({
        title: dataTitle,
        content: dataText,
        category: dataCategory,
      });
      if (error) {
        console.log(error);
        return;
      }
      router.push(`/community`);
    }
  }, [dataTitle, dataText]);

  return (
    <div>
      <form className="my-3">
        <div className="d-flex">
          <div className="col-10">
            <input
              type={'text'}
              className={`w-100 py-2 px-4`}
              placeholder={`제목`}
              onChange={(e) => {
                setDataTitle(e.target?.value || '');
              }}
              value={dataTitle}
            />
          </div>
          <div className="col-2">
            <select
              onChange={(ee) => {
                setDataCategory(ee.target.value);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              {category.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ReactQuill
          ref={quillRef}
          className="mb-5"
          style={{ height: '25vw' }}
          value={dataText}
          onChange={setDataText}
          modules={modules}
          formats={formats}
          placeholder={'트러스 포스팅을 위한 플레이스 홀더'}
          theme="snow"
        />

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className={`w-100 btn btn-lg fw-bold btn-light`}
            onClick={() => {
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
  );
}
