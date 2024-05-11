"use client";

import { postPavilionReview } from "@/apis/living";
import { LivingReviewImageInputComponent } from "@/components/living/LivingReviewImageInput";
import { LivingReviewToggle } from "@/components/living/LivingReviewToggle";
import { useState } from "react";

export function LivingReviewWriteClient() {
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [helpful, setHelpful] = useState(true);

  const handleBadge = (e: any) => {
    setTags((oldValues) => {
      const arr = oldValues;
      if (!arr.includes(e.target.value) && arr.length < 5) {
        e.target.checked = true;
        arr.push(e.target.value);
      } else {
        e.target.checked = false;
        return arr.filter((elem) => elem != e.target.value);
      }
      return arr;
    });
  };

  const submit = async () => {
    const body = {
      pavilion_id: 1,
      review: comment,
      tag: tags,
      review_img: images,
      helpful: helpful,
    };
    console.log(body);

    const [data, error] = await postPavilionReview(body);
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);

    return;
  };

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <div style={{ color: "#101648", fontSize: "21px", fontWeight: "500" }}>
          키워드를 선택해주세요. (최대 5개 선택가능)
        </div>
        {/* 태그 제한 5개 구현 안딤 */}
        <div>
          <div style={{ width: "100%" }}>
            <LivingReviewToggle name={"집이 예뻐요"} handleBadge={handleBadge} theme={"success"} />
            <LivingReviewToggle name={"깔끔해요"} handleBadge={handleBadge} theme={"success"} />
            <LivingReviewToggle name={"주변 자연이 좋아요"} handleBadge={handleBadge} theme={"success"} />
            <LivingReviewToggle name={"힐링하기 좋아요"} handleBadge={handleBadge} theme={"success"} />
            <LivingReviewToggle name={"조용해요"} handleBadge={handleBadge} theme={"success"} />
            <LivingReviewToggle name={"가족과 다녀오기 좋아요"} handleBadge={handleBadge} theme={"warning"} />
            <LivingReviewToggle name={"아이와 다녀오기 좋아요"} handleBadge={handleBadge} theme={"warning"} />
            <LivingReviewToggle name={"친구와 다녀오기 좋아요"} handleBadge={handleBadge} theme={"warning"} />
            <LivingReviewToggle name={"또 오고 싶어요"} handleBadge={handleBadge} theme={"primary"} />
            <LivingReviewToggle name={"전원생활 경험하기 좋아요"} handleBadge={handleBadge} theme={"primary"} />
            <LivingReviewToggle name={"전원생활을 하고 싶어졌어요"} handleBadge={handleBadge} theme={"primary"} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div style={{ color: "#101648", fontSize: "21px", fontWeight: "500" }}>사진을 첨부해주세요.</div>
        {/* 여기는 사진을 여러장 첨부할 수 있어야함. 일단 틀만 만들어 놓음 */}
        <div className="row">
          {images.map((e, i) => (
            <img
              key={i}
              src={e}
              style={{
                width: "200px",
                height: "200px",
                backgroundColor: "lightGray",
                borderRadius: "20px",
                color: "white",
              }}
            />
          ))}
          <LivingReviewImageInputComponent className="col-2" name={"image"} setData={setImages} />
        </div>
        클릭해서 이미지 추가
      </div>

      <div style={{ marginTop: "40px" }}>
        <div style={{ color: "#101648", fontSize: "21px", fontWeight: "500" }}>후기를 남겨주세요.</div>
        {/* 텍스트 첨부 */}
        <textarea
          className="container"
          style={{
            width: "100%",
            minHeight: "200px",
            padding: "0",
            margin: "0",
            resize: "none",
            overflow: "hidden",
            borderRadius: "10px",
            borderColor: "lightGray",
          }}
          placeholder={"최대한 구체적으로 적어주세요!"}
          value={comment}
          onChange={(e) => {
            // 스크롤 늘어나는 거 싫어 ㅠㅠ
            if (e.target.scrollHeight === e.target.clientHeight) {
              setComment(e.target.value);
            }
          }}
          rows={8}
        ></textarea>
      </div>

      <div style={{ marginTop: "40px" }}>
        <div style={{ color: "#101648", fontSize: "21px", fontWeight: "500" }}>
          본 체험이 전원생활 선택에 있어서 조금이라도 도움이 되었나요?
        </div>
        <button
          type="button"
          className={`btn btn-outline-success`}
          onClick={() => {
            setHelpful(true);
          }}
          style={{ padding: "5px", margin: "5px" }}
        >
          네, 도움이 되었습니다.
        </button>
        <button
          type="button"
          className={`btn btn-outline-danger`}
          onClick={() => {
            setHelpful(false);
          }}
          style={{ padding: "5px", margin: "5px" }}
        >
          아뇨, 도움이 되지 않았습니다.
        </button>
      </div>

      <div
        className="btn"
        style={{
          width: "400px",
          height: "50px",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#101648",
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
        }}
        onClick={submit}
      >
        리뷰 업로드 하기
      </div>
    </>
  );
}
