"use client"

import { getPost } from "@/api/postAPI";
import { useEffect, useState } from "react";

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

export default function Postpage(props: PostpageProps){
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
      <h1>{postData.title} {postData.category}</h1>
      <h5>{postData.updated_at}</h5>
      <div>{postData.viewCount} {postData.likeCount} {postData.comments}</div>
      <div>{postData.text}</div>

    </div>
    :
    <div>Loading</div>
  )
}