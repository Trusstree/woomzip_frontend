export default function RowText({ name, data }: { name: string; data: string }) {
  return (
    <div className="row">
      <div className="col-4" style={{ fontSize: "16px", fontWeight: "600" }}>
        {name}
      </div>
      <div className="col-8" style={{ fontSize: "16px" }}>
        {data}
      </div>
    </div>
  );
}
