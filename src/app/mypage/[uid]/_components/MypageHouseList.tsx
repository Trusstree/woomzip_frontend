import HouseCard from "@/components/house/HouseCard";
import PostMenu from "@/components/posts/PostMenu";

export default function MypageHouseList({ houses, numShowItems }) {
  const houseData = houses.filter((_, i) => i < numShowItems);
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between" style={{ marginTop: "30px" }}>
        <h5 style={{ width: "200px" }}>판매자 제품(13)</h5>
        {/* {isYou && (
          <div
            className="btn"
            style={{ fontSize:"14px", color:"blue"}}
            onClick={() => {
            router.push(`${pathname}/house?method=add`);
            }}
            >
              제품 추가하기
          </div>
        )} */}
      </div>
      <PostMenu title={""}>
        {houseData.map((e, i) => (
          <HouseCard className="" key={i} data={e} />
        ))}
      </PostMenu>
    </div>
  );
}
