'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Col6Button from '@/app/inquire/_components/Col6Button';
import Col3Button from '@/app/inquire/_components/Col3Button';
import Col4Button from '@/app/inquire/_components/Col4Button';

export default function InquireConfirm() {
  const [isLandOwner, setIsLandOwner] = useState('');
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [landArea, setLandArea] = useState('');
  const [landSlope, setLandSlope] = useState('');
  const [landAccess, setLandAccess] = useState('');
  const router = useRouter();

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '61px', width: '100%' }}></div>
      <div style={{ width: '100%', padding: '50px 0' }}>
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              fontSize: '30px',
              fontWeight: 600,
              wordBreak: 'keep-all',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            문의내용이 확인되었습니다.
          </p>
          <p style={{ marginBottom: '100px' }}>최대한 빠르게 답변드리겠습니다.</p>

          {/* 개인정보 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>답변 받으실 연락처</h2>
            <div className="col-4">
              <div>이름</div>
            </div>
            <div className="col-8">
              <div>전화번호</div>
            </div>
          </div>

          {/* 개인정보 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>문의 내용</h2>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px',
          backgroundColor: 'black',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div className="d-flex justify-content-between">
            <div
              className="btn"
              style={{ marginTop: '20px', color: '#ffffff' }}
              onClick={() => router.push('/inquire/3')}
            >
              {'<'} 이전으로
            </div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '20px', padding: '10px 20px' }}
              onClick={() => router.push('/product')}
            >
              더 많은 제품 보기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
