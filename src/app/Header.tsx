import React from "react";
import Image from 'next/image'

type Props = {};

function Header({}: Props) {
  return (
    <div className={`sticky-top bg-white`}>
      <Image
        className={`styles.logo m-3`}
        src="/logo.png"
        alt="Truss Logo"
        width={120}
        height={30}
        priority
      />
    </div>
  );
}

export default Header;