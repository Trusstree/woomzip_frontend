"use client"

import { useRouter } from "next/navigation";

type SelectCardProps = {
  title: string
  url?: string
  src?: string
  className?: string
}

export default function SelectCard(props: SelectCardProps) {
  const { title, url, src, className }=props;
  const router = useRouter();
  
  return (
    <div className={`${className?className:''} w-100 shadow col-3 col-md-4 col-sm-6 rounded-4`}>
      <div className={`card rounded-4 border-0`}>
        {src?
          <img src={src} className="card-img-top" alt="..."
          onClick={()=>{url?router.push(url):undefined;}} style={url?{cursor:"pointer"}:undefined} /> : undefined
        }
        <div className="card-body">
          <h5 className="card-title my-2">{title}</h5>
        </div>
      </div>
    </div>
  );
}