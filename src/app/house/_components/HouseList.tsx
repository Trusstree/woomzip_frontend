import HouseCard from '@/components/house/HouseCard';
import HouseCardPlaceholder from '@/components/house/HouseCardPlaceholder';
import Pagination from '@/components/Pagination';

type HousePostProps = {
  houseData: any[];
  count: number;
  numShowItems: number;
  numShowPages?: number;
};

export default function HouseList({ houseData, count, numShowItems, numShowPages }: HousePostProps) {
  return (
    <>
      {houseData
        ? houseData.map((e, i) => <HouseCard key={i} data={e} className={'col-md-4 col-lg-3'} />)
        : new Array(numShowItems).fill(0).map((e, i) => <HouseCardPlaceholder key={i} />)}
      {numShowPages && <Pagination numItems={count} numShowItems={numShowItems} numShowPages={numShowPages} />}
    </>
  );
}
