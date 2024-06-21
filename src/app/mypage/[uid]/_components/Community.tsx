"use client";

import { getPosts } from "@/actions/apis/postAPI";
import PostList from "@/components/posts/PostList";
import PostMenu from "@/components/posts/PostMenu";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Community({ userData }) {
  const [numShowItems, numShowPages] = [12, 10];
  const searchParams = useSearchParams();
  const page = searchParams.has("page") ? Number(searchParams.get("page")) : 1;
  const category = searchParams.get("category");
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
        console.log(error);
        return;
      }
      setPostData(data);
    })();
  }, [searchParams, page]);

  return (
    <>
      <PostMenu title={"내가 쓴 글을 확인해보세요!"}>
        <PostList numShowItems={numShowItems} numShowPages={numShowPages} />
      </PostMenu>
    </>
  );
}
