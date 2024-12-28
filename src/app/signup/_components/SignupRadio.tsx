export default function SignupGenderRadio({ data, setData }) {
  return (
    <div className="d-flex mb-3">
      <div className="col-2" style={{ fontSize: '20px', fontWeight: '700' }}>
        성별
      </div>
      <div className={`form-check mx-2`}>
        <input
          className="form-check-input"
          type="radio"
          name={'gender'}
          id={`gender_man`}
          value={data}
          onChange={() => {
            setData('M');
          }}
          checked={data == 'M'}
        />
        <label className="fs-6 form-check-label" htmlFor={`gender_man`}>
          {'남성'}
        </label>
      </div>

      <div className={`form-check mx-2`}>
        <input
          className="form-check-input"
          type="radio"
          name={'gender'}
          id={`gender_woman`}
          value={data}
          onChange={() => {
            setData('W');
          }}
          checked={data == 'W'}
        />
        <label className="fs-6 form-check-label" htmlFor={`gender_woman`}>
          {'여성'}
        </label>
      </div>
    </div>
  );
}
