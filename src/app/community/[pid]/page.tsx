import PostClient from "@/app/community/[pid]/PostClient";

type PageParams = {
  pid: number
}

export default function page( {params} : {params: PageParams} ) {
  const { pid } = params;

  return (
    <main className={`container px-5`}>
      <PostClient pid={pid} />
    </main>
  );
}