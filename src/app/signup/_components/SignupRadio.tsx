export default function SignupGenderRadio({ data, setData }) {
  return (
    <div className="d-flex mb-3">
      <div className="fs-5 col-2">성별</div>
      <div className={`form-check mx-2`}>
        <input
          className="form-check-input"
          type="radio"
          name={"gender"}
          id={`gender_man`}
          value={data}
          onChange={() => {
            setData("M");
          }}
        />
        <label className="fs-5 form-check-label" htmlFor={`gender_man`}>
          {"남성"}
        </label>
      </div>

      <div className={`form-check mx-2`}>
        <input
          className="form-check-input"
          type="radio"
          name={"gender"}
          id={`gender_woman`}
          value={data}
          onChange={() => {
            setData("W");
          }}
        />
        <label className="fs-5 form-check-label" htmlFor={`gender_woman`}>
          {"여성"}
        </label>
      </div>
    </div>
  );
}
