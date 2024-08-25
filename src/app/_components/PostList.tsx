import PostCard from '@/components/posts/PostCard';

export default async function PostList({ postData }) {
  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {postData.map((e: any, i: number) => (
        <PostCard data={e} key={i} className="col-10 col-md-3" />
      ))}
    </div>
  );
}
