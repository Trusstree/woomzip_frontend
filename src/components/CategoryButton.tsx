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
        <img src={imgSrc} width={30}></img>
      </div>
      <div style={{ fontSize: "15px" }}>{title}</div>
    </div>
  );
}
