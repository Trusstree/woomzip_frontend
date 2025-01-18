'use client';

import { useRouter } from 'next/navigation';
import Col6Button from '@/app/inquire/_components/Col6Button';
import useInquireContactInfo from '@/app/inquire/_store/inquireContactInfo';
import useInquireHouseInfo from '@/app/inquire/_store/inquireProductInfo';
import useInquireServiceInfo from '@/app/inquire/_store/inquireServiceInfo';
import { postInquire } from '@/actions/apis2/inquireAPI';
import { alertError } from '@/lib/alertUtil';
import { isPhoneNumber, notMaxLength, notMinLength } from '@/lib/validator';
import { useCallback, useEffect } from 'react';
import useQueryString from '@/hooks/useQueryString';

export default function InquireContact() {
  const router = useRouter();

  const { name, contact, additionalRequest, responseType, setName, setContact, setAdditionalRequest, setResponseType } =
    useInquireContactInfo();
  const { isLandOwner, purpose, location, landArea, landSlope, landAccess, initProduct, resetProduct } =
    useInquireHouseInfo();
  const { helpType, startPlan, priority, budget, initService, resetService } = useInquireServiceInfo();

  const { getParams, createQuery } = useQueryString();

  const submit = async () => {
    // validate
    if (!notMinLength(name, 2)) {
      await alertError('이름을 확인해주세요', '이름을 2글자 이상 입력해주세요!');
      return;
    }

    if (!notMaxLength(name, 10)) {
      await alertError('이름을 확인해주세요', '이름을 10글자 이하로로 입력해주세요!');
      return;
    }

    if (!isPhoneNumber(contact)) {
      await alertError('전화전호를 확인해주세요', '전화번호가 맞는지 확인해주세요!');
      return;
    }

    // 단순 문의면 앞 데이터가 필요 없음
    if (getParams().get('type') == 'simple') {
      resetProduct();
      resetService();
    }

    // api request
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
      responseType,
    };

    // api response
    const [data, error] = await postInquire(apiBody);
    if (error) {
      await alertError(error.title, error.message);
      return;
    }

    console.log(data); // 데이터 확인용용
    router.push('/inquire/confirm');
  };

  const goPrevPage = useCallback(() => {
    if (getParams().get('type') == 'simple') {
      createQuery('type');
      initProduct();
      initService();
    }

    router.push('/inquire/service');
  }, []);

  useEffect(() => {
    if (contact.length === 10) setContact(contact.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    if (contact.length === 11) setContact(contact.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    if (contact.length === 13) setContact(contact.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    if (contact.length === 14) setContact(contact.replace(/-/g, '').replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3'));
  }, [contact]);

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
                placeholder="예) 움집이"
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
                placeholder="예) 0507-1369-6158"
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
                placeholder="예) 구매 문의합니다."
              ></textarea>
            </div>
          </div>

          {/* 답변 방식 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>상담 방식을 선택해주세요.</h2>
            <Col6Button
              title={'전화 상담'}
              text={'직접 전화를 통한 빠른 상담을 희망해요.'}
              value={'CALL'}
              data={responseType}
              setData={setResponseType}
            />
            <Col6Button
              title={'문자 상담'}
              text={'카카오톡 움집 채널을 통한 문자 상담을 희망해요.'}
              value={'MESSAGE'}
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
            <div className="btn" style={{ marginTop: '20px', color: '#ffffff' }} onClick={goPrevPage}>
              {'<'} 이전으로
            </div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '20px', padding: '10px 20px' }}
              onClick={submit}
            >
              문의 요청하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
