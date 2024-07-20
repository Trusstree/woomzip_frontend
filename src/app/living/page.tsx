import LivingCardList from "@/components/living/LivingCardList";
import PostMenu from "@/components/posts/PostMenu";
import SearchComponent from "@/app/community/_components/SearchComponent";
import LivingCategory from "./_components/LivingCategory";
import { getLivings } from "@/actions/apis/livingAPI";

async function loadData() {
  "use server";
  const [data, error] = await getLivings();
  if (error) {
    console.log(error);
    return [];
  }
  return data.data[0];
}

export default async function Living() {
  const pavilions = await loadData();

  return (
    <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
      <div
        style={{
          width: "100%",
          fontSize: "33px",
          fontWeight: "600",
          margin: "70px 0",
          wordBreak: "keep-all",
        }}
      >
        <span style={{ color: "#314FC0" }}>무료로</span> 새로운 삶을 경험해보세요
      </div>
      <div
        className="container"
        style={{
          width: "100%",
          marginLeft: "0",
          overflow: "hidden",
          padding: "0",
          position: "relative",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            marginLeft: "0",
            overflow: "hidden",
            padding: "0",
            position: "relative",
          }}
        >
          <LivingCategory />
          <SearchComponent />
        </div>
        <PostMenu>
          <LivingCardList numShowItems={4} />
        </PostMenu>
      </div>
    </div>
  );
}
