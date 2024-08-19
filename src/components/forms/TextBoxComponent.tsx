type TextBoxComponentProps = {
  title: string;
  essential: string;
  name: string;
  data: any;
  onChange: any;
  className?: string;
};

export function TextBoxComponent(props: TextBoxComponentProps) {
  const { title, name, data, onChange, className, essential } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label htmlFor={`${name}_${title}`} className="" style={{ fontSize: '17px' }}>
        <span style={{ color: 'red' }}>{essential}</span>
        {title}
      </label>
      <input type="text" id={`${name}_${title}`} name={name} onChange={onChange} value={data[name]} />
    </div>
  );
}
