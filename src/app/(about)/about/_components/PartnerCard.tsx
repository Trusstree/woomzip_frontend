import Image from 'next/image';

export default function PartnerCard({ src, title }) {
  return (
    <div
      style={{
        width: '170px',
        textAlign: 'center',
      }}
    >
      <Image
        src={src}
        width={300}
        height={150}
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
          objectFit: 'cover',
        }}
        alt={'partner card image'}
      />
      <div style={{ fontSize: '16px', fontWeight: '500', marginTop: '10px' }}>{title}</div>
    </div>
  );
}
