export default function SignupTextBox({
  title,
  name,
  data,
  setData,
  explain,
  type,
  checked,
  isChecked,
  checkedFunction,
}: {
  title: string;
  name: string;
  data: any;
  setData: any;
  explain?: string;
  type?: string;
  checked?: boolean;
  isChecked?: boolean;
  checkedFunction?: any;
}) {
  return (
    <div className={`d-flex mb-3`}>
      <label htmlFor={`signup_${name}`} className="col-2" style={{ fontSize: '18px' }}>
        {title}
      </label>
      <div className={checked ? 'col-7' : 'col-10'}>
        <input
          className="w-100"
          type={type || 'text'}
          id={`signup_${name}`}
          onChange={(e) => {
            setData(e.target.value);
          }}
          name={name}
          value={data}
          max={type == 'date' ? '9999-12-31' : 0}
        />
        {explain && <div style={{ fontSize: '13px', color: 'blue' }}>{explain}</div>}
      </div>
      {checked && (
        <div className="col-3 d-flex justify-content-center align-items-top">
          <div
            className={`w-100 btn ${isChecked ? 'btn-success' : 'btn-secondary'}`}
            style={{
              paddingTop: '3px',
              maxWidth: '150px',
              height: '30px',
              wordBreak: 'break-word',
              whiteSpace: 'balance',
            }}
            onClick={checkedFunction}
          >
            확인
          </div>
        </div>
      )}
    </div>
  );
}
