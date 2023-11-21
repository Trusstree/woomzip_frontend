import PostMenu from "@/components/posts/PostMenu";
import { HousePost } from "@/components/house/HousePost";

export default function Home() {
  return (
    <main className={`container px-5`}>

      <PostMenu
        title={"1억 미만으로 지을 수 있는 북유럽 스타일 주택들을 구경해보세요!"}
        routeUrl={"/"}
        routeText={"더보기"}>
        <HousePost number={12}/>
        
      </PostMenu>
    </main>
  );
}