type TextBoxComponentProps = {
  title: string;
  name: string;
  value: string | number;
  onChange: any;
  className?: string;
  essential: string;
};

export function TextBoxComponent(props: TextBoxComponentProps) {
  const { title, name, value, onChange, className, essential } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label htmlFor={`${name}_${title}`} className="" style={{ fontSize: '17px' }}>
        {essential && <span style={{ color: 'red' }}>{essential}</span>}
        {title}
      </label>
      <input type="text" id={`${name}_${title}`} name={name} onChange={onChange} value={value} />
    </div>
  );
}
