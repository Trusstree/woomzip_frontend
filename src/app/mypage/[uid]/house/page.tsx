import AddHouse from "@/app/mypage/[uid]/house/_components/AddHouse";
import RouteButton from "@/components/RouteButton";

export default function MyHouse({ params, searchParams }) {
  const uid = params.uid;
  return (
    <main className={`container`}>
      {searchParams.get("method") == "add" && <AddHouse uid={uid} />}
      {searchParams.get("method") == "edit" && <AddHouse uid={uid} />}
      {(!searchParams.get("method") ||
        (searchParams.get("method") != "add" && searchParams.get("method") != "edit")) && (
        <RouteButton url="/">홈으로 가기</RouteButton>
      )}
    </main>
  );
}
