"use client"

import { truncatedText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type MainPagePostProps = {
  data: any
  className?: string
  style?: CSSProperties
}

export default function MainPagePost(props: MainPagePostProps) {
  const router = useRouter();
  const { data, className, style } = props;

  return (
    <div className="col-md-4 col-lg-3">
      <div className="d-flex flex-column align-items-center w-100">
        <button type="button"
          style={{...style, color:"#101648"}}
          className={`${className?className:""} d-flex btn rounded-lg p-0 w-100`}
          onClick={()=>{router.push(`/house/${data.id}`);}}>
          <Image
            className="rounded-4 w-100 m-0 p-1"
            src={`${data?.image?data.image:""}`}
            alt={`${data.title}`}
            width={250}
            height={250}
            style={{objectFit:"cover"}}
            placeholder={"blur"}
            blurDataURL={"/blur_image.png"} />
        </button>
        <div className="w-100 text-left px-1">
          <div>{truncatedText(data.title,13)}</div>

          <div className="row g-0 fs-6" style={{textDecoration:"none"}}>
            <div className="col-6">{data.price}만원</div>
            <div className="col-3">{data.floorSpace}평</div>
            <div className="col-3">4.8/5.0</div>
          </div>

        </div>
      </div>
    </div>
  );
}