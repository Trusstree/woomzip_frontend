"use client";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { postComment } from "@/actions/apis/commentAPI";
import { useEffect, useState } from "react";

export default function CommentForm({ pid, isCommentLike }) {
  const [comment, setComment] = useState("");
  const [at, setAT] = useState(undefined);

  useEffect(() => {
    (async () => {
      setAT(await getUserAccessToken());
      console.log(isCommentLike);
    })();
  }, []);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const submit = async () => {
    const [data, error] = await postComment({
      post_id: pid,
      content: comment,
    });

    if (error) {
      console.error(error);
      return;
    }

    setComment("");
    //setComments(["render"]);
  };

  return (
    <div className="d-flex">
      <textarea
        rows={3}
        className="col-10"
        placeholder={at ? `댓글을 입력해 주세요.` : `로그인이 필요합니다.`}
        value={comment}
        onChange={handleComment}
        style={{ resize: "none" }}
        disabled={at == undefined}
      ></textarea>
      <button
        className="col-2"
        onClick={submit}
        disabled={at == undefined}
        style={{ backgroundColor: "none", border: "none", color: "#314FC0", fontSize: "17px", fontWeight: "600" }}
      >
        등록
      </button>
    </div>
  );
}
