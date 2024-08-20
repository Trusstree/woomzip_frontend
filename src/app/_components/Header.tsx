import React from 'react';
import Image from 'next/image';
import SigninButton from '@/components/auth/SigninButton';
import RouteButton from '@/components/RouteButton';

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <div
      className={`navbar navbar-expand-md justify-content-center sticky-top`}
      style={{
        backgroundColor: 'white',
      }}
    >
      <div
        className="d-flex justify-content-between w-100"
        style={{ height: '40px', width: '90%', maxWidth: '1150px' }}
      >
        <RouteButton url="/" className="" style={{ marginLeft: '0', border: 'none' }}>
          <Image src={'/woomzip_logo.webp'} alt={'Truss Logo'} width={100} height={26} />
        </RouteButton>

        <div className="d-none d-md-flex w-100">
          <div className="d-flex align-items-center me-auto">
            <RouteButton url="/" style={{ fontSize: '15px', marginBottom: '0px', border: 'none' }}>
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
          <div style={{ textAlign: 'right', marginRight: '0', padding: '0', border: 'none' }}>
            <SigninButton />
          </div>
        </div>
      </div>
    </div>
  );
}
