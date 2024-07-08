import { getLivingReviews } from "@/actions/apis/living";
import { ReviewMiniBox } from "@/app/living/[pid]/_components/ReviewMiniBox";
import Link from "next/link";

async function loadData() {
  "use server";

  let [review, count, rating] = [[], 0, 0];

  const [data, error] = await getLivingReviews(1);
  if (error) {
    console.error(error);
    return { review, count, rating };
  }

  review = data.data[0]["pavilion_review"];
  count = data.data[0]["pavilion_review_cnt"];
  rating = data.data[0]["pavilion_review_rating"] || 0;

  return { review, count, rating };
}

export async function LivingInfo() {
  const { review, count, rating } = await loadData();
  const url = "/living/1/review";

  return (
    <div style={{ marginTop: "20px", width: "100%" }}>
      <div
        style={{
          margin: "10px 0",
          fontSize: "17px",
        }}
      >
        지금까지 {count}팀이 살아봤어요!
      </div>
      <hr />
      <div className="d-flex justify-content-between" style={{ margin: "30px 0 10px 0" }}>
        <h5>
          후기({count}) ★ {rating.toFixed(1)}
        </h5>
        <Link style={{ color: "gray", fontSize: "15px" }} href={url}>
          전체보기
        </Link>
      </div>
      <div className="row flex-nowrap overflow-auto g-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {review.map((e, i) => (
          <ReviewMiniBox
            key={e["pavilion_review_id"]}
            id={e["fk_pavilion_id"]}
            nickname={e["nickname"]}
            date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
            helpful={e["helpful"]}
            tag={JSON.parse(e["tag"])}
            comment={e["pavilion_review_text"]}
            images={JSON.parse(e["pavilion_review_images"])}
          />
        ))}
      </div>
    </div>
  );
}
