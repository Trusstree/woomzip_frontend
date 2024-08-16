'use client';

import { postPost } from '@/actions/apis/postAPI';
import { confirmSuccess } from '@/lib/alertUtil';
import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Editor from '@/app/community/write/_components/Editor';

export default function WriteComponent() {
  const quillRef = useRef(null);
  const router = useRouter();
  const [dataTitle, setDataTitle] = useState('');
  const [dataText, setDataText] = useState('');
  const [dataCategory, setDataCategory] = useState('일반');
  const category = ['일반', '질문', '공지', '칼럼'];

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
        <div className="d-flex" style={{ maxWidth: '1150px' }}>
          <div className="w-100">
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
          <div style={{ width: 140 }}>
            <select
              onChange={(ee) => {
                setDataCategory(ee.target.value);
              }}
              className="w-100 form-select"
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

        <Editor data={dataText} setData={setDataText} quillRef={quillRef} />

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className={`w-100 btn btn-lg fw-bold btn-light`}
            onClick={() => {
              handleSubmit();
            }}
          >
            게시하기
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
