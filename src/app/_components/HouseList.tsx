import HouseCard from '@/components/house/HouseCard';

export default async function AppHouseList({ houseData }) {
  return (
    <div
      className="row flex-nowrap overflow-auto"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {houseData?.map((e, i) => <HouseCard key={i} data={e} className={'col-10 col-md-4 col-lg-3'} />)}
    </div>
  );
}
