import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import { HouseList } from "@/components/house/HouseList";
import PostList from "@/components/posts/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <main className={``}>
      {/* 검색창
      <div className={`my-3`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div> */}

      {/* 캐러셀 */}
      <div className={`my-3 d-flex`}>
        <Carousel
          className="w-100 me-2"
          skip={0}
          limit={4} />
        <Image
          className="d-none d-md-block rounded-4"
          alt="main post"
          src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
          width={200}
          height={500}
          unoptimized={true}
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
        title={"1억 미만으로 지을 수 있는 주택들을 구경해보세요!"}
        routeUrl={"/house"}
        routeText={"더보기"}
        horizontalScroll={true} >
        <HouseList
          numShowItems={6}
          searchCondition={undefined} />
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
        routeUrl={"/community"}
        routeText={"더보기"}
        horizontalScroll={true} >
        <PostList numShowItems={6} />
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