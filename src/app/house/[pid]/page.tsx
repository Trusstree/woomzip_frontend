import { HouseClient } from "@/app/house/[pid]/HouseClient";
import { getSession } from "next-auth/react";

type PageParams = {
  pid: number
}

export default async function Home( {params} : {params: PageParams} ) {
  const { pid } = params;
  const session  = await getSession();
  
  return (
    <main className={`container px-5`}>
      <HouseClient session={session} pid={pid} />
    </main>
  );
}