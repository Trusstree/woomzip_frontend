export default function SignupTextBox({
  title,
  name,
  data,
  setData,
  type,
}: {
  title: string;
  name: string;
  data: any;
  setData: any;
  type?: string;
}) {
  return (
    <div className={`d-flex mb-3`}>
      <label htmlFor={`signup_${name}`} className="fs-5 col-2" style={{ color: "#101648" }}>
        {title}
      </label>
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
    </div>
  );
}
