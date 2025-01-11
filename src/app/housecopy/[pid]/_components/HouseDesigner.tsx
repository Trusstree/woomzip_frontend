import Image from 'next/image';

export default function HouseDesigner({ venderData }: { venderData: VenderData }) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        height: 'calc(-61px + 100svh)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="row" style={{ width: '90%', margin: '0 auto', maxWidth: '1000px' }}>
        <div className="col-md-7 col-12">
          <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', marginBottom: '20px' }}>
            <Image
              width={800}
              height={500}
              src={venderData.venderImageUrl}
              alt="pic2"
              style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-md-1 col-0"></div>
        <div className="col-md-4 col-12">
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(9px, 3vw, 13px)',
              fontWeight: '500',
            }}
          >
            Designer
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(35px, 4vw, 45px)',
              fontWeight: '700',
              margin: '10px 0',
            }}
          >
            {venderData.vendorName}
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(9px, 3vw, 13px)',
              fontWeight: '350',
              marginTop: '10px',
            }}
          >
            {venderData.venderIntroduce}
          </div>
        </div>
      </div>
    </div>
  );
}
