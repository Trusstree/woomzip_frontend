"use client";

export default function SearchBox({ name, setData, setIsSubmit }) {
  return (
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
    ></input>
  );
}
