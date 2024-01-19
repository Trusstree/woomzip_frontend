"use client"

import { alertImage } from "@/lib/alertUtil";
import { truncatedText } from "@/lib/stringUtil";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type DetailPostProps = {
  src: string
  className?: string
  children: string
}

export default function DetailPost(props: DetailPostProps) {
  const router = useRouter();
  const { src, className, children } = props;

  return (
    <div className="col-md-4 col-lg-3">
      <div className="d-flex flex-column align-items-center w-100">
        <button type="button"
          style={{color:"#101648"}}
          className={`${className?className:""} d-flex btn rounded-lg p-0 w-100`}
          onClick={async ()=>{
            await alertImage(children, src);
          }}>
          <Image
            className="rounded-4 w-100 m-0 p-1"
            src={src}
            alt={`${src}`}
            width={250}
            height={250}
            style={{objectFit:"cover"}} />
        </button>
        <div className="w-100 text-center px-1">
          <div>{truncatedText(children,13)}</div>

        </div>
      </div>
    </div>
  );
}