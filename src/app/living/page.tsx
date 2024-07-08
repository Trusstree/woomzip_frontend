import { LivingCardList } from "@/app/living/_components/LivingCardList";
import CategoryButton from "@/components/CategoryButton";
import PostMenu from "@/components/posts/PostMenu";
import SearchComponent from "@/components/SearchComponent";

export default function Living() {
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
          className="row"
          style={{
            width: "auto%",
            marginLeft: "0",
            marginBottom: "40px",
            height: "80px",
          }}
        >
          <CategoryButton
            title={"전체"}
            imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"}
          />
          <CategoryButton
            title={"숙소"}
            imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/pavilion.png"}
            category={"숙소"}
          />
          <CategoryButton
            title={"투어"}
            imgSrc={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/tour.png"}
            category={"투어"}
          />
          <SearchComponent />
        </div>
        <PostMenu title={""} routeUrl={"/community/write"} routeText={""}>
          <LivingCardList numShowItems={4} />
        </PostMenu>
      </div>
    </div>
  );
}
