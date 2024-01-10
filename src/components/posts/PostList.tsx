"use client"

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPostCount, getPosts } from "@/api/postAPI";
import { useSearchParams } from "next/navigation";
import Pagination from "../Pagination";
import PostCardPlaceHolder from "./PostCardPlaceholder";

// type Post = {
//   id: number
//   category: string
//   title: string
//   text: string
//   author: string
//   profilePicture:string
//   timestamp: number
//   viewCount: number
//   commentCount: number
//   likeCount:number
// }

type PostListProps = {
	numShowItems: number
	numShowPages?: number
}

export default function PostList(props: PostListProps) {
	const { numShowItems, numShowPages } = props;
	const searchParams = useSearchParams();
  const page = (searchParams.has("page"))?Number(searchParams.get("page")):1;
  const category = searchParams.get("category");
  const [count, setCount] = useState(0);
	const [postData, setPostData] = useState(undefined);

  useEffect( () => {
    (async ()=>{
      const params={
        skip: numShowItems*(page-1),
        limit: numShowItems,
      };
      if(category) params["category"]=category;
			
      const { count, countError } = await getPostCount(params);
      if(countError) {console.log(countError); return;}
      setCount(count);

      const { data, error } = await getPosts(params);
      if(error) {console.log(error); return;}
      setPostData(data);
    })();
  },[searchParams, page])

	return (
		<>
			{postData?
        postData.map((e: any, i:number)=>(
          <PostCard data={e} key={i} className={``}/>
        ))
      :
        new Array(numShowItems).fill(0).map((e: any, i:number)=>(
          <PostCardPlaceHolder key={i}/>
        ))}
			{numShowPages && <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
      />}
  </>);
}