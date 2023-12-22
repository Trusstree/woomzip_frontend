"use client"

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPostCount, getPosts } from "@/api/postAPI";
import { useSearchParams } from "next/navigation";
import Pagination from "../Pagination";

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
	searchCondition: {}
}

export default function PostList (props: PostListProps) {
	const { numShowItems, numShowPages, searchCondition } = props;
	const searchParams = useSearchParams();
  const rawPage = Number(searchParams.get("page"));
  const page = (rawPage>0)?rawPage:1;
  const [count, setCount] = useState(0);
	const [postData, setPostData] = useState([]);

  useEffect( () => {
    (async ()=>{
      const params={
        skip: numShowItems*(page-1),
        limit: numShowItems,
        ...searchCondition
      };
			
      const { count, countError } = await getPostCount(searchCondition);
      if(countError) {console.log(countError); return;}
      setCount(count);

      const { data, error } = await getPosts(params);
      if(error) {console.log(error); return;}
      setPostData(data);
    })();
  },[searchCondition, page])

	return(
		<>
			{postData.map((e: any, i:number)=>(
				<PostCard data={e} key={i} className={``}/>
			))}
			{numShowPages && <Pagination
        numItems={count}
        numShowItems={numShowItems}
        numShowPages={numShowPages}
      />}
		</>
	)
}