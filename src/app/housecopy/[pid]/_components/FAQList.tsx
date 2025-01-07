'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 style={{ margin: 0, fontSize: 'clamp(18px, 3vw, 20px)', color: '#ffffff' }}>{question}</h3>
        <button style={{ fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff' }}>
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div
          style={{
            padding: '10px',
            fontSize: 'clamp(16px, 3vw, 18px)',
            color: '#ffffff',
            animation: 'fadeIn 0.3s',
            marginLeft: '10px',
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQList = () => {
  const faqData = [
    {
      question: '이 서비스는 어떤 목적을 가지고 있나요?',
      answer: '이 서비스는 사용자 경험을 개선하기 위해 설계되었습니다.',
    },
    { question: '어떻게 시작하나요?', answer: '회원가입 후 튜토리얼을 따라 시작하세요.' },
    { question: '문제가 생기면 어떻게 하나요?', answer: '고객센터에 문의해 주세요.' },
  ];

  return (
    <div style={{ backgroundColor: 'black', padding: '100px 0' }}>
      <div style={{ width: '90%', maxWidth: '1000px', margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            color: '#ffffff',
            fontSize: 'clamp(20px, 4vw, 30px)',
            fontWeight: '700',
          }}
        >
          자주 묻는 질문
        </h2>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
