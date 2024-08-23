import HouseCard from '@/components/house/HouseCard';

export default async function AppHouseList({ houseData }) {
  return (
    <div className="row">
      {houseData?.slice(0, 4).map((e, i) => <HouseCard key={i} data={e} className={'col-12 col-md-6 col-lg-3'} />)}
    </div>
  );
}
