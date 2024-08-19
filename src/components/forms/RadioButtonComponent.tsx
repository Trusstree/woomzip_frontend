type RadioButtonComponentProps = {
  name: string;
  data: any;
  title: string;
  onChange: any;
  checked?: boolean;
  className?: string;
};

export function RadioButtonComponent(props: RadioButtonComponentProps) {
  const { name, data, onChange, title, checked, className } = props;
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={`${name}_${data}`}
        value={data}
        onChange={onChange}
        checked={checked}
      />
      <label className="fs-5 form-check-label" htmlFor={`${name}_${data}`}>
        {title}
      </label>
    </div>
  );
}
