"use client"

import { Children } from "@/type/props"
import { useRouter } from "next/navigation";

type CardProps = {
  title: string
  children: Children
  url?: string
  src?: string
  className?: string
}

export default function BasicCard(props: CardProps) {
  const { title, children, url, src, className }=props;
  const router = useRouter();
  
  return (
    <div className={`${className?className:''} col-3 col-md-4 col-sm-6`}>
      <div className={`card rounded-4 border-0`}>
        {src?
          <img src={src} className="card-img-top rounded-top-4" alt="..."
          onClick={()=>{url?router.push(url):undefined;}} style={url?{cursor:"pointer"}:undefined} /> : undefined
        }
        <div className="card-body">
          <h5 className="card-title my-2">{title}</h5>
          <p className="card-text">{children}</p>
        </div>
      </div>
    </div>
  );
}