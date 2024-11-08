import PlanningClient from '@/app/planning/_components/PlanningClient';
import React, { Suspense } from 'react';

export default function Planning() {
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
          <span style={{ color: '#314FC0' }}>움집</span>에서 예상견적을 미리 확인해보세요!
        </div>

        <Suspense>
          <PlanningClient />
        </Suspense>
      </div>
    </main>
  );
}
