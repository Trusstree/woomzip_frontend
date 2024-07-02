"use client";

export default function SearchBox({ name, setData, setIsSubmit }) {
  return (
    <div>
      <input
        style={{
          width: "350px",
          height: "40px",
          borderRadius: "10px",
          borderStyle: "solid",
          margin: "3px",
          backgroundColor: "white",
          borderWidth: "2px",
          borderColor: "gray",
        }}
        onChange={(e) => {
          setData((oldValue) => ({ ...oldValue, [name]: e.target.value }));
          setIsSubmit(true);
        }}
        placeholder={"제품/업체명으로 검색"}
      />
    </div>
  );
}

{
  /* <MobileView>
        <input
          style={{
            width: "95vw", // 모바일에서 가로폭을 전체 화면 너비로 설정
            height: "40px",
            borderRadius: "10px",
            borderStyle: "solid",
            backgroundColor: "white",
            borderWidth: "2px",
            borderColor: "gray",
          }}
          onChange={(e) => {
            setData((oldValue) => ({ ...oldValue, [name]: e.target.value }));
            setIsSubmit(true);
          }}
          placeholder={"제품/업체명을 검색해보세요"}
        />
      </MobileView> */
}
