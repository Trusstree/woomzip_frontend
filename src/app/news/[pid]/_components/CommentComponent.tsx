'use client';

import { getPostHeartUser } from '@/actions/apis/heartAPI';
import { getPost } from '@/actions/apis/postAPI';
import { getUserAccessToken } from '@/actions/auth/authAction';
import CommentForm from '@/app/news/[pid]/_components/CommentForm';
import CommentPagination from '@/app/news/[pid]/_components/CommentPagination';
import CommentText from '@/app/news/[pid]/_components/CommentText';
import { useEffect, useState } from 'react';

export default function CommentComponent({ pid, initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [needRender, setNeedRender] = useState(true);
  const [page, setPage] = useState(1);
  const [numShowItems, numShowPages] = [10, 5];
  const [isCommentLike, setIsCommentLike] = useState([]);
  const [at, setAT] = useState(undefined);

  useEffect(() => {
    (async () => {
      const at = await getUserAccessToken();
      if (!at) return;
      setAT(at);

      const [heartData, heartError] = await getPostHeartUser(pid);
      if (heartError) {
        console.error(heartError);
        return;
      }
      setIsCommentLike(heartData.data[0].isCommentLike);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!needRender) return;

      const [data, error] = await getPost(pid);
      if (error) {
        console.error(error);
        return;
      }

      setComments(data.data.comments);
      setNeedRender(false);
    })();
  }, [needRender]);

  return (
    <div
      style={{
        backgroundColor: 'white',
        margin: '50px 0',
      }}
    >
      <div style={{ fontSize: '20px', fontWeight: '600' }}>댓글</div>
      <div className="d-flex flex-column">
        <CommentForm pid={pid} setNeedRender={setNeedRender} />
        <div>
          {comments
            .filter((_, i) => i >= numShowItems * (page - 1) && i < numShowItems * page)
            .map((e, i) => (
              <CommentText key={i} data={e} isCommentLike={isCommentLike.includes(e['comment_id']) ? 1 : 0} />
            ))}
        </div>
        <CommentPagination
          page={page}
          setPage={setPage}
          numItems={comments.length}
          numShowItems={numShowItems}
          numShowPages={numShowPages}
        />
      </div>
    </div>
  );
}
