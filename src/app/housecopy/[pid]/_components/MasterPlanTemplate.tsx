'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MasterPlanTemplate({ templatesData }: { templatesData: MasterPlanTemplatesData }) {
  const [floor, setFloor] = useState(0);
  console.log(templatesData[floor].productTemplateImageUrl);
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
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          wordBreak: 'keep-all',
          maxWidth: '1200px',
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
        <div className="row">
          <div style={{ width: '300px' }}>
            <div
              className="btn"
              style={{
                width: '100%',
                border: '2px solid #ffffff',
                borderRadius: '15px',
                color: '#ffffff',
                fontSize: '25px',
              }}
            >
              {templatesData.map((masterplan, i) => (
                <div
                  key={i}
                  style={{ textAlign: 'left', padding: '5px 10px' }}
                  onClick={() => {
                    setFloor(i);
                  }}
                >
                  {masterplan.title}
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: 'calc(-300px + 100%)' }}>
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
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
