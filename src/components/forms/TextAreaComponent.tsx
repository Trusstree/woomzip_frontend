type TextComponentProps = {
  title: string
  name: string
  placeholder: string
  data: any
  onChange: any
  className?: string
}

export function TextAreaComponent(props: TextComponentProps) {
  const { title, name, placeholder, data, onChange, className } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label
        htmlFor={`${name}_${title}`}
        className="fs-5">
        {title}
      </label>
      <textarea
        style={{resize:"none"}}
        id={`${name}_${title}`}
        name={name}
        placeholder={placeholder}
        rows={4}
        onChange={onChange}
        value={data[name]} />
    </div>
  )
}