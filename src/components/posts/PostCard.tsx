"use client"

import DOMPurify from "dompurify";
import Link from "next/link";

type PostCardProps = {
  data: DataProps,
  className?: string
}

type DataProps = {
  idx: number,
  category: string,
  title: string,
  text: string,
  author: string,
  profilePicture:string,
  updated_at: string,
  viewCount: number,
  commentCount: number,
  likeCount:number
}

const style={
  "일반":{backgroundColor:"#101648"},
  "공지":{backgroundColor:"#FF7070"},
  "질문":{backgroundColor:"#00B6B6"}
}

export default function PostCard (props: PostCardProps) {
  const { data, className } = props;
  
  return (
    <div className={`${className?className:""} col-md-4 col-lg-3 fs-6`}>
      <div className="card rounded-3">
        <div className={`card-header pb-2`}style={{backgroundColor:style[data.category].backgroundColor, borderColor:style[data.category].backgroundColor}}>
          <div className="fw-bold d-flex justify-content-between mt-2 text-white">
            <span>{data.category}</span>
            <span>{data.updated_at.split("T")[0]}</span>
          </div>
          
        </div>
        <div className="card-body fw-normal pt-3 pb-0 mb-0">
          <Link
            className="fs-4 fw-bold text-black text-truncate"
            href={{ pathname: `/community/${data.idx}`,}}
            style={{textDecoration:"none", display: "block"}}
            >
            {data.title}
          </Link>
          <Link
            className="mt-3 text-black text-wrap"
            href={{ pathname: `/community/${data.idx}`,}}
            style={{textDecoration:"none", display: "block", height:"100px", overflow:"hidden"}}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.text),//String(truncatedText(, 15))),
            }}/>

        </div>
        <div
          className={`card-footer rounded-bottom-3 fw-normal px-2`}
          style={{backgroundColor:"white", borderColor:"white"}}>
          {/* <div className="d-flex">
            <img src={data.profilePicture} width={40} height={40}/>
            <div className="mx-3 fw-bold align-self-center">{data.author}</div>
          </div> */}
          <div className="fw-normal d-flex justify-content-end">
            <div className="m-2 d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="ps-1" style={{width:"34px"}}>{data.viewCount}</div>
            </div>
            <div className="m-2 d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <div className="ps-1" style={{width:"34px"}}>{data.commentCount}</div>
            </div>
            <div className="m-2 d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <div className="ps-1" style={{width:"34px"}}>{data.likeCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}