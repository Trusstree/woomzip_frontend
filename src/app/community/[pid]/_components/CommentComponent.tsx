"use client";

import { getPost } from "@/actions/apis/postAPI";
import CommentForm from "@/app/community/[pid]/_components/CommentForm";
import CommentPagination from "@/app/community/[pid]/_components/CommentPagination";
import CommentText from "@/app/community/[pid]/_components/CommentText";
import { useEffect, useRef, useState } from "react";

export default function CommentComponent({
  pid,
  isCommentLike,
  initialComments,
}) {
  const [comments, setComments] = useState(initialComments);
  const [needRender, setNeedRender] = useState(true);
  const [page, setPage] = useState(1);
  const [numShowItems, numShowPages] = [10, 5];

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
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "30px",
        margin: "40px 0",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "600" }}>댓글</div>
      <div className="d-flex flex-column">
        <CommentForm pid={pid} setNeedRender={setNeedRender} />
        <div>
          {comments
            .filter(
              (_, i) =>
                i >= numShowItems * (page - 1) && i < numShowItems * page
            )
            .map((e, i) => (
              <CommentText key={i} data={e} isCommentLike={isCommentLike} />
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
