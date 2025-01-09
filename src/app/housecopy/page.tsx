import HouseCategory from '@/app/housecopy/_components/HouseCategory';
import BadgeList from '@/app/housecopy/_components/BadgeList';
import { loadProductCardData } from '@/app/housecopy/_actions/actions'; // productCard 데이터 호출
import HouseCard from '@/app/housecopy/_components/HouseCard';
import Pagination from '@/components/Pagination';
import { badgeList, categoryList, filterList } from '@/app/housecopy/_data/Data';
import FilterList from '@/app/housecopy/_components/FilterList';

export default async function House({ searchParams }) {
  const [numShowItems, numShowPages] = [30, 10];

  // 상품 카드 데이터 호출
  const { productCardData } = await loadProductCardData();

  // 상품 카드 데이터가 없다면 기본 메시지 출력
  if (!productCardData || productCardData.length === 0) {
    return (
      <div>
        <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
        <div style={{ width: '95%', margin: '0 auto' }}>
          <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 제품이 없습니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ width: '100%', height: '61px', backgroundColor: 'black' }}></div>
      <div style={{ width: '95%', margin: '0 auto' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', margin: '45px 0' }}>움집 제품들</div>
        <hr style={{ borderColor: '#777777' }} />
        <HouseCategory categoryList={categoryList} />
        <FilterList filterList={filterList} />
        <BadgeList badgeList={badgeList} />

        <div className="row">
          {productCardData.map((product, i) => (
            <HouseCard key={i} productData={product} />
          ))}
          <Pagination numItems={productCardData.length} numShowItems={numShowItems} numShowPages={numShowPages} />
        </div>
      </div>
    </div>
  );
}
