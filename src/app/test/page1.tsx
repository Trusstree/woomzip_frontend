"use client"

import { getS3Url } from "@/utils/s3";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [src, setSrc] = useState("logo_truss.png");

  // useEffect(()=>{
  //   console.log(session); // 로그인 정보 확인용
  // },[])

  const testFunction = async () => {
    setSrc(await getS3Url("Pyramid.PNG"));
  };
  
  return (
    <main className={`container`}>
      <div className="d-flex flex-column justify_content-center">
        <button type="button"
          style={{backgroundColor:"#6764F7"}}
          className={`my-5 px-4 py-2 btn btn-primary rounded-lg fw-bold fs-5`}
          onClick={async ()=>{await testFunction()}}>
          {"TEST"}
        </button>
        <img src={src}/>
      </div>

      
    </main>
  )
}