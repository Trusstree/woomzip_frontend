'use client';

import { getUserAccessToken } from '@/actions/auth/authAction';
import { postComment } from '@/actions/apis/commentAPI';
import { useEffect, useState } from 'react';
import { getUserdataByToken } from '@/lib/parseUtil';
import styles from '@/app/news/[pid]/_styles/CommentForm.module.css';

export default function CommentForm({ pid, setNeedRender }: { pid: number | string; setNeedRender: any }) {
  const [comment, setComment] = useState('');
  const [at, setAT] = useState(undefined);

  useEffect(() => {
    (async () => {
      setAT(getUserdataByToken((await getUserAccessToken())?.value));
    })();
  }, []);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const submit = async () => {
    if (!comment) return alert('메시지를 입력해주세요.');
    const [data, error] = await postComment({
      post_id: pid,
      content: comment,
    });

    if (error) {
      console.error(error);
      return;
    }

    setComment('');
    setNeedRender(true);
  };

  return (
    <div id={'commentForm'} className={styles.container}>
      <textarea
        rows={3}
        className={`${styles.textarea} col-10`}
        placeholder={at ? `댓글을 입력해 주세요.` : `로그인이 필요합니다.`}
        value={comment}
        onChange={handleComment}
        style={{ resize: 'none' }}
        disabled={at == undefined}
      ></textarea>
      <div className="col-2">
        <button onClick={submit} disabled={at == undefined} className={styles.submitButton}>
          등록
        </button>
      </div>
    </div>
  );
}
