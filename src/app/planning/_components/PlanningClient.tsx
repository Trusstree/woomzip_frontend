'use client';

import PlanningApplicationClient from '@/app/planning/_components/PlanningApplicationClient';
import PlanningHouseClient from '@/app/planning/_components/PlanningHouseClient';
import PlanningConfirmClient from '@/app/planning/_components/PlanningConfirmClient';
import useHouseInfo from '@/app/planning/_store/planningInfo';
import { useEffect } from 'react';

export default function PlanningClient() {
  const houseInfo = useHouseInfo();

  useEffect(() => {
    houseInfo.reset();
  }, []);

  return (
    <>
      <div
        style={{
          width: 'auto',
          fontSize: '33px',
          fontWeight: '600',
          margin: '70px 0',
          wordBreak: 'keep-all',
        }}
      >
        {houseInfo.page == 'house' && (
          <>
            <span style={{ color: '#314FC0' }}>움집</span>에서 예상견적을 미리 확인해보세요!
          </>
        )}
        {houseInfo.page == 'application' && '무엇이 궁금하신지 알고 싶습니다.'}
        {houseInfo.page == 'confirm' && '입력하신 정보가 맞나요?'}
      </div>
      {houseInfo.page == 'house' && <PlanningHouseClient />}
      {houseInfo.page == 'application' && <PlanningApplicationClient />}
      {houseInfo.page == 'confirm' && <PlanningConfirmClient />}
    </>
  );
}
