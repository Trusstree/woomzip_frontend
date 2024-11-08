import ConfirmComponent from '@/app/planning/confirm/ConfirmComponent';
import React from 'react';

export default function Confirm() {
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
          입력하신 정보가 맞나요?
        </div>
        <ConfirmComponent />
      </div>
    </main>
  );
}
