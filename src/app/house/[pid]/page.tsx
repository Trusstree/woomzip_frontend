import { HouseClient } from "@/app/house/[pid]/HouseClient";
import { getSession } from "next-auth/react";

type PageParams = {
  pid: number
}

export default async function Home( {params} : {params: PageParams} ) {
  const { pid } = params;
  
  return (
    <main className={`container px-5`}>
      <HouseClient pid={pid} />
    </main>
  );
}