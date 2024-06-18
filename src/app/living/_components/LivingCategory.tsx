"use client";

export default function CategoryButton({
  title,
  imgSrc,
  category,
}: {
  title: string;
  imgSrc: string;
  category?: string;
}) {
  // href={`${"/community"}${"" ? `?category=${category}` : ``}`}
  return (
    <div className="btn" style={{ width: "auto" }}>
      <div style={{ width: "65px", height: "37px" }}>
        <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"} width={30}></img>
      </div>
      <div style={{ fontSize: "15px" }}>전체</div>
    </div>
  );
}
