'use client';

import PostCard from '@/app/news/_components/PostCard';
import PostCardPlaceHolder from '@/app/news/_components/PostCardPlaceholder';
import Pagination from '@/components/Pagination';

export default function PostList({ postData, postCount, numShowItems, numShowPages }) {
  return (
    <div className="row">
      {postData || postData.length > 0
        ? postData.map((e: any, i: number) => <PostCard data={e} key={i} className={`col-md-6 col-12`} />)
        : new Array(numShowItems).fill(0).map((e: any, i: number) => <PostCardPlaceHolder key={i} />)}
      {numShowPages && <Pagination numItems={postCount} numShowItems={numShowItems} numShowPages={numShowPages} />}
    </div>
  );
}
