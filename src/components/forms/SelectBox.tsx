import { SetStateAction } from "react";

type SelectBoxProps = {
  value: any
  handleChange: SetStateAction<any>
  array: Array<any>
  className?: string
}

export default function SelectBox(props: SelectBoxProps){
  const {value, handleChange, array, className}=props;

  return (
    <div className={`${className}`}>
    <select
      className={`form-select h-100`}
      value={value}
      onChange={(e)=>{handleChange(e.target?.value || "");}}>
      ({array.map((elem, i)=><option key={i} value={elem}>{elem}</option>)})
    </select>
    </div>
  )
}