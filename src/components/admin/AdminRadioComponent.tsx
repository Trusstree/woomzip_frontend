type RadioComponentProps = {
  id: string
  name: string
  data: string | number | readonly string[]
  title: string
  onChange: any
  className?: string
}

export function AdminRadioComponent(props: RadioComponentProps) {
  const {id, name, data, onChange,title, className} = props;
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={data}
        onChange={onChange}
        defaultChecked/>
      <label
        className="form-check-label"
        htmlFor={id}>
        {title}
      </label>
    </div>
  )
}