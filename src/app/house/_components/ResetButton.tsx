"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function ResetButton({}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.replace(pathname);
  };

  return (
    <div>
      <button
        style={{
          width: "auto",
          height: "40px",
          border: "none",
          backgroundColor: "white",
          fontSize: "16px",
        }}
        onClick={handleClick}
      >
        조건 초기화
      </button>
    </div>
  );
}
{
  /* <MobileView>
        <button
          style={{
            width: "35px", // 모바일에서 버튼의 너비를 다르게 설정
            height: "55px",
            margin: "3px",
            paddingTop:"20px",
            backgroundColor: "white",
            border:"none"
          }}
          onClick={handleClick}
        >
          <Image src={img} alt={"icon"} width={25} height={25} style={{ padding: "3px"}} />
        </button>
      </MobileView> */
}
