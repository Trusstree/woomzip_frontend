"use client"

import { ClientSafeProvider, signIn } from 'next-auth/react';

type IProps = {
  providers:Record<string, ClientSafeProvider>
}

const svgLogo={
  naver:
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111" width="55" height="55">
      <rect className="cls-2" fill="#101648" y="0" rx="9.05" ry="9.05"/>
      <polygon className="cls-1" fill="#ffffff" points="83.07 30.16 83.07 80.85 64.57 80.85 46.44 55.33 46.44 80.85 27.94 80.85 27.94 30.16 46.44 30.16 64.57 56.7 64.57 30.16 83.07 30.16"/>
    </svg>
  ,
  
  kakao:
    <svg width="55px" height="55px" viewBox="-204.8 -204.8 921.60 921.60" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path fill="#FFFFFF" d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"/>
      </g>
  </svg>
  ,

  google:
  <svg width="55px" height="55px" viewBox="-8 -8 36.00 36.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#FFFFFF"> <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#FFFFFF178]"/>
          </g> 
        </g> 
      </g> 
    </g>
  </svg>
}

export default function SocialSigninButton({ providers }: IProps) {
  return (
    <div>
      {Object.values(providers).map(provider => (
        <div key={provider.name} style={{width:330}}>
          <button
            className='btn btn-lg rounded-3 my-3 w-100 fw-bold fs-4'
            onClick={() => {signIn(provider.id, {redirect:false, callbackUrl:process.env.NEXT_PUBLIC_CALLBACKURL});}}
            style={{backgroundColor:"#101648", color:"#ffffff"}}>
            <div className='d-flex justify-content-between'>
              <div className="btn m-0 p-0" style={{border:"none", outline:"none"}}>
                {svgLogo[provider.id]}
              </div>
              <span className={"align-self-center me-3"}>{provider.id.toUpperCase()} 로그인</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}