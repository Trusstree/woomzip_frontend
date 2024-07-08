import HouseClient from "@/app/house/_components/HouseClient";

export default function Home() {
  return (
    <div style={{ width: "90%", maxWidth: "1300px", margin: "0 auto" }}>
      <div
        style={{
          width: "100%",
          fontSize: "33px",
          fontWeight: "600",
          margin: "70px 0",
          wordBreak: "keep-all",
        }}
      >
        <span style={{ color: "#314FC0" }}>움집</span>에서 가장 쉽고 빠른 집 찾기
      </div>
      <HouseClient />
    </div>
  );
}
