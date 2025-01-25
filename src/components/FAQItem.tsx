'use client';

import { useState } from 'react';

export default function FAQItem({ question, answer }) {
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
}
