import { PriceComponent } from "@/components/forms/PriceComponent";
import { PriceInputComponent } from "@/components/forms/PriceInputComponent";
import { TextAreaComponent } from "@/components/forms/TextAreaComponent";

type HousePriceComponentProps = {
  optionInfo:any
  setOptionInfo:Function
  houseInfo: any
  handleHouse: Function
}

export function HousePriceComponent(props: HousePriceComponentProps){
  const { optionInfo, setOptionInfo, houseInfo, handleHouse } = props;
  return (
    <div
      className="mt-4 py-4"
      style={{borderTopStyle:"solid", borderTopColor:"#101648", borderTopWidth:"2px"}}>
      <h3 className="fw-bold mb-4">제품 추가 가격 정보를 입력해주세요.</h3>
      
      <div className={`mt-2 row`}>
        <div className="fs-5 col-3">옵션 구분</div>
        <div className="fs-5 col-4 ps-1">옵션 이름</div>
        <div className="fs-5 col-3 ps-0">옵션 추가 가격</div>
      </div>
      
      <div className="row">
        <PriceInputComponent setData={setOptionInfo} className={""} />
      </div>
      
      <div className="w-100 d-flex flex-column">
        {optionInfo.length>0 && optionInfo.map((e, i)=>(
          <PriceComponent key={i} price={e} setData={setOptionInfo} />
        ))}
      </div>

      <TextAreaComponent className={"mt-5 mb-2"} title={"기타 가격 변동사항 설명글 (최대 2,000자)"} name={"price_variation"} data={houseInfo} onChange={handleHouse} placeholder={""}/>
    </div>
  );
}

