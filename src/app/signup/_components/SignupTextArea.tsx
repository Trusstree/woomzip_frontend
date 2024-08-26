export default function SignupTextBox({
  title,
  name,
  data,
  setData,
  explain,
}: {
  title: string;
  name: string;
  data: any;
  setData: any;
  explain?: string;
  type?: string;
}) {
  return (
    <div className={`d-flex mb-3`}>
      <label htmlFor={`signup_${name}`} className="col-2" style={{ fontSize: '18px' }}>
        {title}
      </label>
      <div className={'col-10'}>
        <textarea
          className="w-100"
          id={`signup_${name}`}
          onChange={(e) => {
            setData(e.target.value);
          }}
          name={name}
          value={data}
        />
        {explain && <div style={{ fontSize: '13px', color: 'blue' }}>{explain}</div>}
      </div>
    </div>
  );
}
