import { getUserAccessToken } from "@/actions/auth/getUserAccessToken";
import { getPostHeartUser } from "@/apis/HeartAPI";
import { getPost } from "@/apis/postAPI";
import Count from "@/components/posts/Count";
import PostList from "@/components/posts/PostList";
import PostMenu from "@/components/posts/PostMenu";
import DOMPurify from "isomorphic-dompurify";
import CommentForm from "./_components/CommentForm";
import Comment from "./_components/Comment";

type PageParams = {
  pid: number;
};

const style = {
  일반: { backgroundColor: "#CCD6FF", color: "#314FC0" },
  공지: { backgroundColor: "#FFCCCC", color: "#C03142" },
  질문: { backgroundColor: "#E2FFCC", cololr: "#8AC031" },
};

async function purifyDOM(str: string) {
  "use server";
  return DOMPurify.sanitize(str);
}

async function loadData(pid) {
  "use server";
  let [postData, comments, isPostLike, isCommentLike] = [undefined, undefined, undefined, undefined];

  const [data, error] = await getPost(pid);

  if (error) {
    console.log(error);
    return { postData, comments, isPostLike, isCommentLike };
  }

  postData = data.data.post;
  comments = data.data.comments;

  // 로그인 확인하기
  const at = await getUserAccessToken();
  if (!at) return { postData, comments, isPostLike, isCommentLike };

  const [heartData, heartError] = await getPostHeartUser(pid);

  if (heartError) {
    console.error(heartError);
    return { postData, comments, isPostLike, isCommentLike };
  }

  isPostLike = heartData?.data[0]["isPostLike"];
  isCommentLike = heartData?.data[0]["isCommentLike"];

  return { postData, comments, isPostLike, isCommentLike };
}

export default async function page({ params }: { params: PageParams }) {
  const { pid } = params;
  const { postData, comments, isPostLike, isCommentLike } = await loadData(pid);
  const purifiedDOM = await purifyDOM(String(postData["content"]));
  return (
    <main className={`container px-5`}>
      <div>
        <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", marginTop: "80px" }}>
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

          <h2>{postData.title}</h2>

          <div className="row" style={{ marginTop: "30px" }}>
            <div style={{ width: "50px", height: "40px" }}>
              <img
                src={postData?.["user_img_url"] || "/blur_image.png"}
                alt={"pic"}
                width={40}
                height={40}
                style={{ objectFit: "cover", borderRadius: "50px", overflow: "hidden", width: "35px", height: "35px" }}
              />
            </div>
            <div style={{ fontSize: "16px", color: "gray", fontWeight: "400", width: "auto", margin: "5px 0 0 0" }}>
              {postData["nickname"]}
            </div>
          </div>

          <div
            className="py-5 my-5"
            style={{ minHeight: "500px" }}
            dangerouslySetInnerHTML={{
              __html: purifiedDOM,
            }}
          />
          <div
            className={`card-footer rounded-bottom-3 fw-normal px-2`}
            style={{ backgroundColor: "white", borderColor: "white" }}
          >
            <div className="d-flex justify-content-between" style={{ backgroundColor: "#FAFBFC" }}>
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

        <div style={{ backgroundColor: "#FAFBFC", borderRadius: "17px", padding: "30px", margin: "50px 0 100px 0" }}>
          <div className="my-1">
            <div style={{ fontSize: "22px", fontWeight: "600" }}>댓글</div>
            <div className="my-3 d-flex flex-column">
              <CommentForm pid={pid} isCommentLike={isCommentLike} />
              <div className="my-3">
                {comments.map((e, i) => (
                  <Comment key={i} data={e} isCommentLike={isCommentLike} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 추천정보 */}
        <PostMenu title={"더 많은 글을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
          <PostList numShowItems={6} />
        </PostMenu>
      </div>
    </main>
  );
}
