"use client";
import Image from "next/image";

export default function ResetButton({ img, setData, setIsSubmit }) {
  const handleClick = () => {
    setData({});
    setIsSubmit(true);
  };

  return (
    <div>
      <button
        style={{
          width: "50px",
          height: "40px",
          borderRadius: "10px",
          borderStyle: "solid",
          margin: "3px",
          backgroundColor: "white",
          borderWidth: "2px",
          borderColor: "gray",
        }}
        onClick={handleClick}
      >
        <Image src={img} alt={"icon"} width={25} height={25} style={{ padding: "3px", marginLeft: "2px" }} />
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
