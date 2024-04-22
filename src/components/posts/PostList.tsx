"use client"

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/apis/postAPI";
import { useSearchParams } from "next/navigation";
import Pagination from "../Pagination";
import PostCardPlaceHolder from "./PostCardPlaceholder";

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
        skip: numShowItems*(page-1)+1,
        limit: numShowItems,
      };
      if(category) params["category"]=category;

      const { data, error } = await getPosts(params);
      if(error) {console.error(error); return;}
      setPostData(data.data.posts);
      setCount(data.data.total);
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