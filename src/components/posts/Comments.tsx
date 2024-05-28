"use client";

export default function Comments({ pid, comments }) {
  return (
    <div className="my-5">
      <div>댓글 ({comments?.length})</div>
      <div className="my-3 d-flex flex-column">
        <div className="d-flex">
          <textarea className="col-10"></textarea>
          <button className="col-2">제출</button>
        </div>
        <div className="my-3">
          {comments.map((e) => (
            <div className="py-3 px-4" style={{ background: "lightgray" }}>
              <div className="d-flex justify-content-between">
                <div>{e["nickname"]}</div>
                <div>{e["updated_at"]?.split("T")[0] || e["created_at"]?.split("T")[0]}</div>
              </div>
              <div>{e["content"]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
