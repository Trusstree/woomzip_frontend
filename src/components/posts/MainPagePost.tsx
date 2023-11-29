"use client"

import { Children } from "@/types/props";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  url: string
  src: string
  children: Children
  className?: string
  style?: CSSProperties
}

export default function MainPagePost(props: MainPagePostProps) {
  const router = useRouter();
  const { url, src, children, className, style } = props;

  return (
    <div className="col-md-4 col-lg-3">
      <div className="d-flex flex-column align-items-center w-100">
        <button type="button"
        style={{...style, color:"#101648"}}
        className={`${className?className:""} d-flex btn rounded-lg fw-bold p-0 w-100`}
        onClick={()=>{router.push(url);}}>
          <img
            className="rounded-4 w-100 m-0 p-0"
            src={`${src}`}
            width={250} height={250}
            style={{objectFit:"cover"}}/>
        </button>
        <div className="w-100 text-left px-4">
          {children}
        </div>
      </div>
    </div>
  );
}