import { Children } from "@/types/props"
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react"

type HouseSelectFormProps = {
  title: string
  searchCondition: {}
  setIsSubmit: Dispatch<SetStateAction<{}>>
  setSearchCondition: Dispatch<SetStateAction<{}>>
  value: string
  children: Children
  className?: string
}

export default function HouseSelectForm(props: HouseSelectFormProps){
  const { title, setIsSubmit, setSearchCondition, value, children, className }= props;

  const handleData = (e:ChangeEvent<HTMLSelectElement>):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();

    setIsSubmit(true);
    setSearchCondition((oldValues) => ({...oldValues, [e.target.name]: Number(e.target.value)}));
    return;
  }

  return (
    <div className={`${className} d-flex flex-column align-items-left`}>
      <label className="fw-bold" style={{color:"#101648"}}>{title}</label>
      <select
        className="form-select rounded-3"
        name={value}
        style={{border:"0px", backgroundColor:"lightgray"}}
        onChange={(e)=>{handleData(e)}}
        defaultValue={-1}>
        {children}
      </select>
    </div>
  );
}