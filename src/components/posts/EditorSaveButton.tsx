"use client"

import { postPost } from "@/api/postAPI"
import { CSSProperties, useCallback, useEffect } from "react"

type EditorSaveButtonProps = {
  postData: any
  children: string
  className?: string
  style?: CSSProperties
}

export default function EditorSaveButton(props: EditorSaveButtonProps) {
  const { postData, children, className, style } = props;

  const postPostData = useCallback( async (postData:any)=>{
    const { data, error } = await postPost({
      ...postData,
      viewCount:0,
      likeCount:0,
      comments:""
    });
    console.log(data);
    if(error)console.log(error);
  },[postData])

  return (
    <button
      className={`${className} btn btn-lg fw-bold`}
      style={{...style}}
      onClick={()=>(postPostData(postData))}>
      {children}
    </button>
  )
}