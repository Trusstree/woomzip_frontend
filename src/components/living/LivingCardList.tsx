import { getLivings } from '@/actions/apis/livingAPI';
import LivingCard from '@/components/living/LivingCard';
import { Suspense } from 'react';

const livingData = [
  {
    company: '모두가하우징',
    title: '힐링리버',
    addr: '강원도 화천군',
    img: [
      'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver1.jpeg',
      'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/healingRiver2.jpeg',
    ],
    url: `/living/1`,
    // context: "지금까지 5명이 살아봤어요!",
  },
  {
    company: '탑디자인',
    title: '자연 속 작은 집',
    addr: '경기도 이천시',
    img: ['https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/test_house/topDesign1.png'],
  },
];

type LivingListProps = {
  pavilions?: Array<any>;
  numShowItems?: number;
  numShowPages?: number;
};

async function loadData(): Promise<Array<any>> {
  'use server';
  const [data, error] = await getLivings();
  if (error) {
    console.log(error);
    return [];
  }

  return [data.data[0]];
}

export default async function LivingCardList(props: LivingListProps) {
  const pavilions = await loadData();

  return (
    <Suspense>
      {pavilions?.map((e, i) => (
        <div className="col-md-4 col-lg-3" key={i}>
          <LivingCard
            company={e['nickname']}
            title={e['pavilion_name']}
            addr={e['pavilion_addr']}
            img={livingData[i].img}
            url={e['pavilion_id'] ? `/living/${e['pavilion_id']}` : `/living/1`}
            context={`지금까지 ${e['use_count']}명이 살아봤어요!`}
          />
        </div>
      ))}
    </Suspense>
  );
}
