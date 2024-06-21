"use client";

import { getUserAccessToken } from "@/actions/auth/authAction";
import { postComment } from "@/apis/commentAPI";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import { BrowserView, MobileView } from "react-device-detect";

export default function Comments({ pid, comments, setComments, isCommentLike }) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [at, setAT] = useState(undefined);

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
    <div>
      <BrowserView className="my-1">
        <div style={{ fontSize: "22px", fontWeight: "600" }}>댓글</div>
        <div className="my-3 d-flex flex-column">
          <div className="d-flex">
            <textarea
              rows={3}
              className="col-10"
              placeholder={at ? `댓글을 입력해 주세요.` : `로그인이 필요합니다.`}
              value={comment}
              onChange={handleComment}
              style={{ resize: "none" }}
              disabled={at === undefined}
            ></textarea>
            <button
              className="col-2"
              onClick={submit}
              disabled={at === undefined}
              style={{ backgroundColor: "none", border: "none", color: "#314FC0", fontSize: "17px", fontWeight: "600" }}
            >
              등록
            </button>
          </div>
          <div className="my-3">
            {comments.map((e, i) => (
              <Comment key={i} data={e} isCommentLike={isCommentLike} />
            ))}
          </div>
        </div>
      </BrowserView>

      <MobileView style={{ width: "100%" }}>
        <div style={{ fontSize: "18px", fontWeight: "600" }}>댓글</div>
        <div className="my-3 d-flex flex-column">
          <div className="d-flex">
            <textarea
              rows={3}
              className="col-10"
              placeholder={at ? `댓글을 입력해 주세요.` : `로그인이 필요합니다.`}
              value={comment}
              onChange={handleComment}
              style={{ resize: "none" }}
              disabled={at === undefined}
            ></textarea>
            <button
              className="col-2"
              onClick={submit}
              disabled={at === undefined}
              style={{
                backgroundColor: "white",
                border: "none",
                color: "#314FC0",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              등록
            </button>
          </div>
          <div>
            {comments.map((e, i) => (
              <Comment key={i} data={e} isCommentLike={isCommentLike} />
            ))}
          </div>
        </div>
      </MobileView>
    </div>
  );
}
