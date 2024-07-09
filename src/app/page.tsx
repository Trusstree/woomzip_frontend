import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import AppHouseList from "@/components/house/AppHouseList";
import AppPostList from "@/components/posts/AppPostList";

export default async function Home() {
  return (
    <>
      <div>
        <Carousel className="w-100" />
      </div>

      <div
        style={{
          width: "100%",
          padding: "50px 0",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu
            title={"다른 사람들의 이야기를 들어보세요"}
            routeUrl={"/community"}
            routeText={"더보기"}
            horizontalScroll={true}
          >
            <div style={{ width: "100%", overflow: "hidden" }}>
              <AppPostList numShowItems={10} />
            </div>
          </PostMenu>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "50px 0",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu title={"먼저 무료로 살아보세요"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
            <div style={{ width: "100%", overflow: "hidden" }}>{/* <AppLivingCardList numShowItems={4} /> */}</div>
          </PostMenu>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "50px 0",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu
            title={"당신을 위한 집들을 준비해두었어요"}
            routeUrl={"/house"}
            routeText={"더보기"}
            horizontalScroll={true}
          >
            <div style={{ width: "100%", overflow: "hidden" }}>
              {/* @ts-expect-error Async Server Component */}
              <AppHouseList numShowItems={6} />
            </div>
          </PostMenu>
        </div>
      </div>
    </>
  );
}
