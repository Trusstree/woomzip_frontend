import MypageHouseCard from '@/app/mypage/[uid]/_components/_company/MypageHouseCard';
import PostMenu from '@/components/posts/PostMenu';

export default function MypageHouseList({ houses, numShowItems }) {
  const houseData = houses.filter((_, i) => i < numShowItems);
  return (
    <div>
      {/* <div className="d-flex justify-content-between" style={{ marginTop: "30px" }}>
      <h5 style={{ width: "200px" }}>판매자 제품(13)</h5>
      </div> */}
      <PostMenu>
        {houseData.map((e, i) => (
          <MypageHouseCard key={i} data={e} className={'col-md-4'} />
        ))}
      </PostMenu>
    </div>
  );
}
