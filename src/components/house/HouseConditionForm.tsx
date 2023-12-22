import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react"

type HouseConditionFormProps = {
  title: string
  searchCondition: {}
  setSearchCondition: Dispatch<SetStateAction<{}>>
  minValue: string
  maxValue: string
  className?: string
}

export default function HouseConditionForm(props: HouseConditionFormProps){
  const { title, searchCondition, setSearchCondition, minValue, maxValue, className }= props;

  const handleData = (e:ChangeEvent<HTMLInputElement>, name:string):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();

    setSearchCondition((oldValues) => ({...oldValues, [name]: e.target.value||0}));
    return;
  }

  return (
    <div className={`${className} d-flex flex-column align-items-left`}>
      <label>{title}</label>
      <div className="d-flex justify-content-center">
        <input
          type='text'
          id={minValue}
          className="col-5"
          onChange={(e)=>handleData(e, minValue)}
          value={searchCondition[minValue] || ''}
        />
        <span className="col-2 d-flex justify-content-center">~</span>
        <input
          type='text'
          id={maxValue}
          className="col-5"
          onChange={(e)=>handleData(e, maxValue)}
          value={searchCondition[maxValue] || ''}
        />
      </div>
    </div>
  );
}