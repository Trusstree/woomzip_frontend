import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/posts/Carousel";
import { HousePost } from "@/components/house/HousePost";
import MainPagePost from "@/components/posts/MainPagePost";
import PostList from "@/components/posts/PostList";

export default function Home() {
  return (
    <main className={`container px-5`}>
      
      {/* 검색창
      <div className={`my-3`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div> */}

      {/* 캐러셀 */}
      <div className={`my-3 row`}>
        <Carousel className={"col-10"} height={500} />
        <img
          className="col-2 p-0 rounded-4"
          alt="main post"
          src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
        />
      </div>

      {/* <PostMenu
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
      </PostMenu> */}

      <PostMenu
        title={"1억 미만으로 지을 수 있는 북유럽 스타일 주택들을 구경해보세요!"}
        routeUrl={"/"}
        routeText={"더보기"}>
        <HousePost number={4}/>
        
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
        <PostList />
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