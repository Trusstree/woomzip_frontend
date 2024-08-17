'use client';

import PostCard from '@/components/posts/PostCard';
import PostCardPlaceHolder from '@/components/posts/PostCardPlaceholder';
import Pagination from '@/components/Pagination';

type PostListProps = {
  numShowItems: number;
  numShowPages?: number;
};

export default function PostList({ postData, postCount, numShowItems, numShowPages }) {
  return (
    <>
      {postData || postData.length > 0
        ? postData.map((e: any, i: number) => <PostCard data={e} key={i} className={`col-md-4 col-lg-3`} />)
        : new Array(numShowItems).fill(0).map((e: any, i: number) => <PostCardPlaceHolder key={i} />)}
      {numShowPages && <Pagination numItems={postCount} numShowItems={numShowItems} numShowPages={numShowPages} />}
    </>
  );
}
