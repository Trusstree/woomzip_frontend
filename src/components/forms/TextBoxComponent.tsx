type TextBoxComponentProps = {
  title: string
  text: string
  data: any
  onChange: any
  className?: string
}

export function TextBoxComponent(props: TextBoxComponentProps) {
  const { title, text, data, onChange,className } = props;
  return (
    <div className={`${className} d-flex flex-column`}>
      <label
        htmlFor={text}
        className="fs-5"
        style={{color:"#101648"}}>
        {title}
      </label>
      <input
        type='text'
        id={text}
        name={text}
        onChange={onChange}
        value={data[text]} />
    </div>
  )
}