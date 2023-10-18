import SearchBox from "@/components/forms/SearchBox";
import MainPagePost from "@/components/posts/MainPagePost";
import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/posts/Carousel";

export default function Home() {
  return (
    <main className={`container px-5`}>
      {/* 검색창 */}
      <div className={`my-3`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div>

      {/* 캐러셀 */}
      <div className={`my-3 row`}>
        <Carousel className={"col-10"} data={data} height={500} />
        <img
          className="col-2 p-0"
          alt="main post"
          src="logo_truss.png"
        />
      </div>

      <PostMenu
        title={"다양한 건축고민을 나누어보세요!"}
        routeUrl={"/community"}
        routeText={"더보기"}>
        <div className="d-flex">
          <Icon src={"icon_moduledhouse.png"} url={"/"}>모듈형주택</Icon>
          <Icon src={"icon_house.png"} url={"/"}>일반주택</Icon>
          <Icon src={"icon_multihouse.png"} url={"/"}>다세대주택</Icon>
          <Icon src={"icon_sangahouse.png"} url={"/"}>상가주택</Icon>
          <Icon src={"icon_sanga.png"} url={"/"}>상가</Icon>
        </div>
      </PostMenu>

      {/* <PostMenu
        title={"인기 건축칼럼을 확인해보세요!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu> */}

      <PostMenu
        title={"건축이 처음이라면? 확인해야 할 정보!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>

      {/* <PostMenu
        title={"건축주들의 고민상담소, 만담장소"}
        routeUrl={"/community"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu> */}
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