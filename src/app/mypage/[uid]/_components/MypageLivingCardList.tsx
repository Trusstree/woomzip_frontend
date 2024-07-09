import AppLivingCard from "@/app/mypage/[uid]/_components/AppLivingCard";

const livingData = [
  {
    company: "모두가하우징",
    title: "힐링리버",
    addr: "강원도 화천군",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
    url: `/living/1`,
    context: "지금까지 5명이 살아봤어요!",
  },
  {
    company: "탑디자인",
    title: "자연 속 작은 집",
    addr: "경기도 이천시",
    img: "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png",
    context: "",
  },
];

export default function MypageLivingCardList({
  pavilions,
  numShowItems,
  numShowPages,
}: {
  pavilions: Array<any>;
  numShowItems: number;
  numShowPages?: number;
}) {
  const pavilionData = pavilions.filter((_, i) => i < numShowItems);
  return (
    <>
      <div
        className="row flex-nowrap overflow-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {pavilionData?.map((e, i) => (
          <AppLivingCard
            key={i}
            company={e["company"]}
            title={e["pavilion_name"]}
            addr={e["pavilion_addr"]}
            img={e["img"] || "/blur_image.png"}
            url={`living/${e["pavilion_id"]}`}
            context={e["context"]}
          />
        ))}
      </div>
    </>
  );
}
