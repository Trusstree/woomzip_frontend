export default function HistoryCard({ year, children }: { year: number; children: any }) {
  return (
    <div className="col-6 row g-2" style={{ minWidth: "350px", marginBottom: "30px" }}>
      <div className="col-3 text-center" style={{ fontSize: "20px", fontWeight: "500" }}>
        {year}
      </div>
      <div className="col-9" style={{ minWidth: "350px" }}>
        <>{children}</>
      </div>
    </div>
  );
}
