import { ReviewBox } from "@/app/living/[pid]/review/_components/ReviewBox";
import { getLivingReviews } from "@/actions/apis/livingAPI";
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

export default async function Review() {
  const { review, count, rating } = await loadData();

  return (
    <main>
      <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ fontSize: "28px", fontWeight: "500" }}>
          <span>살아보기 후기</span>
        </div>
        <div className="row">
          <div className="col-4" style={{ minWidth: "350px" }}>
            <div
              className="card sticky-top"
              style={{
                width: "100%",
                zIndex: 1,
                border: "none",
              }}
            >
              <div className="container" style={{ height: "60px" }}></div>
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "3px 3px 13px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div style={{ fontSize: "20px", margin: "10px 0" }}>
                  힐링리버<span>({count})</span>
                </div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>★ {rating.toFixed(1)}</div>
                <div style={{ fontSize: "20px", margin: "10px 0" }}>가장 많이 받은 키워드</div>
                <Link
                  className="btn"
                  href={"/living/1/review/write"}
                  style={{
                    backgroundColor: "#314FC0",
                    color: "white",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  후기 쓰기
                </Link>
              </div>
            </div>
          </div>
          <div className="col-8" style={{ marginTop: "40px", minWidth: "350px" }}>
            {review.map((e, i) => (
              <ReviewBox
                key={i}
                id={e["fk_pavilion_id"]}
                index={i}
                nickname={e["nickname"]}
                date={e["updated_at"] ? e["updated_at"] : e["created_at"]}
                rating={e["rating"]}
                tag={e["tag"]}
                comment={e["pavilion_review_text"]}
                images={e["pavilion_review_images"]}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
