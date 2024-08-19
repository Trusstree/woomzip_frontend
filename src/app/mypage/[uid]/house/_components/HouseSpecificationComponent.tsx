import { SelectComponent } from '@/components/forms/SelectComponent';
import { TextAreaComponent } from '@/components/forms/TextAreaComponent';
import { TextBoxComponent } from '@/components/forms/TextBoxComponent';

type HouseSpecificationComponentProps = {
  specificationInfo: any;
  setSpecificationInfo: Function;
  handleSpecification: Function;
};

export function HouseSpecificationComponent(props: HouseSpecificationComponentProps) {
  const { specificationInfo, setSpecificationInfo, handleSpecification } = props;

  return (
    <div
      className="mt-4 py-4"
      style={{
        borderTopStyle: 'solid',
        borderTopColor: '#101648',
        borderTopWidth: '2px',
      }}
    >
      <h3 className="fw-bold mb-4">기본 제품 제작 사양을 입력해주세요.</h3>
      <div style={{ width: 'auto', borderRadius: '10px', backgroundColor: 'lightgray', padding: '10px' }}>
        💡 선택사항에 해당되는 내용을 모두 체크하고, 해당 내용이 선택지에 없다면 기타에 자세히 적어주세요.
      </div>

      <SelectComponent
        title={'골조구조'}
        name={'framework'}
        onChange={setSpecificationInfo}
        dataList={['경량목', '경량스틸', '철근콘크리트']}
        essential={''}
      />

      <SelectComponent
        title={'벽체 구조체'}
        name={'wall'}
        onChange={setSpecificationInfo}
        dataList={['샌드위치 판넬', 'OSB 합판', '석고보드']}
        essential={''}
      />

      <SelectComponent
        title={'외장재'}
        name={'exterior_material'}
        onChange={setSpecificationInfo}
        dataList={['써모사이딩', '징크', '리얼징크', '루버강판', '우드루바']}
        essential={''}
      />

      <SelectComponent
        title={'지붕재'}
        name={'roofing_material'}
        onChange={setSpecificationInfo}
        dataList={['징크', '리얼징크', '아스팔트슁글']}
        essential={''}
      />

      <SelectComponent
        title={'단열재'}
        name={'insulation_material'}
        onChange={setSpecificationInfo}
        dataList={['스카이텍', '기밀자재']}
        essential={''}
      />

      <SelectComponent
        title={'내장재'}
        name={'interior_material'}
        onChange={setSpecificationInfo}
        dataList={['합지도배', '랩핑몰딩', '강화마루']}
        essential={''}
      />

      <SelectComponent
        title={'창호'}
        name={'window'}
        onChange={setSpecificationInfo}
        dataList={['미국식', '유럽식', 'KCC']}
        essential={''}
      />

      <SelectComponent
        title={'난방'}
        name={'heating'}
        onChange={setSpecificationInfo}
        dataList={['전기탄소필름', 'LPG']}
        essential={''}
      />

      <SelectComponent
        title={'가구'}
        name={'furniture'}
        onChange={setSpecificationInfo}
        dataList={['신발장', '수납장', '붙박이장']}
        essential={''}
      />

      <SelectComponent
        title={'화장실'}
        name={'toilet'}
        onChange={setSpecificationInfo}
        dataList={['온수기', '양변기', '세면대', '샤워부스']}
        essential={''}
      />

      <SelectComponent
        title={'주방'}
        name={'kitchen'}
        onChange={setSpecificationInfo}
        dataList={['싱크대', '인덕션', '가스레인지', '하이라이트']}
        essential={''}
      />

      <SelectComponent
        title={'조명'}
        name={'lighting'}
        onChange={setSpecificationInfo}
        dataList={['LED']}
        essential={''}
      />

      <TextBoxComponent
        className={'my-2'}
        title={'기타'}
        name={'etc_info'}
        data={specificationInfo}
        onChange={handleSpecification}
        essential={''}
      />
      <TextAreaComponent
        className={'my-2'}
        title={'추가로, 제작사양 관련 하고 싶은 말을 적어주세요. (최대 2,000자)'}
        name={'specification_description'}
        data={specificationInfo}
        onChange={handleSpecification}
        placeholder={''}
        essential={''}
      />
    </div>
  );
}
