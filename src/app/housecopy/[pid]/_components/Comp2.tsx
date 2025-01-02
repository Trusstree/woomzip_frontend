import Image from 'next/image';

export default function Comp2({ imageData }) {
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
              src={'/kim.jpg'}
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
              fontSize: 'clamp(30px, 4vw, 45px)',
              fontWeight: '700',
              margin: '10px 0',
            }}
          >
            김태하
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 'clamp(9px, 3vw, 13px)',
              fontWeight: '500',
              marginTop: '10px',
            }}
          >
            한국 패시브하우스 및 모듈러 주택 분야 전문가입니다. <br /> (주)풍산패시브하우스 이사, 2024 (주)풍산우드홈
            대표이사, 2024 공인 패시브하우스 전문가(CPHC), ~2024 Passive House Institute in Germany,
            (사)한국목조건축협회 이사 역임, (사)한국패시브건축협회 이사 역임, 한국에너지공단
            ZEB(제로에너지빌딩)리더스클럽 1기 멤버, 2015~2017 한국건축가연합 건축명장 수상, 2014~2015 서울시
            에너지자립마을 자문위원, 2014 농림축산식품부 농촌주택 표준설계도 건축시공분야 자문위원, 2009~2011 강원대학교
            평생교육원 강사
          </div>
        </div>
      </div>
    </div>
  );
}
