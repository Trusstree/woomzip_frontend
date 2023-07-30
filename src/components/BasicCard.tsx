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
  width?: number | `${number}`
  height?: number | `${number}`
}

export default function BasicCard(props: BasicCardProps) {
  const { title, children, url, src, className, href, width, height }=props;
  const router = useRouter();
  
  return (
    <div className={`${className?className:''} shadow rounded-4`}
      onClick={href?()=>{router.push(href)}:undefined} style={{cursor:href?"pointer":"auto"}}>
      <div className={`card rounded-3 border-0 h-100`}>
        {src?
          <img src={src} className="card-img-top rounded-top-3" alt="..."
          height={height?height:"auto"} width={width?width:"auto"}
          onClick={()=>{url?router.push(url):undefined;}} style={{cursor:url?"pointer":"auto"}} />
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