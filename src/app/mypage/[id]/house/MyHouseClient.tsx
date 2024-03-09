"use client"

import RouteButton from "@/components/RouteButton";
import { useSearchParams } from "next/navigation";
import AddHouse from "./AddHouse";
import EditHouse from "./EditHouse";

export default function MyHouse() {
  const params = useSearchParams();

  return (
    <main className={`container`}>
      {(params.get("method")=="add") && <AddHouse/>}
      {(params.get("method")=="edit") && <EditHouse/>}
      {(!params.get("method") || ((params.get("method")!="add") && (params.get("method")!="edit"))) &&
        <RouteButton url="/">홈으로 가기</RouteButton>}
    </main>
  )
}