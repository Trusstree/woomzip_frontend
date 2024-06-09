import { Children } from "@/types/props";

export default function HouseText({ title, children, expl }: { title: string; children: Children; expl?: boolean }) {
  return expl ? (
    <div className="my-1 d-flex flex-column">
      <div className="fw-bold fs-5" style={{ color: "#101648" }}>
        {title}
      </div>
      <div className="fs-5" style={{ color: "#101648" }}>
        {children}
      </div>
    </div>
  ) : (
    <div className="my-1 row">
      <div className="fw-bold fs-5 col-5" style={{ color: "#101648" }}>
        {title}
      </div>
      <div className="col-7 fs-5" style={{ color: "#101648" }}>
        {children}
      </div>
    </div>
  );
}
