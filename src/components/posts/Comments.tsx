"use client";

import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
import { postComment } from "@/apis/commentAPI";
import { elapsedTimeText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Comments({ pid, comments, setComments }) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [at, setAT] = useState(undefined);
  console.log("qwer1");
  useEffect(() => {
    (async () => {
      setAT(await getUserAccessToken());
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
    setComments(["render"]);
  };

  return (
    <div className="my-5">
      <div>댓글 ({comments?.length})</div>
      <div className="my-3 d-flex flex-column">
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
          <button className="col-2" onClick={submit} disabled={at == undefined}>
            제출
          </button>
        </div>
        <div className="my-3">
          {comments.map((e, i) => (
            <div key={i} className="py-3 px-4" style={{ background: "lightgray" }}>
              <div className="d-flex justify-content-between">
                <div>{e["nickname"]}</div>
                <div>{elapsedTimeText(e["updated_at"] || e["created_at"])}</div>
              </div>
              <div>{e["content"]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
