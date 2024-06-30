"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/actions/apis/postAPI";
import { useSearchParams } from "next/navigation";
import AppPostCard from "./AppPostCard";
import PostCardPlaceHolder from "@/components/posts/PostCardPlaceholder";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/posts/PostCard";

type PostListProps = {
  numShowItems: number;
  numShowPages?: number;
};

export default function AppPostList(props: PostListProps) {
  const { numShowItems, numShowPages } = props;
  const searchParams = useSearchParams();
  const page = searchParams.has("page") ? Number(searchParams.get("page")) : 1;
  const category = searchParams.get("category");
  const [count, setCount] = useState(0);
  const [postData, setPostData] = useState(undefined);

  useEffect(() => {
    (async () => {
      const params = {
        skip: numShowItems * (page - 1) + 1,
        limit: numShowItems,
      };
      if (category) params["category"] = category;

      const [data, error] = await getPosts(params);

      if (error) {
        console.error(error);
        return;
      }

      setPostData(data.data[0].posts);
      setCount(data.data[0].total);
    })();
  }, [searchParams, page]);

  return (
    <>
      <div
        className="row flex-nowrap overflow-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {postData
          ? postData.map((e: any, i: number) => <PostCard data={e} key={i} />)
          : new Array(numShowItems).fill(0).map((e: any, i: number) => <PostCardPlaceHolder key={i} />)}
        {numShowPages && <Pagination numItems={count} numShowItems={numShowItems} numShowPages={numShowPages} />}
      </div>
    </>
  );
}
