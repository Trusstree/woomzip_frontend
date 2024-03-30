type SelectBoxComponentProps = {
  name: string
  title: string
  onChange: any
  className?: string
}

export function SelectBoxComponent(props: SelectBoxComponentProps) {
  const {name, title, onChange, className} = props;
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="checkbox"
        name={name}
        id={`${name}_${title}`}
        value={title}
        onChange={onChange} />
      <label
        className="fs-5 form-check-label"
        htmlFor={`${title}`}>
        {title}
      </label>
    </div>
  )
}