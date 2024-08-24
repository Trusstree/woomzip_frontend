import TeamPositionBadge from '@/app/(about)/about/_components/TeamPositionBadge';
import Image from 'next/image';

export default function WorkerCard({ name, dept, position, src, introduce, email }) {
  return (
    <>
      <div className="col-md-4 col-5" style={{ marginBottom: '30px' }}>
        <Image
          alt={'worker card image'}
          src={src}
          style={{
            width: '100%',
            borderRadius: '10px',
            boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
          }}
        />
      </div>
      <div className="col-md-8 col-7">
        <div style={{ fontSize: '18px', fontWeight: '400px' }}>{` ${name} | ${dept} `}</div>
        <div style={{ margin: '10px 0' }}>
          {position.map((e, i) => (
            <TeamPositionBadge key={i} backgroundColor={e.backgroundColor} color={e.color}>
              {e.name}
            </TeamPositionBadge>
          ))}
        </div>
        <div style={{ marginTop: '20px', fontSize: '15px' }}>
          <div style={{ fontWeight: '400px' }}>{introduce}</div>
          <div style={{ fontWeight: '400px' }}>{email}</div>
        </div>
      </div>
    </>
  );
}
