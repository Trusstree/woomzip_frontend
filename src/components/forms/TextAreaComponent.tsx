type TextComponentProps = {
  title: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: any;
  className?: string;
  essential?: string;
};

export function TextAreaComponent(props: TextComponentProps) {
  const { title, name, value, onChange, placeholder, className, essential } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label htmlFor={`${name}_${title}`} className="" style={{ fontSize: '17px' }}>
        {essential && <span style={{ color: 'red' }}>{essential}</span>}
        {title}
      </label>
      <textarea
        style={{ resize: 'none' }}
        id={`${name}_${title}`}
        name={name}
        placeholder={placeholder ?? ''}
        rows={4}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
