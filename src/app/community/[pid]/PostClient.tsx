"use client"

import { getPost } from "@/apis/postAPI";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import PostMenu from "@/components/posts/PostMenu";
import PostList from "@/components/posts/PostList";

type PostpageProps = {
  pid:number
}

type PostData = {
  id: number
  author: string
  category: string
  comments: string
  created_at: string
  likeCount: number
  pictures: string
  text: string
  thumbnail: string
  title: string
  updated_at: string
  viewCount: number
}

export default function PostClient(props: PostpageProps){
  const { pid } = props;
  const [postData, setPostData]=useState(undefined as PostData|undefined);
  
  useEffect( () => {
    const getPostdata = async () => {
      const { data, error } = await getPost(pid);
      
      if(error) console.log(error);
      else setPostData(data);
    }
    getPostdata();
  },[]);

  return (postData?
    <div className="container">
      <div className="mt-5 mb-0 d-flex justify-content-between">
        <h5>
          {postData.category}
        </h5>
        <h5 className="fw-normal d-flex justify-content-end">
          {postData.updated_at.split("T")[0]}
        </h5>
      </div>
      
      <h1>{postData.title}</h1>

      {/* <div className="fw-normal d-flex justify-content-end">
        <div className="m-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{postData.viewCount}</span>
        </div>

        <div className="m-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={25}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <span>{postData.likeCount}</span>
        </div>
      </div> */}

      <div
        className="my-5"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(String(postData.text)),
        }}
      />
      {/* 추천정보 */}
      <PostMenu
        title={"더 많은 글을 구경해보세요!"}
        routeUrl={"/house"}
        routeText={"더보기"}
        horizontalScroll={true}>
        <PostList numShowItems={6} />
      </PostMenu>
    </div>
    :
    <div>Loading</div>
  )
}