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
      <div
        className=" d-flex justify-content-between w-100"
        style={{ height: '45px', width: '90%', maxWidth: '1150px' }}
      >
        <RouteButton url="/" className="navbar-brand" style={{ marginLeft: '0', marginBottom: '3px', border: 'none' }}>
          <Image src={'/woomzip_logo.webp'} alt={'Truss Logo'} width={110} height={29} />
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
              <RouteButton url="/" style={{ fontSize: '15px', border: 'none' }}>
                홈
              </RouteButton>
              <RouteButton url="/community" style={{ fontSize: '15px', border: 'none' }}>
                커뮤니티
              </RouteButton>
              {/* <RouteButton url="/living" style={{ fontSize: "15px" }}>
              살아보기
            </RouteButton> */}
              <RouteButton url="/house" style={{ fontSize: '15px', border: 'none' }}>
                찾아보기
              </RouteButton>
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
