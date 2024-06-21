"use client";

import AddHouse from "@/app/mypage/[uid]/house/_components/AddHouse";
import RouteButton from "@/components/RouteButton";
import { useSearchParams } from "next/navigation";

export default function MyHouse({ uid }) {
  const params = useSearchParams();

  return (
    <main className={`container`}>
      {params.get("method") == "add" && <AddHouse uid={uid} />}
      {params.get("method") == "edit" && <AddHouse uid={uid} />}
      {(!params.get("method") || (params.get("method") != "add" && params.get("method") != "edit")) && (
        <RouteButton url="/">홈으로 가기</RouteButton>
      )}
    </main>
  );
}
