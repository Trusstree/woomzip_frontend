import FAQItem from '@/components/FAQItem';
import { FAQData } from '@/data/FAQData';

export default function FAQList() {
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
        {FAQData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
