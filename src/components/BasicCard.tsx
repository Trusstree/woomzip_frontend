"use client"

import { Children } from "@/type/props"
import { useRouter } from "next/navigation";

type BasicCardProps = {
  title: string
  children?: Children
  url?: string
  src?: string
  className?: string
  selected?: boolean
}

export default function BasicCard(props: BasicCardProps) {
  const { title, children, url, src, className }=props;
  const router = useRouter();
  
  return (
    <div className={`${className?className:''} shadow rounded-4`}>
      <div className={`card rounded-3 border-0`}>
        {src?
          <img src={src} className="card-img-top rounded-top-3" alt="..."
          onClick={()=>{url?router.push(url):undefined;}} style={url?{cursor:"pointer"}:undefined} /> : undefined
        }
        <div className="card-body">
          <h5 className="card-title mx-3 my-2 fw-bold">{title}</h5>
          <div className="card-text mx-3">{children}</div>
        </div>
      </div>
    </div>
  );
}