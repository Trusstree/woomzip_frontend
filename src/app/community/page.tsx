import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import SearchBox from "@/components/forms/SearchBox";
import PostList from "@/components/posts/PostList";

export default function Home() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <main className={`container px-5 my-2`}>
      {/* search bar */}
      {/* <div className={`my-2`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div> */}

      <PostMenu
        title={"관심있는 주제를 선택해보세요!"}>
        <div className="d-flex mt-0">
          <Icon src={"category_all.png"}>전체</Icon>
          <Icon src={"category_notice.png"} param={`공지`}>공지</Icon>
          <Icon src={"category_qna.png"} param={`질문`}>질문</Icon>
          <Icon src={"category_normal.png"} param={`일반`}>일반</Icon>
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