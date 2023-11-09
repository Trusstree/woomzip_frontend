import SearchBox from "@/components/forms/SearchBox";
import Icon from "@/components/posts/Icon";
import PostList from "@/components/posts/PostList";
import PostMenu from "@/components/posts/PostMenu";



export default function Home() {
  return (
    <main className={`container my-2`}>
      {/* search bar */}
      <div className={`my-2`}>
        <SearchBox
          className="text-black"
          placeholder={"찾고 싶은 내용을 검색해보세요!"}
        />
      </div>

      <PostMenu
        title={"관심있는 주제를 선택해보세요!"}>
        <div className="d-flex">
        <Icon src={"icon_moduledhouse.png"} url={`/community?search=모듈형주택`}>모듈형주택</Icon>
          <Icon src={"icon_house.png"} url={`/community?search=일반주택`}>일반주택</Icon>
          <Icon src={"icon_multihouse.png"} url={`/community?search=다세대주택`}>다세대주택</Icon>
          <Icon src={"icon_sangahouse.png"} url={`/community?search=상가주택`}>상가주택</Icon>
          <Icon src={"icon_sanga.png"} url={`/community?search=상가`}>상가</Icon>
        </div>
      </PostMenu>

      <PostMenu
        title={"다양한 건축고민을 나누어보세요!"}
        routeUrl={"/community/write"}
        routeText={"글쓰기"}>
        <PostList />
      </PostMenu>      
    </main>
  );
}

const posts=[
  {
    id: 1,
    category:"자유주제",
    title: "제목제목제목제목",
    text: "내용내용내용내용",
    author: "글쓴이",
    profilePicture:"/logo_truss.png",
    timestamp: 3000,
    viewCount: 2,
    commentCount: 0,
    likeCount:0
  },
  {
    id:2,
    category:"자유주제2",
    title: "제목제목제목제목2",
    text: "내용내용내용내용",
    author: "글쓴이",
    profilePicture:"/logo_truss.png",
    timestamp: 3000,
    viewCount: 2,
    commentCount: 0,
    likeCount:0
  },
  {
    id:3,
    category:"자유주제3",
    title: "제목제목제목제목3",
    text: "내용내용내용내용",
    author: "글쓴이",
    profilePicture:"/logo_truss.png",
    timestamp: 3000,
    viewCount: 2,
    commentCount: 0,
    likeCount:0
  },
  {
    id:4,
    category:"자유주제4",
    title: "제목제목제목제목4",
    text: "내용내용내용내용",
    author: "글쓴이",
    profilePicture:"/logo_truss.png",
    timestamp: 3000,
    viewCount: 2,
    commentCount: 0,
    likeCount:0
  },
  {
    id:5,
    category:"자유주제5",
    title: "제목제목제목제목5",
    text: "내용내용내용내용",
    author: "글쓴이",
    profilePicture:"/logo_truss.png",
    timestamp: 3000,
    viewCount: 2,
    commentCount: 0,
    likeCount:0
  }
]