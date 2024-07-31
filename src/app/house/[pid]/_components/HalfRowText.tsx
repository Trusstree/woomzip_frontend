import { parseSpecificationInfo } from "@/lib/parseUtil";

export default function HalfRowText({
  name,
  data,
}: {
  name: string;
  data: string;
}) {
  return (
    <div className="row col-6" style={{ margin: "5px 0" }}>
      <div className="col-6" style={{ fontSize: "15px", fontWeight: "600" }}>
        {name}
      </div>
      <div className="col-6" style={{ fontSize: "15px" }}>
        {data}
      </div>
    </div>
  );
}
