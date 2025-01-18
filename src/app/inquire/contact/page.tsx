'use client';

import { useRouter } from 'next/navigation';
import Col6Button from '@/app/inquire/_components/Col6Button';
import useInquireContactInfo from '@/app/inquire/_store/inquireContactInfo';

export default function InquireContact() {
  const router = useRouter();

  const {
    name,
    contact,
    additionalRequest,
    responseType,
    setName,
    setContact,
    setAdditionalRequest,
    setResponseType,
    reset,
  } = useInquireContactInfo();

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
            빠른 상담을 도와드리겠습니다.
          </p>
          <p style={{ marginBottom: '100px' }}>편하신 방법을 선택해주세요.</p>

          {/* 개인정보 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>
              답변 받으실 연락처를 알려주세요.
            </h2>
            <div className="col-4">
              <div>이름</div>
              <textarea
                style={{
                  width: '100%',
                  height: '37px',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  border: '1px solid lightgray',
                  backgroundColor: '#F8F8FA',
                  resize: 'none',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: '1.5',
                }}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="col-8">
              <div>전화번호</div>
              <textarea
                style={{
                  width: '100%',
                  height: '37px',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  border: '1px solid lightgray',
                  backgroundColor: '#F8F8FA',
                  resize: 'none',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: '1.5',
                }}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          {/* 개인정보 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>
              문의하고 싶으신 내용을 적어주세요.
            </h2>
            <div className="col-12">
              <textarea
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  border: '1px solid lightgray',
                  backgroundColor: '#F8F8FA',
                  resize: 'none',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  lineHeight: '1.5',
                }}
                value={additionalRequest}
                onChange={(e) => {
                  setAdditionalRequest(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          {/* 답변 방식 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>상담 방식을 선택해주세요.</h2>
            <Col6Button
              title={'전화 상담'}
              text={'직접 전화를 통한 빠른 상담을 희망해요.'}
              value={'normal'}
              data={responseType}
              setData={setResponseType}
            />
            <Col6Button
              title={'문자 상담'}
              text={'카카오톡 움집 채널을 통한 문자 상담을 희망해요.'}
              value={'little'}
              data={responseType}
              setData={setResponseType}
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
            <div
              className="btn"
              style={{ marginTop: '20px', color: '#ffffff' }}
              onClick={() => router.push('/inquire/service')}
            >
              {'<'} 이전으로
            </div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '20px', padding: '10px 20px' }}
              onClick={() => router.push('/inquire/confirm')}
            >
              문의 요청하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
