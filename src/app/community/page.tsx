import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";

export default function Home() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <main>
      <div className="row" style={{display:"flex", justifyContent:"space-between", margin:"120px 0"}}>
        <div style={{ width:"500px", fontSize: "38px", fontWeight:"600"}}>전원생활 고민들,<br/>비슷한 사람들과 나눠보세요</div>
        {/* search bar */}
        {/* <div className={`my-2`}>
          <SearchBox
            className="text-black"
            placeholder={"찾고 싶은 내용을 검색해보세요!"}
          />
        </div> */}
        <div style={{width:"600px"}}>
          <PostMenu
            title={"관심있는 주제를 선택해보세요!"}>
            <div className="row">
              <Icon style={{margin:"5px"}} src={"/icon/category_all.png"} title={"전체"} width={50} height={50} />
              <Icon style={{margin:"5px"}} src={"/icon/category_normal.png"} title={`일반`} param={`일반`} width={50} height={50} />
              <Icon style={{margin:"5px"}} src={"/icon/category_qna.png"} title={`질문`} param={`질문`} width={50} height={50} />
              <Icon style={{margin:"5px"}} src={"/icon/category_notice.png"} title={`공지`} param={`공지`} width={50} height={50} />
            </div>
          </PostMenu>
        </div>
      </div>

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