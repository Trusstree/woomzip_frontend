import AddHouse from "@/app/mypage/[uid]/house/_components/AddHouse";
import RouteButton from "@/components/RouteButton";

export default function MyHouse({ params, searchParams }) {
  const uid = params.uid;
  return (
    <main className={`container`}>
      <AddHouse uid={uid} />
    </main>
  );
}
