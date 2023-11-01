import MainPagePost from "@/components/posts/MainPagePost";
import PostMenu from "@/components/posts/PostMenu";

export default function Home() {
  const getMean = (data:any) => {
    let mean=0;
    data.ratingPost.forEach((e)=>{
      mean+=Number(e.rate);
    })
    return (mean/data.ratingPost.length).toFixed(1);
  }

  return (
    <main className={`container px-5`}>
      {/* 집 정보 */}
      <div>
        {/* 제목 */}
        <div className={`mt-5 mb-3`}>
          <div className="fs-1 fw-bold">{data.title}</div>
          <div className="d-flex justify-content-between">
            <div className="fs-4">{data.information.join(" ")}</div>
            <div className="fs-4">{data.tag.map((e)=>(`#${e}`)).join(" ")}</div>
          </div>
        </div>
        {/* 사진 */}
        <div className={`row justify-content-center`}>
          <div className="col-8 m-0 p-0">
            <img
              alt="main post"
              src="Newspaper.png"
              className="rounded-5 w-100 p-1"
            />
          </div>

          <div className="col-4 m-0 p-0">
            <img
              alt="sub post 1"
              src="Newspaper.png"
              className="rounded-5 w-100 p-1"
            />
            <img
              alt="sub post 2"
              src="Newspaper.png"
              className="rounded-5 w-100 p-1"
            />
          </div>
        </div>

        {/* 상세정보 */}
        <div className="">
          <PostMenu
            title={"집 상세정보"}
            routeUrl={"/posts"}>
            <div className="d-flex justify-content-center">
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
              <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
            </div>
          </PostMenu>
        
        {/* 상세설명 */}
          <div className="collapse collapsedExplanation row mb-3" id={"collapsedExplanation"}>
          <img
              alt="main post"
              src="Newspaper.png"
            />
          </div>
          <button
            type="button"
            style={{backgroundColor:"#101648"}}
            className={`w-100 btn px-4 py-2 btn rounded-lg fw-bold text-white`}
            data-bs-toggle="collapse"
            data-bs-target={`#collapsedExplanation`}
            aria-controls={`collapsedExplanation`}
            aria-expanded="false"
            >
            상세정보 펼쳐보기
          </button>
        </div>
      </div>

      {/* 상세정보 */}
      <PostMenu
        title={`평점 ${getMean(data)}/5.0`}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          {data.ratingPost.map((e)=>(
            <MainPagePost url={"/"} src={e.src}>
              <div>{e.title}</div>
              <div>({e.rate})</div>
            </MainPagePost>
          ))}
        </div>
      </PostMenu>

      <PostMenu
        title={"1억 미만으로 지을 수 있는 북유럽 스타일 주택들을 구경해보세요!"}
        routeUrl={"/posts"}
        routeText={"더보기"}>
        <div className="d-flex justify-content-center">
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
          <MainPagePost url={"/"} src={"logo_truss.png"}>ㅎㅇㅎㅇ</MainPagePost>
        </div>
      </PostMenu>
    </main>
  );
}


// type data = {
//   src: string
//   label: string
//   expl: string
// }

const data={
    title: "핀란드의 아기자기한 방",
    information: ["300만원", "20평", "방2", "화장실2", "다락포함"],
    tag:["20평대", "북유럽풍", "박곡지붕", "다락"],
    ratingPost:[
      {
        rate: "4.5",
        src: "Newspaper.png",
        title: "첫 번째"
      },
      {
        rate: "4.2",
        src: "Newspaper.png",
        title: "두 번째"
      },
      {
        rate: "5.0",
        src: "Newspaper.png",
        title: "세 번째"
      },
      {
        rate: "4.6",
        src: "Newspaper.png",
        title: "네 번째"
      }
    ]
  }

// const data = [
//   {
//     src:"Sanga.png",
//     label:"First slide label",
//     expl:"Some representative placeholder content for the first slide."
//   },
//   {
//     src:"Pyramid.png",
//     label:"Second slide label",
//     expl:"Some representative placeholder content for the second slide."
//   },
//   {
//     src:"SangaHouse.png",
//     label:"Third slide label",
//     expl:"Some representative placeholder content for the third slide."
//   },
//   {
//     src:"SoloHouse.png",
//     label:"Fourth slide label",
//     expl:"Some representative placeholder content for the fourth slide."
//   },  
// ] as data[];