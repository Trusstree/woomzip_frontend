import PlanningApplicationClient from '@/app/planning/_components/PlanningApplicationClient';
import PlanningClient from '@/app/planning/_components/PlanningClient';
import PlanningConfirmClient from '@/app/planning/_components/PlanningConfirmClient';
import React, { Suspense } from 'react';

export default function Planning({ searchParams }) {
  return (
    <main>
      <div style={{ width: '90%', maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            width: 'auto',
            fontSize: '33px',
            fontWeight: '600',
            margin: '70px 0',
            wordBreak: 'keep-all',
          }}
        >
          {!searchParams.page && (
            <>
              <span style={{ color: '#314FC0' }}>움집</span>에서 예상견적을 미리 확인해보세요!
            </>
          )}
          {searchParams.page == 'application' && '무엇이 궁금하신지 알고 싶습니다.'}
          {searchParams.page == 'confirm' && '입력하신 정보가 맞나요?'}
        </div>

        <Suspense>
          {!searchParams.page && <PlanningClient />}
          {searchParams.page == 'application' && <PlanningApplicationClient />}
          {searchParams.page == 'confirm' && <PlanningConfirmClient />}
        </Suspense>
      </div>
    </main>
  );
}
