import { parseSpecificationInfo } from "@/lib/parseUtil";

export default function RowText({
  name,
  data,
}: {
  name: string;
  data: string;
}) {
  return (
    <div className="row" style={{ margin: "5px 0" }}>
      <div className="col-5" style={{ fontSize: "15px", fontWeight: "500" }}>
        {name}
      </div>
      <div className="col-7" style={{ fontSize: "15px", fontWeight: "330" }}>
        {data}
      </div>
    </div>
  );
}
