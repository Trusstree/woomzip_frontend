import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const infoURL = '/about';
  const serviceURL = '/service';
  const termsURL = '/terms';
  const youtubeURL = 'https://www.youtube.com/@woomzip';
  const instagrmaURL = 'https://www.instagram.com/woomzip/';
  const naverBlogURL = 'https://blog.naver.com/truss369';

  return (
    <footer
      className="text-muted text-left pt-4 pb-3 text-white"
      style={{
        backgroundColor: 'black',
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <div style={{ width: '95%', margin: '0 auto' }}>
        <div className="w-100 row" style={{ color: '#ffffff' }}>
          <div className="col-md-2 col-12  order-md-1 order-2" style={{ margin: '30px 0' }}>
            <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '5px', color: '#999999' }}>Company</div>
            <div className="d-flex flex-column">
              <Link
                href={infoURL}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#ffffff',
                  textDecorationLine: 'none',
                }}
                passHref
                className="my-1"
              >
                About Us
              </Link>
              <Link
                href={serviceURL}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#ffffff',
                  textDecorationLine: 'none',
                }}
                passHref
                className="my-1"
              >
                Service
              </Link>
              <Link
                href={termsURL}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#ffffff',
                  textDecorationLine: 'none',
                }}
                passHref
                className="my-1"
              >
                Privacy policy
              </Link>
            </div>
          </div>
          <div className="col-md-7 col-12 order-md-2 order-3" style={{ margin: '30px 0' }}>
            <div style={{ fontSize: '17px', fontWeight: '600', marginBottom: '5px', color: '#999999' }}>Contact Us</div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>0507-1369-6158</div>
            <div style={{ fontSize: '14px', fontWeight: '300', color: '#999999' }}>09:00~23:00</div>
            <div style={{ fontSize: '14px', fontWeight: '300', color: '#999999' }}>연중무휴 상담 운영</div>
            <div style={{ marginTop: '14px', fontSize: '15px', fontWeight: '600' }}>truss369@naver.com</div>
            <div style={{ fontSize: '14px', fontWeight: '300', color: '#999999' }}>입점 문의</div>
            <div style={{ fontSize: '14px', fontWeight: '300', color: '#999999' }}>제휴 문의</div>
          </div>

          <div className="col-md-3 col-12 order-md-3 order-1" style={{ margin: '20px 0' }}>
            <div className="d-flex justify-content-end" id="social" style={{ width: 'auto' }}>
              <SocialIcon url={youtubeURL} network="youtube" bgColor="black" fgColor="#ffffff" />
              <SocialIcon url={instagrmaURL} network="instagram" bgColor="black" fgColor="#ffffff" />
              <Link href={naverBlogURL} passHref style={{ border: 'none', outline: 'none' }}>
                <div className="btn m-0 p-0">
                  <svg
                    aria-label="naver blog"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 111 111"
                    width="45"
                    height="45"
                  >
                    <rect className="cls-2" fill="#101648" y="0" rx="9.05" ry="9.05" />
                    <polygon
                      className="cls-1"
                      fill="#ffffff"
                      points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <div style={{ fontSize: '11px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray' }}>
            <span style={{ fontSize: '18px', color: '#ffffff', fontWeight: '600', marginRight: '10px' }}>WOOMZIP</span>
            (주)트러스트리 | 사업자 등록번호 : 788-87-03092 | 대표 : 양준우 | 개인정보보호책임자 : 박세홍 | 통신판매업
            신고번호 : 2024-서울동작-0730 | 본사주소 : 06978 서울특별시 동작구 상도로 55길 8, 304호(숭실대학교
            캠퍼스타운) | 지사주소 : 10223 경기도 고양시 일산서구 고양대로 283, 25동 104호(한국건설기술연구원)
          </div>

          <div style={{ fontSize: '9px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray', marginTop: '15px' }}>
            Copyright 2024. Trusstree, Co., Ltd. All rights reserved.
          </div>
          <div style={{ fontSize: '9px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray' }}>
            (주)트러스트리는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을
            지지 않습니다.
          </div>
        </div>
      </div>
    </footer>
  );
}
