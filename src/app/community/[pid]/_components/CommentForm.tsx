"use client";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { postComment } from "@/actions/apis/commentAPI";
import { useEffect, useState } from "react";
import { getUserdataByToken } from "@/lib/parseUtil";

export default function CommentForm({ pid, setNeedRender }: { pid: number | string; setNeedRender: any }) {
  const [comment, setComment] = useState("");
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
    if (!comment) return alert("메시지를 입력해주세요.");
    const [data, error] = await postComment({
      post_id: pid,
      content: comment,
    });

    if (error) {
      console.error(error);
      return;
    }

    setComment("");
    setNeedRender(true);
  };

  return (
    <div id={"commentForm"} className="d-flex" style={{ margin: "30px 0" }}>
      <textarea
        rows={3}
        className="col-10"
        placeholder={at ? `댓글을 입력해 주세요.` : `로그인이 필요합니다.`}
        value={comment}
        onChange={handleComment}
        style={{ resize: "none" }}
        disabled={at == undefined}
      ></textarea>
      <div className="col-2">
        <button
          onClick={submit}
          disabled={at == undefined}
          style={{
            backgroundColor: "white",
            border: "none",
            color: "#314FC0",
            fontSize: "17px",
            fontWeight: "600",
            width: "90%",
            marginLeft: "10%",
            padding: "30px 0",
            borderRadius: "10px",
            boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}
