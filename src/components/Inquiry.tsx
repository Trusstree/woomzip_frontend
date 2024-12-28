'use client';

import { postInquiryHouse, postInquiryMain } from '@/actions/apis/inquiryAPI';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { isPhoneNumber } from '@/lib/validator';
import { useEffect, useState } from 'react';

export default function Inquiry({ hid }: { hid?: string | number }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [inquiry, setInquiry] = useState('');

  const submit = async () => {
    let [data, error] = [undefined, undefined];

    if(name.length==0){
      alertError("이름이 필요해요.", "이름을 적어주세요");
      return;
    }

    if(contact.length==0){
      alertError("연락처가 필요해요", "연락처를 적어주세요.");
      return;
    }

    if(inquiry.length==0){
      alertError("문의할 내용을 적어주세요.", "어떤 문의인지 궁금해요.");
      return;
    }

    if (hid) {
      const requestData = {
        name: name,
        contact: contact,
        inquiry: inquiry,
        houseId: hid,
      };
      [data, error] = await postInquiryHouse(requestData);
    } else {
      const requestData = {
        name: name,
        contact: contact,
        inquiry: inquiry,
      };
      [data, error] = await postInquiryMain(requestData);
    }

    if (error) {
      console.log(error);
      alertError('문의를 제대로 접수하지 못했어요.', `에러 메시지를 확인해주세요.<br/><br/>"${error.message}"`);
      return;
    }

    console.log(data);
    alertSuccess('문의를 성공적으로 전달했어요.', '감사합니다, 빠른 시일 내에 회신하겠습니다!');
  };

  return (
    <div className="row" style={{ width: '90%', maxWidth: '500px' }}>
      <div style={{ width: '30%' }}>
        <div>이름</div>
        <input
          style={{ border: 'none', borderRadius: '5px', width: '100%', opacity: '0.8' }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div style={{ width: '70%' }}>
        <div>이메일 혹은 전화번호</div>
        <input
          style={{ border: 'none', borderRadius: '5px', width: '100%', opacity: '0.8' }}
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </div>
      <div style={{ width: '100%', marginBottom: '30px' }}>
        <div>문의사항</div>
        <textarea
          style={{
            border: 'none',
            borderRadius: '5px',
            width: '100%',
            height: '200px',
            opacity: '0.8',
            resize: 'none',
          }}
          value={inquiry}
          onChange={(e) => {
            setInquiry(e.target.value);
          }}
          rows={8}
        />
      </div>
      <button
        style={{
          backgroundColor: '#4067F8',
          opacity: '0.9',
          margin: '0 auto',
          padding: '10px 100px',
          fontSize: '14px',
          fontWeight: '500',
          border: 'none',
          borderRadius: '25px',
          boxShadow: '0 6px 10px rgba(255, 255, 255, 0.2)',
          width: 'auto',
          color: '#ffffff',
        }}
        onClick={submit}
      >
        12시간 내, 답변 요청하기
      </button>
    </div>
  );
}
