"use client";

import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
import { postComment } from "@/apis/commentAPI";
import { elapsedTimeText } from "@/lib/stringUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <div className="my-1">
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
        <div className="my-3">
          {comments.map((e, i) => (
            <div key={i} className="py-3 px-4" style={{ background: "#FAFBFC" }}>
              <div className="d-flex justify-content-between" style={{ marginBottom: "15px" }}>
                <div className="row" style={{ width: "400px" }}>
                  <div style={{ width: "50px", height: "40px" }}>
                    <Image
                      src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg"}
                      alt={"pic"}
                      width={40}
                      height={40}
                      style={{
                        objectFit: "cover",
                        borderRadius: "50px",
                        overflow: "hidden",
                        width: "35px",
                        height: "35px",
                      }}
                    />
                  </div>
                  <div style={{ width: "200px", marginTop: "5px", fontWeight: "600" }}>{e["nickname"]}</div>
                </div>
                <div>{elapsedTimeText(e["updated_at"] || e["created_at"])}</div>
              </div>
              <div style={{ width: "95%", marginLeft: "5%" }}>{e["content"]}</div>
              <hr style={{ border: "1px solid gray" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
