import { PriceComponent } from '@/components/forms/PriceComponent';
import { PriceInputComponent } from '@/components/forms/PriceInputComponent';
import { TextAreaComponent } from '@/components/forms/TextAreaComponent';

type HousePriceComponentProps = {
  optionInfo: any;
  setOptionInfo: Function;
  houseInfo: any;
  handleHouse: Function;
};

export function HousePriceComponent(props: HousePriceComponentProps) {
  const { optionInfo, setOptionInfo, houseInfo, handleHouse } = props;
  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTopStyle: 'solid',
        borderTopColor: '#101648',
        borderTopWidth: '2px',
      }}
    >
      <h3 className="fw-bold mb-4">제품 추가 가격 정보를 입력해주세요.</h3>
      <div style={{ width: 'auto', borderRadius: '10px', backgroundColor: 'lightgray', padding: '10px' }}>
        💡 옵션의 가격은 평단가가 아닌, 해당 제품에 적용했을 때 추가되는 총 금액으로 입력해주세요.
      </div>

      <div className={`mt-2 row`}>
        <div className="col-3" style={{ fontSize: '17px' }}>
          옵션 구분
        </div>
        <div className="col-4 ps-1" style={{ fontSize: '17px' }}>
          옵션 이름
        </div>
        <div className="col-3 ps-0" style={{ fontSize: '17px' }}>
          옵션 추가 가격(부가세 제외)
        </div>
      </div>

      <div className="row">
        <PriceInputComponent setData={setOptionInfo} className={''} />
      </div>

      <div className="w-100 d-flex flex-column">
        {optionInfo?.map((e, i) => <PriceComponent key={i} index={i} price={e} setData={setOptionInfo} />)}
      </div>

      <TextAreaComponent
        className={'mt-5 mb-2'}
        title={'추가로, 가격 관련 하고 싶은 말을 적어주세요. (최대 2,000자)'}
        name={'price_variation'}
        data={houseInfo}
        onChange={handleHouse}
        placeholder={''}
        essential={''}
      />
    </div>
  );
}
