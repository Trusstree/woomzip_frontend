'use client';

import PostCard from '@/app/news/_components/PostCard';
import Pagination from '@/components/Pagination';

export default function PostList({
  postData,
  postCount,
  numShowItems,
  numShowPages,
}: {
  postData: Array<any>;
  postCount?: number;
  numShowItems?: number;
  numShowPages?: number;
}) {
  return (
    <div className="row">
      {postData?.map((e: any, i: number) => <PostCard data={e} key={i} className={`col-md-6 col-12`} />)}
      {postCount && numShowItems && numShowPages && (
        <Pagination numItems={postCount} numShowItems={numShowItems} numShowPages={numShowPages} />
      )}
    </div>
  );
}
