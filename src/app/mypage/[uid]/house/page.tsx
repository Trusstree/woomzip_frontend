import AddHouse from '@/app/mypage/[uid]/house/_components/AddHouse';

export default function MyHouse({ params, searchParams }) {
  const uid = params.uid;
  console.log(searchParams);
  return (
    <main className={`container`}>
      <AddHouse uid={uid} houseId={searchParams.house_id} />
    </main>
  );
}
