export default function SignupTextBox({
  title,
  name,
  explain,
  data,
  setData,
  type,
}: {
  title: string;
  name: string;
  explain: string;
  data: any;
  setData: any;
  type?: string;
}) {
  return (
    <>
      <div className={`d-flex mb-3`}>
        <label htmlFor={`signup_${name}`} className="col-2" style={{ fontSize: "18px" }}>
          {title}
        </label>
        <div className="col-10">
          <input
            className="w-100"
            type={type || "text"}
            id={`signup_${name}`}
            onChange={(e) => {
              setData(e.target.value);
            }}
            name={name}
            value={data}
            max={type == "date" ? "9999-12-31" : 0}
          />
          <div style={{ fontSize: "13px", color: "blue" }}>{explain}</div>
        </div>
      </div>
    </>
  );
}
