type TextBoxComponentProps = {
  title: string;
  name: string;
  value: string | number;
  onChange: any;
  className?: string;
};

export function TextBoxComponent(props: TextBoxComponentProps) {
  const { title, name, value, onChange, className } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label htmlFor={`${name}_${title}`} className="fs-5" style={{ color: '#101648' }}>
        {title}
      </label>
      <input type="text" id={`${name}_${title}`} name={name} onChange={onChange} value={value} />
    </div>
  );
}
