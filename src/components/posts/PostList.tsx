"use client"

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/api/postAPI";
import { useSearchParams } from "next/navigation";

type Post = {
  id: number,
  category: string,
  title: string,
  text: string,
  author: string,
  profilePicture:string,
  timestamp: number,
  viewCount: number,
  commentCount: number,
  likeCount:number
}

type PostListProps = {
}

export default function PostList (props: PostListProps) {
	const { } = props;
  const [posts, setPosts] = useState([] as Post[]);
	const searchParam = useSearchParams(); 
	
	useEffect(() => {
		( async() => {
			const { data, error } = await getPosts(searchParam);
			
			if(error) console.log(error);
			else {
				setPosts(data.slice(0,4));
			}
		})();
	},[]);

	return(
		<>
			{posts.map((e: any, i:number)=>(
				<PostCard data={e} key={i} className={``}/>
			))}
		</>
	)
}