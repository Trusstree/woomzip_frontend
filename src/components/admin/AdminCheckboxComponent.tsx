type CheckboxComponentProps = {
  id: string
  name: string
  data: string | number | readonly string[]
  title: string
  onChange: any
  className?: string
}

export function AdminCheckboxComponent(props: CheckboxComponentProps) {
  const {id, name, data, onChange, title, className} = props;
  return (
    <div className={`${className} form-check`}>
      <input
        className="form-check-input"
        type="checkbox"
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