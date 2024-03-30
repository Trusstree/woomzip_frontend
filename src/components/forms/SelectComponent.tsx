import { SelectBoxComponent } from "./SelectBoxComponent"

type SelectComponentProps = {
  title: string
  name: string
  dataList: Array<string>
  onChange: Function
  className?: string
}

export function SelectComponent(props: SelectComponentProps) {
  const {title, name, dataList, onChange, className} = props;
  return (
    <div className={`${className||""} my-2 d-flex flex-column`}>
      <span className="fs-5">{title}</span>
      <div className="d-flex">
        {dataList.map((e, i)=>(
          <SelectBoxComponent key={i} name={name} title={e} onChange={onChange} className={`${className||""} mx-2`} />
        ))}
        {/* 기타는 따로 관리해서 넣어야 할 듯 */}
      </div>
    </div>
  )
}