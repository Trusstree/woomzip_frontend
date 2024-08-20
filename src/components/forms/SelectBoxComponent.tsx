type SelectBoxComponentProps = {
  name: string;
  title: string;
  handleChange: any;
  className?: string;
  disable?: boolean;
};

export function SelectBoxComponent(props: SelectBoxComponentProps) {
  const { name, title, handleChange, className, disable } = props;
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        id={`${name}_${title}`}
        value={title}
        onChange={handleChange}
        checked={disable}
        disabled={disable || false}
      />
      <label className="fs-5 form-check-label" htmlFor={`${title}`}>
        {title}
      </label>
    </div>
  );
}
