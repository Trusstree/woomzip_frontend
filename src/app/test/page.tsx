import MainPagePost from "@/components/posts/MainPagePost";
import PostMenu from "@/components/posts/PostMenu";

export default function Home() {
  return (
    <main className={`container px-5`}>
      {/* 집 정보 */}
      <div>
        {/* 제목 */}
        <div className={`my-5`}>
          <div className="fs-1 fw-bold">핀란드의 아기자기한 방</div>
          <div className="d-flex justify-contents-between">
            <div className="fs-4">300만원 20평 방2 화장실2 다락포함</div>
            <div className="fs-4">#20평대 #북유럽풍 #박곡지붕 #다락</div>
          </div>
        </div>
        {/* 사진 */}
        <div className={`row g-5`}>
          <div className="col-8 row gx-5">
            <img
              alt="main post"
              src="Newspaper.png"
            />
          </div>

          <div className="col-4 row gx-5">
            <img
              alt="sub post 1"
              src="Newspaper.png"
            />
            <img
              alt="sub post 2"
              src="Newspaper.png"
            />
          </div>
        </div>

        {/* 상세정보 */}
        <div className="">
          <PostMenu
            title={"집상세정보"}
            routeUrl={"/posts"}>
            <div className="d-flex justify-content-center">
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
            </div>
          </PostMenu>
        
          <div className={`btn`}>
            더보기
          </div>
        </div>
      </div>

      <PostMenu
        title={"1억 미만으로 지을 수 있는 북유럽 스타일 주택들을 구경해보세요!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>
    </main>
  );
}


type data = {
  src: string
  label: string
  expl: string
}

const data = [
  {
    src:"Sanga.png",
    label:"First slide label",
    expl:"Some representative placeholder content for the first slide."
  },
  {
    src:"Pyramid.png",
    label:"Second slide label",
    expl:"Some representative placeholder content for the second slide."
  },
  {
    src:"SangaHouse.png",
    label:"Third slide label",
    expl:"Some representative placeholder content for the third slide."
  },
  {
    src:"SoloHouse.png",
    label:"Fourth slide label",
    expl:"Some representative placeholder content for the fourth slide."
  },  
] as data[];