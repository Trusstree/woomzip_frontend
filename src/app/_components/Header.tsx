import React from 'react';
import Image from 'next/image';
import SigninButton from '@/app/_components/SigninButton';
import RouteButton from '@/components/RouteButton';
import Offcanvas from '@/app/_components/Offcanvas';

export default function Header() {
  return (
    <div
      className={`navbar navbar-expand-md justify-content-center sticky-top`}
      style={{
        backgroundColor: 'white',
      }}
    >
      <div className=" d-flex justify-content-between" style={{ height: '50px', width: '95%' }}>
        <RouteButton url="/" className="navbar-brand" style={{ marginLeft: '0', border: 'none', marginBottom: '6px' }}>
          <div className="d-flex align-items-center">
            {' '}
            {/* Flexbox 적용 */}
            <Image src={'/woomzip_new_logo.png'} alt={'Truss Logo'} width={23} height={23} style={{ padding: '0' }} />
            <div style={{ margin: '0', fontSize: '18px', fontWeight: '500' }}>woomzip</div>{' '}
            {/* 텍스트 왼쪽 간격 추가 */}
          </div>
        </RouteButton>

        <button
          className="navbar-toggler ms-auto me-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon" style={{ border: 'none' }} />
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav d-none d-md-flex w-100 align-items-center">
            <div className="d-flex align-items-center me-auto">
              <RouteButton url="/" style={{ fontSize: '16px', border: 'none', fontWeight: '500' }}>
                홈
              </RouteButton>
              <RouteButton url="/community" style={{ fontSize: '16px', border: 'none', fontWeight: '500' }}>
                제품찾기
              </RouteButton>
              <RouteButton url="/house" style={{ fontSize: '16px', border: 'none', fontWeight: '500' }}>
                커뮤니티
              </RouteButton>

              {/* <RouteButton url="/living" style={{ fontSize: "15px" }}>
              살아보기
            </RouteButton> */}
              {/* <RouteButton url="/planning" style={{ fontSize: "15px" }}>
                계획하기
              </RouteButton> */}
            </div>
            <div style={{ textAlign: 'right', margin: '0', padding: '0', border: 'none' }}>
              <SigninButton />
            </div>
          </div>
        </div>
        {/* off canvas */}
      </div>
      <Offcanvas id={'navbarNavAltMarkup'} />
    </div>
  );
}
