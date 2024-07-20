import TeamPositionBadge from "@/app/(about)/about/_components/TeamPositionBadge";

export default function WorkerCard({ name, dept, position, src, introduce, email }) {
  return (
    <>
      <div className="col-4" style={{ marginBottom: "30px" }}>
        <img
          src={src}
          style={{
            width: "100%",
            borderRadius: "10px",
            boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <div className="col-8">
        <div style={{ fontSize: "20px" }}>{` ${name} | ${dept} `}</div>
        <div>
          {position.map((e, i) => (
            <TeamPositionBadge key={i} backgroundColor={e.backgroundColor} color={e.color}>
              {e.name}
            </TeamPositionBadge>
          ))}
        </div>
        <div>{introduce}</div>
        <div>{email}</div>
      </div>
    </>
  );
}
