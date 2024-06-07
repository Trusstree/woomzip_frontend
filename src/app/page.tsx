import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import { HouseList } from "@/components/house/HouseList";
import PostList from "@/components/posts/PostList";
import Image from "next/image";
import { Suspense } from "react";
import { getHouses } from "@/apis/HouseAPI";

async function loadData() {
  "use server";

  const [rawHouseData, houseError] = await getHouses({ skip: 1, limit: 6 });
  if (houseError) {
    console.error(houseError);
    return;
  }
  const [houseData, houseCount] = [rawHouseData.data[0].houses, rawHouseData.data[0].total_count];
  return { houseData, houseCount };
}

export default async function Home() {
  const { houseData, houseCount } = await loadData();

  return (
    <main className={``}>
      {/* 캐러셀 */}
      <div className={`my-3 d-flex`}>
        <Carousel className="w-100 me-2" houseData={houseData} />
        <Image
          className="d-none d-md-block rounded-4"
          alt="main post"
          src="https://trussbucket.s3.ap-northeast-2.amazonaws.com/ads/main+%E1%84%80%E1%85%AA%E1%86%BC%E1%84%80%E1%85%A9.png"
          width={200}
          height={500}
          unoptimized={true}
        />
      </div>

      <PostMenu title={"다양한 집들을 구경해보세요!"} routeUrl={"/house"} routeText={"더보기"} horizontalScroll={true}>
        <Suspense>
          <HouseList numShowItems={6} houseData={houseData} count={houseCount} />
        </Suspense>
      </PostMenu>

      <PostMenu
        title={"건축이 처음이라면? 확인해야 할 정보!"}
        routeUrl={"/community"}
        routeText={"더보기"}
        horizontalScroll={true}
      >
        <Suspense>
          <PostList numShowItems={6} />
        </Suspense>
      </PostMenu>
    </main>
  );
}
