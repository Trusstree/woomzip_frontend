import { HouseClient } from "@/app/house/[pid]/HouseClient";

type PageParams = {
  pid: number
}

export default function Home( {params} : {params: PageParams} ) {
  const { pid } = params;
  
  return (
    <main className={`container px-5`}>
      <HouseClient pid={pid} />
    </main>
  );
}