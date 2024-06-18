"use client";

import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import Link from "next/link";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];
  return (
    <div>
      {isBrowser && (
        <div style={{width:"90%", maxWidth:"1300px", margin:"0 auto"}}>
          <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
            <span style={{ color: "#314FC0" }}>움집</span>에서 당신의 이야기를 들려주세요
          </div>

          <div className="container" style={{width:"100%", marginLeft:"0", overflow:"hidden", padding:"0", position:"relative"}}>
            <div className="row" style={{width:"auto%", marginLeft:"0", height:"80px"}}>
              <Link className="btn" style={{ width: "auto" }} href={`${"/community"}${"" ? `?category=${""}` : ``}`}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/all.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}}>
                  전체
                </div>
              </Link>
              <Link className="btn" style={{ width: "auto" }} href={`${"/community"}${"" ? `?category=${""}` : ``}`}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/best.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}}>
                  베스트
                </div>
              </Link>
              <Link className="btn" style={{ width: "auto" }} href={`${"/community"}${"일반" ? `?category=${"일반"}` : ``}`}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/free.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}} >
                  일반
                </div>
              </Link>
              <Link className="btn" style={{ width: "auto" }} href={`${"/community"}${"질문" ? `?category=${"질문"}` : ``}`}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/qna.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}}>
                  질문
                </div>
              </Link>
              <div className="btn" style={{width:"auto"}}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/column.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}}>
                  칼럼
                </div>
              </div>
              <Link className="btn" style={{ width: "auto" }} href={`${"/community"}${"공지" ? `?category=${"공지"}` : ``}`}>
                <div style={{width:"65px", height:"37px"}}>
                  <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/announce.png"} width={30}></img>
                </div>
                <div style={{fontSize:"15px"}}>
                  공지
                </div>
              </Link>
            </div>
            <div style={{width:"auto", position: "absolute", top: 0, right:0, borderLeft:"2px solid gray", backgroundColor:"white"}}>
                <input
                  style={{width:"300px", marginLeft:"20px", height:"40px"}}
                  placeholder={" 찾고 싶은 내용을 검색해보세요"}/>
                <div className="btn"
                style={{width:"auto", backgroundColor:"white", borderRadius:"0"}}
                data-bs-toggle="modal"
                data-bs-target={`#search_modal`}>
                  <div style={{width:"70px", height:"37px"}}>
                    <img src={"https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/search.png"} width={30}></img>
                  </div>
                  <div style={{fontSize:"15px"}} >
                    검색
                  </div>
                </div>
              </div>
          </div>

          {/* <div style={{ width: "600px" }}>
            <PostMenu title={""}>
              <div className="row">
                <Icon style={{ margin: "0 2px" }} title="전체" param={""} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="일반" param={`일반`} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="질문" param={`질문`} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="공지" param={`공지`} pathname={"/community"} />
              </div>
            </PostMenu>
          </div> */}

          <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
            <Suspense>
              <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
            </Suspense>
          </PostMenu>
        </div>
      )}

      {isMobile && (
        <div style={{ width: "101vw", marginLeft: "-4vw", overflow: "hidden" }}>
          <div style={{ width: "100%", fontSize: "20px", fontWeight: "600", margin: "30px 0 0 0", paddingLeft: "4vw" }}>
            <span style={{ color: "#314FC0" }}>움집</span>에서 당신의 이야기를 들려주세요
          </div>

          <div style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3%", marginTop: "20px" }}>
              <Icon style={{ margin: "0", padding: "0" }} title="전체" param={""} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="일반" param={`일반`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="질문" param={`질문`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding: "0" }} title="공지" param={`공지`} pathname={"/community"} />
            </div>
          </div>

          <div style={{ width: "102vw" }}>
            <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
              <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
            </PostMenu>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /*import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import { BrowserView, MobileView } from "react-device-detect";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];

  return (
    <>
        <BrowserView>
          <div style={{ width: "500px", fontSize: "33px", fontWeight: "600", margin: "70px 0" }}>
            <span style={{color:"#314FC0"}}>움집</span>에서 당신의 이야기를 들려주세요
          </div>
          <div style={{ width: "600px" }}>
            <PostMenu title={""}>
              <div className="row">
                <Icon style={{ margin: "0 2px" }} title="전체" param={""} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="일반" param={`일반`} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="질문" param={`질문`} pathname={"/community"} />
                <Icon style={{ margin: "0 2px" }} title="공지" param={`공지`} pathname={"/community"} />
              </div>
            </PostMenu>
          </div>

          <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"}>
            <Suspense>
              <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
            </Suspense>
          </PostMenu>
        </BrowserView>


        <MobileView>
          <div>
            안녕
          </div>
  </MobileView>
    </>
  );
}*/
}
