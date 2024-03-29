type TextComponentProps = {
  title: string
  text: string
  placeholder: string
  data: any
  onChange: any
  className?: string
}

export function TextAreaComponent(props: TextComponentProps) {
  const { title, text, placeholder, data, onChange, className } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label
        htmlFor={text}
        className="fs-5">
        {title}
      </label>
      <textarea
        style={{resize:"none"}}
        id={text}
        name={text}
        placeholder={placeholder}
        rows={5}
        onChange={onChange}
        value={data[text]} />
    </div>
  )
}