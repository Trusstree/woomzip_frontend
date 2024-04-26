import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import { HouseList } from "@/components/house/HouseList";
import PostList from "@/components/posts/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <main className={``}>

      {/* 캐러셀 */}
      <div className={`my-3 d-flex`}>
        <Carousel
          className="w-100 me-2"
          skip={1}
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

      <PostMenu
        title={"다양한 집들을 구경해보세요!"}
        routeUrl={"/house"}
        routeText={"더보기"}
        horizontalScroll={true} >
        <HouseList
          numShowItems={6}
          searchCondition={{}} />
      </PostMenu>

      <PostMenu
        title={"건축이 처음이라면? 확인해야 할 정보!"}
        routeUrl={"/community"}
        routeText={"더보기"}
        horizontalScroll={true} >
        <PostList numShowItems={6} />
      </PostMenu>
    </main>
  );
}