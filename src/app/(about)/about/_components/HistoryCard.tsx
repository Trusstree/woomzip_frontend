export default function HistoryCard({
  year,
  children,
}: {
  year: number;
  children: any;
}) {
  return (
    <div className="row">
      <div className="col-md-7 col-0"></div>
      <div className="col-md-5 col-12" style={{ marginTop: "30px" }}>
        <div
          style={{
            backgroundColor: "#314FC0",
            borderRadius: "50px",
            width: "10px",
            height: "10px",
          }}
        ></div>
        <div style={{ margin: "20px 0", fontWeight: "600" }}>{year}</div>
        <div style={{ lineHeight: "2", wordBreak: "keep-all" }}>{children}</div>
      </div>
    </div>
  );
}
