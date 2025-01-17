'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Col6Button from '@/app/inquire/_components/Col6Button';
import Col3Button from '@/app/inquire/_components/Col3Button';
import Col4Button from '@/app/inquire/_components/Col4Button';

export default function InquireHouse() {
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
            더 나은 답변을 위해 몇 가지 질문에 답을 해주세요.
          </p>
          <p style={{ marginBottom: '100px' }}>편하게 답변해주시면 됩니다.</p>

          {/* 토지 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>토지가 이미 있으신가요?</h2>
            <Col6Button
              title={'네, 있습니다.'}
              text={'제품을 설치할 토지의 조건을 알려주세요.'}
              value={'1'}
              data={isLandOwner}
              setData={setIsLandOwner}
            />
            <Col6Button
              title={'아니요, 없습니다.'}
              text={'제품을 설치할 토지의 조건을 알려주세요.'}
              value={'0'}
              data={isLandOwner}
              setData={setIsLandOwner}
            />
          </div>

          {/* 인허가 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>어떻게 사실건가요?</h2>
            <Col6Button
              title={'주택'}
              text={'일반적인 단독주택 건축과정입니다. 인허가가 필요합니다.'}
              value={'house'}
              data={purpose}
              setData={setPurpose}
            />
            <Col6Button
              title={'체류형쉼터, 농막'}
              text={'농지 등에 설치 후 신고하는 세컨하우스 방식입니다. 인허가가 필요 없습니다.'}
              value={'shelter'}
              data={purpose}
              setData={setPurpose}
            />
          </div>

          {/* 위치 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>위치를 알려주세요.</h2>
            <Col3Button title="수도권" value="seoul" data={location} setData={setLocation} />
            <Col3Button title="강원도" value="gangwon" data={location} setData={setLocation} />
            <Col3Button title="충청도" value="chungcheong" data={location} setData={setLocation} />
            <Col3Button title="경상도" value="gyeongsang" data={location} setData={setLocation} />
            <Col3Button title="경상도" value="jeolla" data={location} setData={setLocation} />
            <Col3Button title="제주도" value="jeju" data={location} setData={setLocation} />
          </div>

          {/* 면적 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>면적을 알려주세요.</h2>
            <Col3Button title="100평" value="100" data={landArea} setData={setLandArea} />
            <Col3Button title="200평" value="200" data={landArea} setData={setLandArea} />
            <Col3Button title="300평" value="300" data={landArea} setData={setLandArea} />
          </div>

          {/* 경사도 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>경사도를 알려주세요.</h2>
            <Col4Button
              title={'평평함'}
              text={'토목공사가 필요 없고, 바로 주택을 설치 가능한 상태입니다.'}
              value={'normal'}
              data={landSlope}
              setData={setLandSlope}
            />
            <Col4Button
              title={'조금 경사짐'}
              text={'약간의 평탄화 작업을 거치면 주택을 설치 가능한 상태입니다.'}
              value={'little'}
              data={landSlope}
              setData={setLandSlope}
            />
            <Col4Button
              title={'많이 경사짐'}
              text={'제품을 설치하기 위해 땅을 많이 깎아야 합니다.'}
              value={'very'}
              data={landSlope}
              setData={setLandSlope}
            />
          </div>

          {/* 진입로 질문 */}
          <div className="row" style={{ width: '100%' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>진입로 상태를 알려주세요.</h2>
            <Col4Button
              title={'넓음'}
              text={'대형 트레일러가 진입 가능할 정도의 도로폭입니다.'}
              value={'wide'}
              data={landAccess}
              setData={setLandAccess}
            />
            <Col4Button
              title={'조금 좁음'}
              text={'차량 두대가 동시에 통과 가능할 정도의 도로폭입니다.'}
              value={'littlenerrow'}
              data={landAccess}
              setData={setLandAccess}
            />
            <Col4Button
              title={'많이 좁음'}
              text={'1톤 트럭 한대가 지나갈 수 있을 정도의 도로폭입니다.'}
              value={'nerrow'}
              data={landAccess}
              setData={setLandAccess}
            />
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
            <div style={{ marginTop: '25px', color: '#ffffff' }}>그린하이브</div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '15px', padding: '10px 20px' }}
              onClick={() => router.push('/inquire/service')}
            >
              다음으로
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
