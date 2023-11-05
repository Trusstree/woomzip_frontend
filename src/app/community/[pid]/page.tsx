import Postpage from "@/app/community/[pid]/Postpage";

type PageParams = {
  pid: number
}

export default function page( {params} : {params: PageParams} ) {
  const { pid } = params;

  return (
    <div>
      <Postpage pid={pid} />
    </div>
  );
}