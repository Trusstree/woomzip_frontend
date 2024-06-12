import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import { HouseList } from "@/components/house/HouseList";
import PostList from "@/components/posts/PostList";
import Image from "next/image";
import { Suspense } from "react";
import { getHouses } from "@/apis/HouseAPI";
import { LivingCardList } from "@/components/living/LivingCardList";

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
      <div className={`d-flex`} style={{marginTop:"15px"}}>
        <Carousel className="w-100" houseData={houseData} />
      </div>

      <div className="container align-content-center" style={{width:"100%", height:"500px"}}>
        <PostMenu
          title={"다른 사람들의 이야기를 들어보세요"}
          routeUrl={"/community"}
          routeText={"더보기"}
          horizontalScroll={true}
        >
          <Suspense>
            <PostList numShowItems={2} />
          </Suspense>
        </PostMenu>
      </div>

      <div className="container align-content-center" style={{width:"100%", height:"600px"}}>
        <PostMenu
          title={"먼저 무료로 살아보세요"}
          routeUrl={"/living"}
          routeText={"더보기"}
          horizontalScroll={true}
        >
          <Suspense>
            <LivingCardList />
          </Suspense>
        </PostMenu>
      </div>

      <div className="container align-content-center" style={{width:"100%", height:"700px"}}>
        <PostMenu
          title={"당신을 위한 집들을 준비해두었어요"}
          routeUrl={"/house"}
          routeText={"더보기"}
          horizontalScroll={true}>
          <Suspense>
            <HouseList numShowItems={6} houseData={houseData} count={houseCount} />
          </Suspense>
        </PostMenu>
      </div>
    </main>
  );
}
