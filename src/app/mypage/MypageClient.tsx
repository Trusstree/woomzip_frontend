"use client"

import { signOut, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Community from "./Community";
import House from "./House";
import Profile from "./Profile";

export default function MypageClient() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState(undefined);
  const [page, setPage] =useState("");
  const router = useRouter();
  const params = useSearchParams();

  useEffect(()=>{
    (async () => {
      console.log(page);
    })();
  },[page]);

  return (session!=undefined) &&
    <>
      <div className="my-5 row">
        <div className="col-4">
          <div
            className="my-3 py-3 d-flex flex-column"
            style={{backgroundColor:"lightgray"}}>
            <img src={"/logo.png"} />
            <div>{session.user.name}</div>
            <div>{session.user.email}</div>
            <div>{session.user.id}</div>
            <div>
              좋아요
            </div>
            <div>
              내가 쓴 글
            </div>
            <div>
              내가 쓴 댓글
            </div>
          </div>
          <div
            className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
            style={{backgroundColor:"#101648"}}
            onClick={()=>{router.push("/mypage/?page=profile"); setPage("profile");}}>
            <span
              className="fs-5 fw-bold"
              style={{wordBreak:"keep-all"}}>
              프로필 수정
            </span>
          </div>
          <div
            className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
            style={{backgroundColor:"#101648"}}
            onClick={()=>{router.push("/mypage/?page=community"); setPage("community");}}>
            <span
              className="fs-5 fw-bold"
              style={{wordBreak:"keep-all"}}>
              커뮤니티
            </span>
          </div>
          <div
            className="btn text-white my-3 py-3 d-flex justify-content-center align-items-center"
            style={{backgroundColor:"#101648"}}
            onClick={()=>{router.push("/mypage/?page=house"); setPage("house");}}>
            <span
              className="fs-5 fw-bold"
              style={{wordBreak:"keep-all"}}>
              제품 정보 수정
            </span>
          </div>
        </div>
        <div className="col-8">
          {(params.get("page")=="profile") && <Profile/>}
          {(params.get("page")=="community") && <Community/>}
          {(params.get("page")=="house") && <House/>}
          
        </div>
      </div>
    </>
}