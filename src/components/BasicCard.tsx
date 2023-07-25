"use client"

import { Children } from "@/type/props"
import { useRouter } from "next/navigation";

type BasicCardProps = {
  title?: string
  children?: Children
  url?: string
  src?: string
  className?: string
  selected?: boolean
  href?: string
}

export default function BasicCard(props: BasicCardProps) {
  const { title, children, url, src, className, href }=props;
  const router = useRouter();
  
  return (
    <div className={`${className?className:''} shadow rounded-4`}
      onClick={href?()=>{router.push(href)}:undefined} style={href?{cursor:"pointer"}:undefined}>
      <div className={`card rounded-3 border-0`}>
        {src?
          <img src={src} height="300px" className="card-img-top rounded-top-3" alt="..."
          onClick={()=>{url?router.push(url):undefined;}} style={url?{cursor:"pointer"}:undefined} />
          :undefined
        }
        <div className="card-body">
          {title?<h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>:undefined}
          <div className="card-text mx-3">{children}</div>
        </div>
      </div>
    </div>
  );
}