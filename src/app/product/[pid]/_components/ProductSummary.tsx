import Image from '@/components/ImageFallback';
import Link from 'next/link';

export default function ProductSummary({ summaryData }: { summaryData: ProductSummaryData }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ width: '100%', height: '200svh', position: 'absolute', zIndex: '0' }}>
        <Image fill src={summaryData.productImageUrl} alt="pic1" style={{ objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            zIndex: '1',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        />
      </div>
      <div
        style={{
          width: '90%',
          margin: '0 auto',
          zIndex: '2',
          position: 'relative',
          height: '200svh',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100svh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div style={{ marginTop: '100px', color: '#ffffff', fontSize: 'clamp(12px, 3vw, 18px)', fontWeight: '350' }}>
            움집 제품
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(50px, 6vw, 100px)',
              fontWeight: '700',
              letterSpacing: '0.03rem',
            }}
          >
            {summaryData.productName}
          </div>
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: 'clamp(11px, 3vw, 13px)',
                fontWeight: '350',
                textAlign: 'center',
              }}
            >
              Designed By
            </div>
            <div
              style={{
                color: '#ffffff',
                fontSize: 'clamp(12px, 3vw, 16px)',
                fontWeight: '350',
                textAlign: 'center',
              }}
            >
              {summaryData.vendorName}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'absolute',
              left: '0',
              bottom: '50px',
              width: '100%',
            }}
          >
            <div
              className="d-flex align-items-center"
              style={{
                fontSize: 'clamp(10px, 3vw, 15px)',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              <div
                style={{
                  paddingRight: '20px',
                  marginRight: '20px',
                  borderRight: '1px solid #ffffff',
                  color: '#ffffff',
                }}
              >
                한 채당
                <span
                  style={{
                    fontSize: 'clamp(13px, 3vw, 20px)',
                    fontWeight: '600',
                    marginLeft: '10px',
                  }}
                >
                  {summaryData.price}원
                </span>
              </div>
              <div>
                <div>
                  <span style={{ fontSize: 'clamp(13px, 3vw, 20px)', fontWeight: '600' }}>{summaryData.bedroom}개</span>{' '}
                  침실 ·{' '}
                  <span style={{ fontSize: 'clamp(13px, 3vw, 20px)', fontWeight: '600' }}>
                    {summaryData.bathroom}개
                  </span>{' '}
                  욕실
                </div>
                <div style={{ marginBottom: '20px' }}>
                  {summaryData.realUsableArea}평 ({summaryData.buildingArea}㎡)
                </div>
              </div>
            </div>
            <Link href={`/inquire/product/?product_id=${summaryData.productId}`}>
              <button
                className="btn"
                style={{
                  border: 'none',
                  borderRadius: '20px',
                  backgroundColor: '#4067F8',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '10px 70px',
                  margin: '0 auto',
                }}
              >
                문의하기
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100svh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(22px, 4vw, 40px)',
              fontWeight: '700',
              wordBreak: 'keep-all',
            }}
          >
            {summaryData.productIntro}
          </div>
        </div>
      </div>
    </div>
  );
}
