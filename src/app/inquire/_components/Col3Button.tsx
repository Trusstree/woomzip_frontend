import Image from 'next/image';

export default function Col3Button({
  title,
  value,
  data,
  setData,
}: {
  title: any;
  value: any;
  data: any;
  setData: any;
}) {
  return (
    <div className="col-md-3 col-4">
      <div
        className="btn"
        style={{
          width: '100%',
          backgroundColor: data == value ? '#F5F7FF' : '#F8F8FA',
          border: 'lightgray 1px solid',
          borderRadius: '10px',
          padding: 'clamp(15px, 3vw, 20px)',
          wordBreak: 'keep-all',
          textAlign: 'left',
          marginBottom: '20px',
        }}
        onClick={() => {
          setData(value);
        }}
      >
        <div className="d-flex justify-content-between">
          <div style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: '700', margin: '5px 0' }}>{title}</div>
          <div
            style={{
              border: '1px solid',
              borderColor: data == value ? '#314FC0' : '#111111',
              borderRadius: '50px',
              width: '20px',
              height: '20px',
              marginTop: '9px',
              backgroundColor: data == value ? '#314FC0' : '#ffffff',
            }}
          >
            <Image
              width={12}
              height={12}
              src={'/check.png'}
              alt={'check'}
              style={{ padding: '0', marginLeft: '3px', marginTop: '-6px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
