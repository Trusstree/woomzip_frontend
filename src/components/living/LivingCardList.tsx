import LivingCard from "@/components/living/LivingCard";

const livingData = [
  {
    company: "모두가하우징",
    title: "힐링리버",
    addr: "강원도 화천군",
    img: [
      "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg",
      "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg",
    ],
    url: `/living/1`,
    // context: "지금까지 5명이 살아봤어요!",
  },
  {
    company: "탑디자인",
    title: "자연 속 작은 집",
    addr: "경기도 이천시",
    img: ["https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png"],
  },
];

type LivingListProps = {
  pavilions: Array<any>;
  numShowItems?: number;
  numShowPages?: number;
};

export default function LivingCardList(props: LivingListProps) {
  const { pavilions } = props;

  return (
    <>
      {pavilions?.map((e, i) => (
        <div className="col-md-4 col-lg-3" key={i}>
          <LivingCard
            company={e["nickname"]}
            title={e["pavilion_name"]}
            addr={e["pavilion_addr"]}
            img={[e["pavilion_representative_img"]]}
            url={e["pavilion_id"] ? `/living/${e["pavilion_id"]}` : `/living/1`}
            context={`지금까지 ${e["use_count"]}명이 살아봤어요!`}
          />
        </div>
      ))}
    </>
  );
}
