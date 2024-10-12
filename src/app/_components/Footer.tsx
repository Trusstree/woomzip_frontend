import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const infoURL = '/about';
  const serviceURL = '/service';
  const termsURL = '/terms';
  const youtubeURL = 'https://www.youtube.com/@buildintruss';
  const instagrmaURL = 'https://www.instagram.com/woomzip/';
  const naverBlogURL = 'https://blog.naver.com/truss369';

  return (
    <footer
      className="text-muted text-left pt-4 pb-5 text-white"
      style={{
        backgroundColor: '#F8F8FA',
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <div className="container" style={{ width: '90%', maxWidth: '1150px', margin: '0 auto' }}>
        <div className="row" style={{ color: 'black' }}>
          <div className="row">
            <div id="navigator" className="col-md-3 col-12" style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>고객센터</div>
              <div style={{ fontWeight: '600' }}>0507-1369-6158</div>
              <div style={{ fontSize: '13px', fontWeight: '300' }}>09:00~23:00</div>
              <div style={{ fontSize: '13px', fontWeight: '300' }}>연중무휴 상담 운영</div>
              <div style={{ marginTop: '20px', fontSize: '15px', fontWeight: '600' }}>truss369@naver.com</div>
              <div style={{ fontSize: '13px', fontWeight: '300' }}>입점 문의</div>
              <div style={{ fontSize: '13px', fontWeight: '300' }}>제휴 문의</div>
            </div>
            <div className="col-md-3 col-12" style={{ marginBottom: '40px' }}>
              <Link href={infoURL} passHref>
                <div
                  style={{
                    marginBottom: '5px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '13px',
                    color: 'gray',
                  }}
                >
                  회사 소개
                </div>
              </Link>
              <Link href={serviceURL} passHref>
                <div
                  style={{
                    margin: '5px 0',
                    border: 'none',
                    outline: 'none',
                    fontSize: '13px',
                    color: 'gray',
                  }}
                >
                  서비스 소개
                </div>
              </Link>
              <Link href={termsURL} passHref>
                <div
                  style={{
                    margin: '5px 0',
                    border: 'none',
                    outline: 'none',
                    fontSize: '13px',
                    color: 'gray',
                  }}
                >
                  개인정보처리방침
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-12">
              <div style={{ fontSize: '12px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray' }}>
                (주)트러스트리 | 사업자 등록번호 : 788-87-03092 | 대표 : 양준우 | 개인정보보호책임자 : 박세홍 |
                통신판매업 신고번호 : 2024-서울동작-0730 | 주소 : 06978 서울특별시 동작구 상도로 55길 8, 304호(상도동)
              </div>

              <div id="social">
                <SocialIcon url={youtubeURL} network="youtube" bgColor="#F8F8FA" fgColor="gray" />
                <SocialIcon url={instagrmaURL} network="instagram" bgColor="#F8F8FA" fgColor="gray" />
                <Link href={naverBlogURL} passHref style={{ border: 'none', outline: 'none' }}>
                  <div className="btn m-0 p-0">
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111" width="40" height="40">
                      <rect className="cls-2" fill="#101648" y="0" rx="9.05" ry="9.05" />
                      <polygon
                        className="cls-1"
                        fill="gray"
                        points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <div style={{ fontSize: '11px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray' }}>
                (주)트러스트리는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해
                책임을 지지 않습니다.
              </div>
              <div style={{ fontSize: '11px', fontWeight: '400', wordBreak: 'keep-all', color: 'gray' }}>
                Copyright 2024. Trusstree, Co., Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
