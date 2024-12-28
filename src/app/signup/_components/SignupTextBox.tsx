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
      <label htmlFor={`signup_${name}`} className="col-2" style={{ fontSize: '20px', fontWeight: '700' }}>
        {title}
      </label>
      <div className={checked ? 'col-md-7 col-6' : 'col-10'}>
        <input
          className="w-100"
          style={{ borderRadius: '25px', padding: '5px 10px', border: '1px solid black' }}
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
        <div className="col-4 col-md-3 d-flex justify-content-center align-items-top">
          <div
            className={`btn ${isChecked ? 'btn-success' : 'btn-secondary'}`}
            style={{
              borderRadius: '25px',
              padding: '5px 20px',
              wordBreak: 'break-word',
              whiteSpace: 'balance',
              height: '36px',
              backgroundColor: 'black',
              color: '#ffffff',
            }}
            onClick={checkedFunction}
          >
            중복확인
          </div>
        </div>
      )}
    </div>
  );
}
