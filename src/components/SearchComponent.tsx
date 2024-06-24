"use client";

export default function SearchComponent({}: {}) {
  // href={`${"/community"}${"" ? `?category=${category}` : ``}`}
  return (
    <div
      style={{
        width: "auto",
        position: "absolute",
        top: 0,
        right: 0,
        padding: "0",
        borderLeft: "2px solid gray",
        backgroundColor: "white",
      }}
    >
      <input
        style={{ width: "300px", marginLeft: "20px", height: "40px" }}
        placeholder={" 찾고 싶은 내용을 검색해보세요"}
      />
      <div
        className="btn"
        style={{ width: "auto", backgroundColor: "white", borderRadius: "0" }}
        data-bs-toggle="modal"
        data-bs-target={`#search_modal`}
      >
        <div style={{ width: "70px", height: "37px" }}>
          <img
            src={
              "https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/search.png"
            }
            width={30}
          ></img>
        </div>
        <div style={{ fontSize: "15px" }}>검색</div>
      </div>
    </div>
  );
}
