import { RadioButtonComponent } from "./RadioButtonComponent";

type RadioComponentProps = {
  title: string
  name: string
  data: Array<any>
  onChange: Function
  className?: string
}

export function RadioComponent(props: RadioComponentProps) {
  const {title, name, data, onChange, className} = props;
  return (
    <div className={`${className||""} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="d-flex">
        {data.map((e, i)=>(
          <RadioButtonComponent
            key={i}
            name={name}
            title={e.title}
            data={e.data}
            onChange={onChange}
            className={`${e.className||""} mx-2`} />
        ))}
      </div>
    </div>
  )
}