import PostCard from "@/components/posts/PostCard";

export default function MypagePostList({
  posts,
  numShowItems,
  numShowPages,
}: {
  posts: Array<any>;
  numShowItems: number;
  numShowPages?: number;
}) {
  const postData = posts.filter((_, i) => i < numShowItems);

  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {postData.map((e: any, i: number) => (
        <PostCard data={e} key={i} />
      ))}
    </div>
  );
}
