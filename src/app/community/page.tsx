"use client";

import Icon from "@/components/posts/Icon";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";
import { Suspense } from "react";
import { isMobile, isBrowser } from "react-device-detect";

export default function Community() {
  const [numShowItems, numShowPages] = [24, 10];
  return (
    <div>
      {isBrowser &&
        <div>
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
        </div>
      }

      {isMobile &&
        <div  style={{width:"101vw", marginLeft:"-4vw", overflow:"hidden"}}>
          <div style={{ width: "100%", fontSize: "20px", fontWeight: "600", margin: "30px 0 0 0", paddingLeft:"4vw" }}>
          <span style={{color:"#314FC0"}}>움집</span>에서 당신의 이야기를 들려주세요
          </div>
          <div style={{ width: "100%" }}>
            <div className="row" style={{marginLeft:"3%", marginTop:"20px"}}>
              <Icon style={{ margin: "0", padding:"0" }} title="전체" param={""} pathname={"/community"} />
              <Icon style={{ margin: "0", padding:"0" }} title="일반" param={`일반`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding:"0"  }} title="질문" param={`질문`} pathname={"/community"} />
              <Icon style={{ margin: "0", padding:"0"  }} title="공지" param={`공지`} pathname={"/community"} />
            </div>

          </div>

          <div style={{width:"102vw"}}>
            <PostMenu title={""} routeUrl={"/community/write"} routeText={"글쓰기"} children={""}>
            </PostMenu>
            <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
          </div>
        </div>
      }
    </div>
  );
}

{/*import Icon from "@/components/posts/Icon";
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
}*/}