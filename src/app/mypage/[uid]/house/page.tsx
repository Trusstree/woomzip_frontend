import MyHouseClient from "./MyHouseClient";

export default function MyHouse({ params, searchParams }) {
  const uid = params.uid;
  return (
    <main className={`container`}>
      <MyHouseClient uid={uid} />
    </main>
  );
}
