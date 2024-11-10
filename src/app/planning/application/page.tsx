import PlanningApplicationClient from '@/app/planning/_components/PlanningApplicationClient';
import React, { Suspense } from 'react';

export default function Application() {
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
          무엇이 궁금하신지 알고 싶습니다.
        </div>
        <Suspense>
          <PlanningApplicationClient />
        </Suspense>
      </div>
    </main>
  );
}
