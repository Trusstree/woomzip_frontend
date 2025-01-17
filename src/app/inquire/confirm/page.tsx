'use client';

import { postInquire } from '@/actions/apis2/inquireAPI';
import useInquireContactInfo from '@/app/inquire/_store/inquireContactInfo';
import useInquireHouseInfo from '@/app/inquire/_store/inquireHouseInfo';
import useInquireServiceInfo from '@/app/inquire/_store/inquireServiceInfo';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { useRouter } from 'next/navigation';

export default function InquireConfirm() {
  const router = useRouter();
  const { isLandOwner, purpose, location, landArea, landSlope, landAccess } = useInquireHouseInfo();
  const { helpType, startPlan, priority, budget } = useInquireServiceInfo();
  const { name, contact, additionalRequest, type } = useInquireContactInfo();

  const submit = async () => {
    const apiBody = {
      isLandOwner,
      purpose,
      location,
      landArea,
      landSlope,
      landAccess,
      helpType,
      startPlan,
      priority,
      budget,
      name,
      contact,
      additionalRequest,
      type,
    };

    const [data, error] = await postInquire(apiBody);
    if (error) {
      await alertError('에러', '문의 넣는 중 에러가 나옴');
      return;
    }

    console.log(data);
    await alertSuccess('성공', '아마 여기에 택일 내용을 넣어야 함');
  };

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
              <span>{name}</span>
            </div>
            <div className="col-8">
              <div>전화번호</div>
              <span>{contact}</span>
            </div>
          </div>

          {/* 개인정보 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>문의 내용</h2>
            <div className="col-12">{additionalRequest}</div>
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
              onClick={() => router.push('/inquire/contact')}
            >
              {'<'} 이전으로
            </div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '20px', padding: '10px 20px' }}
              onClick={submit}
            >
              문의넣기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
