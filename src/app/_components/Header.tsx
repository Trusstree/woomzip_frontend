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
        backgroundColor: 'black',
        position: 'sticky',
        top: '0',
        width: '100%',
      }}
    >
      <div className=" d-flex justify-content-between" style={{ height: '45px', width: '95%' }}>
        <RouteButton url="/" className="navbar-brand" style={{ marginLeft: '0', border: 'none', marginBottom: '6px' }}>
          <div className="d-flex align-items-center">
            {/* <Image src={'/woomzip_new_logo.png'} alt={'Truss Logo'} width={29} height={21} style={{ padding: '0' }} /> */}
            <div style={{ fontSize: '18px', fontWeight: '500', color: '#ffffff' }}>woomzip</div>{' '}
          </div>
        </RouteButton>

        <button
          className="navbar-toggler ms-auto me-3"
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
          <div className="navbar-nav d-none d-md-flex w-100 align-items-center" style={{ justifyContent: 'flex-end' }}>
            <div className="d-flex align-items-center">
              {/* <RouteButton url="/" style={{ fontSize: '16px', border: 'none', fontWeight: '500' }}>
                움집소개
              </RouteButton> */}

              <RouteButton
                url="/house"
                style={{ fontSize: '13px', border: 'none', fontWeight: '400', margin: '0 5px' }}
              >
                제품찾기
              </RouteButton>
              <RouteButton
                url="/service"
                style={{ fontSize: '13px', border: 'none', fontWeight: '400', margin: '0 5px' }}
              >
                서비스소개
              </RouteButton>
              <RouteButton
                url="/about"
                style={{ fontSize: '13px', border: 'none', fontWeight: '400', margin: '0 5px' }}
              >
                회사소개
              </RouteButton>
              <RouteButton
                url="/news"
                style={{ fontSize: '13px', border: 'none', fontWeight: '400', margin: '0 5px' }}
              >
                뉴스
              </RouteButton>

              {/* <RouteButton url="/living" style={{ fontSize: "15px" }}>
                살아보기
                </RouteButton> */}
              {/* <RouteButton url="/planning" style={{ fontSize: "15px" }}>
                  계획하기
                </RouteButton> */}
              {/* <div style={{ marginLeft: '25px' }}>
                <SigninButton />
              </div> */}
            </div>
          </div>
        </div>
        {/* off canvas */}
      </div>
      <Offcanvas id={'navbarNavAltMarkup'} />
    </div>
  );
}
