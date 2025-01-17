'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Col3Button from '@/app/inquire/_components/Col3Button';
import Col4Button from '@/app/inquire/_components/Col4Button';

export default function Inquire2() {
  const [helpType, setHelpType] = useState('');
  const [startPlan, setStartPlan] = useState('');
  const [priority, setPriority] = useState('');
  const [budget, setBudget] = useState('');
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
            어떤 도움이 필요하신가요?
          </p>
          <p style={{ marginBottom: '100px' }}>편하게 답변해주시면 됩니다.</p>

          {/* 서비스 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>어떤 서비스가 필요하신가요?</h2>
            <Col4Button
              title={'단순 문의'}
              text={'서비스 과정이나 제품에 대한 정보가 궁금해요.'}
              value={'normal'}
              data={helpType}
              setData={setHelpType}
            />
            <Col4Button
              title={'상세 견적'}
              text={'내 조건을 토대로한 여러 제작사의 상세 견적서가 필요해요.'}
              value={'little'}
              data={helpType}
              setData={setHelpType}
            />
            <Col4Button
              title={'통합 서비스'}
              text={'안심 계약, 안심 지불, 안심 AS 서비스를 통한 구매를 원해요.'}
              value={'very'}
              data={helpType}
              setData={setHelpType}
            />
          </div>

          {/* 서비스 제공시기 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>언제 시작하실 예정인가요?</h2>
            <Col4Button
              title={'최대한 빠르게'}
              text={'4~12주 이내 입주 희망'}
              value={'normal'}
              data={startPlan}
              setData={setStartPlan}
            />
            <Col4Button
              title={'조금 여유있게'}
              text={'3~6개월 이내 입주 희망'}
              value={'little'}
              data={startPlan}
              setData={setStartPlan}
            />
            <Col4Button
              title={'확실하지 않습니다'}
              text={'아직 정확한 시기를 정하지 않았습니다.'}
              value={'very'}
              data={startPlan}
              setData={setStartPlan}
            />
          </div>

          {/* 서비스 중요도 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>무엇이 가장 중요하신가요?</h2>
            <Col4Button
              title={'가성비'}
              text={'합리적인 품질의 저렴한 가격이 가장 중요합니다.'}
              value={'normal'}
              data={priority}
              setData={setPriority}
            />
            <Col4Button
              title={'완성도'}
              text={'좋은 자재와 완성도 있는 마감이 가장 중요합니다.'}
              value={'little'}
              data={priority}
              setData={setPriority}
            />
            <Col4Button
              title={'신뢰도'}
              text={'권리를 보장 받을 수 있는 것이 가장 중요합니다.'}
              value={'very'}
              data={priority}
              setData={setPriority}
            />
          </div>

          {/* 예산 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>대략적인 예산을 알려주세요.</h2>
            <Col3Button title="~4천만원" value="4000" data={budget} setData={setBudget} />
            <Col3Button title="~7천만원" value="7000" data={budget} setData={setBudget} />
            <Col3Button title="~1억원" value="10000" data={budget} setData={setBudget} />
            <Col3Button title="~1.5억" value="15000" data={budget} setData={setBudget} />
            <Col3Button title="~2억원" value="20000" data={budget} setData={setBudget} />
            <Col3Button title="상관 없음" value="777777" data={budget} setData={setBudget} />
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
              onClick={() => router.push('/inquire/1')}
            >
              {'<'} 이전으로
            </div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '15px', padding: '10px 20px' }}
              onClick={() => router.push('/inquire/3')}
            >
              다음으로
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
