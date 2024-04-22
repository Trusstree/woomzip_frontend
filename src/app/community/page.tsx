import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";

export default function Home() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <main>
      {/* search bar */}
      {/* <div className={`my-2`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div> */}

      <PostMenu
        title={"관심있는 주제를 선택해보세요!"}>
        <div className="row my-0">
          <Icon className="col-6 col-sm-2 col-lg-1" src={"/icon/category_all.png"} title={"전체"} width={60} height={60} />
          <Icon className="col-6 col-sm-2 col-lg-1" src={"/icon/category_normal.png"} title={`일반`} param={`일반`} width={60} height={60} />
          <Icon className="col-6 col-sm-2 col-lg-1" src={"/icon/category_qna.png"} title={`질문`} param={`질문`} width={60} height={60} />
          <Icon className="col-6 col-sm-2 col-lg-1" src={"/icon/category_notice.png"} title={`공지`} param={`공지`} width={60} height={60} />
        </div>
      </PostMenu>

      <PostMenu
        title={"다양한 건축고민을 나누어보세요!"}
        routeUrl={"/community/write"}
        routeText={"글쓰기"}>
        <PostList
          numShowItems={numShowItems} 
          numShowPages={numShowPages} />
      </PostMenu>  
    </main>
  );
}