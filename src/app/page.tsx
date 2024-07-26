import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/app/_components/Carousel";
import LivingCardList from "@/components/living/LivingCardList";
import PostList from "@/app/_components/PostList";
import HouseList from "@/app/_components/HouseList";

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
              <PostList numShowItems={10} />
            </div>
          </PostMenu>
        </div>
      </div>

      {/* <div
        style={{
          width: "100%",
          padding: "50px 0",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu title={"먼저 무료로 살아보세요"} routeUrl={"/living"} routeText={"더보기"} horizontalScroll={true}>
            <LivingCardList numShowItems={4} />
          </PostMenu>
        </div>
      </div> */}

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
              <HouseList numShowItems={6} />
            </div>
          </PostMenu>
        </div>
      </div>
    </>
  );
}
