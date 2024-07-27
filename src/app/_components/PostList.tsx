import { getPosts } from "@/actions/apis/postAPI";
import PostCard from "@/components/posts/PostCard";

async function loadData(numShowItems: number) {
  const params = {
    skip: 1,
    limit: numShowItems,
  };

  const [data, error] = await getPosts(params);

  if (error) {
    console.error(error);
    return [];
  }

  return data.data[0].posts;
}

export default async function PostList({ numShowItems }) {
  const postData = await loadData(numShowItems);
  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {postData.map((e: any, i: number) => (
        <PostCard data={e} key={i} className="col-11" />
      ))}
    </div>
  );
}
