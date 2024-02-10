import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react"

type HouseSearchFormProps = {
  searchCondition: {}
  setIsSubmit: Dispatch<SetStateAction<{}>>
  setSearchCondition: Dispatch<SetStateAction<{}>>
  value: string
  className?: string
}

export default function HouseSearchForm(props: HouseSearchFormProps){
  const { searchCondition, setIsSubmit, setSearchCondition, value, className }= props;

  const handleData = (e:ChangeEvent<HTMLInputElement>):ChangeEventHandler<HTMLInputElement> => {
    if (e) e.preventDefault();

    setSearchCondition((oldValues) => ({...oldValues, [e.target.name]: e.target.value||0}));
    return;
  }

  return (
    <div className={`${className} d-flex align-items-left`}>
      <input
        type='text'
        id={value}
        name={value}
        className="col-8 px-3 me-3 rounded-3"
        onChange={(e)=>handleData(e)}
        placeholder="제품명"
        value={searchCondition[value] || ''}
        style={{backgroundColor:"lightgray", border:"0px"}}/>
      <button
        className="btn col-3 text-white fw-bold"
        type="submit"
        style={{backgroundColor:"#101648"}}
        onClick={()=>{setIsSubmit(true);}}>
        검색
      </button>
    </div>
  );
}