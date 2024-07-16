"use client";

import { postHouseReview } from "@/actions/apis/houseAPI";
import { HouseReviewImageInputComponent } from "@/app/mypage/[uid]/review/write/_components/HouseReviewImageInput";
import { HouseReviewToggle } from "@/app/mypage/[uid]/review/write/_components/HouseReviewToggle";
import { Rating } from "@/app/mypage/[uid]/review/write/_components/Rating";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HouseReviewWriteClient() {
  const router = useRouter();

  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [helpful, setHelpful] = useState(true);
  const [rating, setRating] = useState(0); // 별점 상태 추가

  const handleBadge = (e) => {
    setTags((oldValues) => {
      const arr = oldValues;
      if (!arr.includes(e.target.value) && arr.length < 5) {
        e.target.checked = true;
        arr.push(e.target.value);
      } else {
        e.target.checked = false;
        return arr.filter((elem) => elem !== e.target.value);
      }
      return arr;
    });
  };

  const submit = async () => {
    const body = {
      house_id: 1,
      review: comment,
      tag: tags,
      rating: rating, // 별점 추가
      review_img: images,
    };

    // 입력된 값을 콘솔에 출력
    console.log("Comment:", comment);
    console.log("Images:", images);
    console.log("Tags:", tags);
    console.log("Rating:", rating);

    const [data, error] = await postHouseReview(body);
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);

    router.push("/living/1");
    return;
  };

  return (
    <>
      <div style={{ margin: "60px 0 30px 0" }}>
        <div style={{ fontSize: "21px", fontWeight: "500" }}>키워드를 선택해주세요. (최대 5개 선택가능)</div>
        <div>
          <div style={{ width: "100%" }}>
            <HouseReviewToggle name={"친절해요"} onClick={handleBadge} theme={"success"} />
            <HouseReviewToggle name={"믿을만 해요"} onClick={handleBadge} theme={"success"} />
            <HouseReviewToggle name={"처음 비용 그대로에요"} onClick={handleBadge} theme={"success"} />
            <HouseReviewToggle name={"소통이 잘 돼요"} onClick={handleBadge} theme={"success"} />
            <HouseReviewToggle name={"유쾌해요"} onClick={handleBadge} theme={"success"} />
            <HouseReviewToggle name={"마음에 들어요"} onClick={handleBadge} theme={"warning"} />
            <HouseReviewToggle name={"집이 예뻐요"} onClick={handleBadge} theme={"warning"} />
            <HouseReviewToggle name={"완성도가 높아요"} onClick={handleBadge} theme={"warning"} />
            <HouseReviewToggle name={"오래 살 수 있을 것 같아요"} onClick={handleBadge} theme={"warning"} />
            <HouseReviewToggle name={"단열이 잘 돼요"} onClick={handleBadge} theme={"warning"} />
            <HouseReviewToggle name={"추천해요"} onClick={handleBadge} theme={"primary"} />
          </div>
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <div style={{ fontSize: "21px", fontWeight: "500" }}>사진을 첨부해주세요.</div>
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
          <HouseReviewImageInputComponent className="col-2" name={"image"} setData={setImages} />
        </div>
        클릭해서 이미지 추가
      </div>

      <div style={{ margin: "30px 0" }}>
        <div style={{ fontSize: "21px", fontWeight: "500" }}>후기를 남겨주세요.</div>
        <textarea
          className="container"
          style={{
            width: "100%",
            padding: "0",
            margin: "0",
            resize: "none",
            overflowY: "auto",
            borderRadius: "10px",
            borderColor: "lightGray",
          }}
          rows={8}
          placeholder={"최대한 구체적으로 적어주세요!"}
          value={comment}
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              setComment(comment + "\t");
            }

            if (event.key === "Enter") {
              event.preventDefault();
              setComment(comment + "\n");
            }
          }}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
      </div>

      <div style={{ margin: "30px 0" }}>
        <div style={{ fontSize: "21px", fontWeight: "500" }}>만족도를 별점으로 알려주세요</div>
        <Rating rating={rating} setRating={setRating} />
      </div>

      <div
        className="btn"
        style={{
          width: "400px",
          height: "50px",
          borderRadius: "10px",
          padding: "10px",
          margin: "30px 0",
          backgroundColor: "#314FC0",
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
