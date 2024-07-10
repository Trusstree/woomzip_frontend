import Count from "@/components/posts/Count";
import AppPostList from "@/app/_components/PostList";
import PostMenu from "@/components/posts/PostMenu";
import CommentForm from "@/app/community/[pid]/_components/CommentForm";
import Comment from "@/app/community/[pid]/_components/Comment";
import DOMPurify from "isomorphic-dompurify";
import { loadData } from "@/app/community/[pid]/_actions/actions";

type PageParams = {
  pid: number;
};

const style = {
  일반: { backgroundColor: "#CCD6FF", color: "#314FC0" },
  공지: { backgroundColor: "#FFCCCC", color: "#C03142" },
  질문: { backgroundColor: "#E2FFCC", cololr: "#8AC031" },
  칼럼: { backgroundColor: "#CC99CC", cololr: "#8CCCCC" },
};

export default async function page({ params }: { params: PageParams }) {
  const { pid } = params;
  const { postData, comments, isPostLike, isCommentLike } = await loadData(pid);

  return (
    <div style={{ backgroundColor: "#F8F8FA" }}>
      <main
        style={{
          width: "90%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "40px 0",
          }}
        >
          <button
            style={{
              padding: "3px 10px",
              marginRight: "12px",
              borderRadius: "4px",
              border: "1px solid #EDF0F4",
              backgroundColor: "#EDF0F4",
              color: "#ADB3BF",
              fontWeight: 600,
            }}
          >
            이전글
          </button>
          <button
            style={{
              padding: "3px 10px",
              marginRight: "12px",
              borderRadius: "4px",
              border: "1px solid #EDF0F4",
              backgroundColor: "#EDF0F4",
              color: "#ADB3BF",
              fontWeight: 600,
            }}
          >
            다음글
          </button>
          <button
            style={{
              padding: "3px 10px",
              borderRadius: "4px",
              border: "1px solid #EDF0F4",
              backgroundColor: "#EDF0F4",
              color: "#ADB3BF",
              fontWeight: 600,
            }}
          >
            목록
          </button>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            width: "100%",
            padding: "40px 30px",
          }}
        >
          <div
            style={{
              backgroundColor: style[postData.category].backgroundColor,
              borderColor: style[postData.category].backgroundColor,
              width: "60px",
              fontSize: "16px",
              color: style[postData.category].color,
              borderRadius: "15px",
              padding: "3px 7px",
              textAlign: "center",
              margin: "10px 0",
            }}
          >
            {postData["category"]}
          </div>

          <h2 style={{ paddingTop: "30px" }}>{postData.title}</h2>

          <div className="row" style={{ marginTop: "20px" }}>
            <div style={{ width: "50px", height: "40px" }}>
              <img
                src={postData?.["user_img_url"] || "/blur_image.png"}
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
            <div
              style={{
                fontSize: "16px",
                color: "gray",
                fontWeight: "400",
                width: "auto",
                margin: "5px 0 0 0",
              }}
            >
              {postData["nickname"]}
            </div>
          </div>

          <div
            style={{ width: "100%", minHeight: "500px", margin: "40px 0" }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(String(postData["content"])),
            }}
          />
          <div
            className={`card-footer rounded-bottom-3 fw-normal px-2`}
            style={{ backgroundColor: "white", borderColor: "white" }}
          >
            <div className="d-flex justify-content-between" style={{ backgroundColor: "#ffffff" }}>
              <Count
                pid={pid}
                viewCount={postData["view_count"]}
                commentCount={comments.length}
                likeCount={postData["post_like_count"]}
                isPostLike={isPostLike}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "30px",
            margin: "40px 0",
          }}
        >
          <div style={{ fontSize: "22px", fontWeight: "600" }}>댓글</div>
          <div className="d-flex flex-column">
            <CommentForm pid={pid} isCommentLike={isCommentLike} />
            <div>
              {comments.map((e, i) => (
                <Comment key={i} data={e} isCommentLike={isCommentLike} />
              ))}
            </div>
          </div>
        </div>

        {/* 추천정보 */}
        <PostMenu title={"더 많은 글을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
          <AppPostList numShowItems={6} />
        </PostMenu>
      </main>
    </div>
  );
}
