import { SelectBoxComponent } from "./SelectBoxComponent"

type SelectComponentProps = {
  title: string
  name: string
  dataList: Array<string>
  onChange: any
  className?: string
}

export function SelectComponent(props: SelectComponentProps) {
  const {title, name, dataList, onChange, className} = props;


  return (
    <div className={`${className||""} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="row">
        <div className="col-5 d-flex">
          {dataList.map((e, i)=>(
            <SelectBoxComponent key={i} name={name} title={e} onChange={onChange} className={`${className||""} mx-2`} />
          ))}
          
        </div>
        <div className="col-5 d-flex">
          <input
            className="form-check-input"
            type="checkbox"
            name={name}
            id={`${name}_etc`}
            value={"etc"}
            onChange={onChange} />
          <label
            className="fs-5 form-check-label"
            htmlFor={`${name}_etc`}>
            기타
          </label>
          <input
            className="mx-3 w-75 h-100"
            type='text'
            id={`${name}_etc_input`}
            name={`${name}_etc_input`}
            onChange={onChange}
            value={name["etc"]} />
        </div>
      </div>
    </div>
  )
}