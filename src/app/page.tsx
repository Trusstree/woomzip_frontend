"use client";

import { useEffect, useState } from "react";
import PostMenu from "@/components/posts/PostMenu";
import Carousel from "@/components/house/Carousel";
import { AppHouseList } from "@/components/house/AppHouseList";
import AppPostList from "@/components/posts/AppPostList";
import { Suspense } from "react";
import { getHouses } from "@/actions/apis/HouseAPI";
import { AppLivingCardList } from "@/components/living/AppLivingCardList";

async function loadData() {
  const [rawHouseData, houseError] = await getHouses({ skip: 1, limit: 6 });
  if (houseError) {
    console.error(houseError);
    return;
  }
  const [houseData, houseCount] = [
    rawHouseData.data[0].houses,
    rawHouseData.data[0].total_count,
  ];
  return { houseData, houseCount };
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [houseData, setHouseData] = useState([]);
  const [houseCount, setHouseCount] = useState(0);

  useEffect(() => {
    setIsClient(true);
    loadData().then((data) => {
      if (data) {
        setHouseData(data.houseData);
        setHouseCount(data.houseCount);
      }
    });
  }, []);

  return (
    <>
      <div>
        <Carousel className="w-100" />
      </div>

      {/* <div
        className="container align-content-center"
        style={{ width: "100%", height: "500px" }}
      >
        <PostMenu
          title={"다른 사람들의 이야기를 들어보세요"}
          routeUrl={"/community"}
          routeText={"더보기"}
          horizontalScroll={true}
        >
          <Suspense>
            <PostList numShowItems={4} />
          </Suspense>
        </PostMenu>
      </div> */}

      <div
        style={{
          width: "100%",
          padding: "100px 0",
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
              <AppPostList numShowItems={10}></AppPostList>
            </div>
          </PostMenu>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "100px 0",
          backgroundColor: "#FAFBFC",
        }}
      >
        <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
          <PostMenu
            title={"먼저 무료로 살아보세요"}
            routeUrl={"/living"}
            routeText={"더보기"}
            horizontalScroll={true}
          >
            <Suspense>
              <AppLivingCardList numShowItems={4} />
            </Suspense>
          </PostMenu>
        </div>
      </div>

      <div
        className="container align-content-center"
        style={{ width: "100%", height: "700px" }}
      >
        <PostMenu
          title={"당신을 위한 집들을 준비해두었어요"}
          routeUrl={"/house"}
          routeText={"더보기"}
          horizontalScroll={true}
        >
          <Suspense>
            <AppHouseList
              numShowItems={6}
              houseData={houseData}
              count={houseCount}
            />
          </Suspense>
        </PostMenu>
      </div>
    </>
  );
}
