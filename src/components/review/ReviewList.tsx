import ReviewCard from "@/components/review/ReviewCard";
import Link from "next/link";

export default async function ReviewList({
  review,
  count,
  rating,
  url,
}: {
  review: Array<any>;
  count: number;
  rating: number;
  url?: string;
}) {
  return (
    <div style={{ marginTop: "20px", width: "100%" }}>
      <div className="d-flex justify-content-between" style={{ margin: "30px 0 10px 0" }}>
        <h5>
          후기({count}) ★ {rating ? rating.toFixed(1) : 0}
        </h5>
        {url && (
          <Link style={{ color: "gray", fontSize: "15px" }} href={url}>
            전체보기
          </Link>
        )}
      </div>
      <div className="row flex-nowrap overflow-auto g-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {review?.map((e, i) => (
          <ReviewCard
            key={e["pavilion_review_id"]}
            id={e["fk_pavilion_id"]}
            nickname={e["nickname"]}
            date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
            helpful={e["helpful"]}
            tag={e["tag"]}
            comment={e["pavilion_review_text"]}
            images={e["pavilion_review_images"]}
          />
        ))}
      </div>
    </div>
  );
}
