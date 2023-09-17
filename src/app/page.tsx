import SearchBox from "@/components/forms/SearchBox";
import MainPagePost from "@/components/posts/MainPagePost";
import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";

export default function Home() {
  return (
    <main className={`container px-5`}>
      {/* 검색창 */}
      <div className={`my-5`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div>

      {/* 캐러셀 */}
      <div className={`my-5 row`}>
        <img
          className="col-10 p-0"
          alt="main post"
          src="truss_logo.png"
          height={500}
        />
        <img
          className="col-2 p-0"
          alt="main post"
          src="truss_logo.png"
        />
      </div>

      <PostMenu
        title={"다양한 건축고민을 나누어보세요!"}
        routeUrl={"/community"}
        routeText={"더보기"}>
        <div className="d-flex">
          <Icon src={"truss_logo.png"} url={"/"}>모듈형주택</Icon>
          <Icon src={"truss_logo.png"} url={"/"}>일반주택</Icon>
          <Icon src={"truss_logo.png"} url={"/"}>다세대주택</Icon>
          <Icon src={"truss_logo.png"} url={"/"}>상가주택</Icon>
          <Icon src={"truss_logo.png"} url={"/"}>상가</Icon>
        </div>
      </PostMenu>

      <PostMenu
        title={"인기 건축칼럼을 확인해보세요!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>

      <PostMenu
        title={"건축이 처음이라면? 확인해야 할 정보!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>

      <PostMenu
        title={"건축주들의 고민상담소, 만담장소"}
        routeUrl={"/community"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"truss_logo.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>
    </main>
  );
}