'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MasterPlanTemplate({ templatesData }: { templatesData: MasterPlanTemplatesData }) {
  const [floor, setFloor] = useState(0);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '100px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          maxWidth: '1200px',
          wordBreak: 'keep-all',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 'clamp(25px, 4vw, 45px)',
            fontWeight: '700',
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          설계도
        </div>
        <hr style={{ color: '#ffffff', margin: '50px 0' }} />

        {/* 반응형 레이아웃 */}
        <div className="row">
          {/* 버튼 영역 */}
          <div className="button-container">
            {templatesData.map((masterplan, i) => (
              <button
                key={i}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `2px solid ${i === floor ? '#ffffff' : '#888888'}`,
                  borderRadius: '15px',
                  backgroundColor: 'transparent',
                  color: i === floor ? '#ffffff' : '#888888',
                  fontSize: 'clamp(18px, 3vw, 25px)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  marginBottom: '10px',
                  textAlign: 'left',
                }}
                onClick={() => setFloor(i)}
              >
                {masterplan.title}
              </button>
            ))}
          </div>

          {/* 이미지 영역 */}
          <div className="image-container">
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '15px',
                backgroundColor: '#ffffff',
              }}
            >
              <Image
                width={900}
                height={700}
                src={templatesData[floor].productTemplateImageUrl}
                alt={'masterplan'}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .button-container {
            width: 270px;
          }
          .image-container {
            width: calc(100% - 270px);
          }
        }
        @media (max-width: 768px) {
          .row {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .button-container {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            gap: 10px;
            padding-bottom: 10px;
          }
          .image-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
