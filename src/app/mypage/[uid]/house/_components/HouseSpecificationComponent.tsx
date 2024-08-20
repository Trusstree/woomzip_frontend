import { HouseSelectComponent } from '@/app/mypage/[uid]/house/_components/HouseSelectComponent';
import useSpecificityInfo from '@/app/mypage/[uid]/house/_store/specificationInfo';
import { TextAreaComponent } from '@/components/forms/TextAreaComponent';
import { TextBoxComponent } from '@/components/forms/TextBoxComponent';
import { ChangeEvent } from 'react';

export function HouseSpecificationComponent() {
  const {
    framework,
    wall,
    exteriorMaterial,
    roofingMaterial,
    insulationMaterial,
    interiorMaterial,
    window,
    heating,
    furniture,
    toilet,
    kitchen,
    lighting,
    etcInfo,
    specificationDescription,
    setFramework,
    setWall,
    setExteriorMaterial,
    setRoofingMaterial,
    setInsulationMaterial,
    setInteriorMaterial,
    setWindow,
    setHeating,
    setFurniture,
    setToilet,
    setKitchen,
    setLighting,
    setETCInfo,
    setSpecificationDescription,
  } = useSpecificityInfo();

  const handleETCInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setETCInfo(e.target.value);
  };

  const handleSpecificationDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setSpecificationDescription(e.target.value);
  };

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
        <div style={{ fontSize: '18px', color: 'red' }}>
          *선택사항에 해당되는 내용을 모두 체크하고, 해당 내용이 선택지에 없다면 기타에 자세히 적어주세요.
        </div>
        <HouseSelectComponent
          title={'골조구조'}
          name={'framework'}
          value={framework}
          onChange={setFramework}
          dataList={['경량목', '경량스틸', '철근콘크리트']}
        />
        <HouseSelectComponent
          title={'벽체 구조체'}
          name={'wall'}
          value={wall}
          onChange={setWall}
          dataList={['샌드위치 판넬', 'OSB 합판', '석고보드']}
        />
        <HouseSelectComponent
          title={'외장재'}
          name={'exterior_material'}
          value={exteriorMaterial}
          onChange={setExteriorMaterial}
          dataList={['써모사이딩', '징크', '리얼징크', '루버강판', '우드루바']}
        />
        <HouseSelectComponent
          title={'지붕재'}
          name={'roofing_material'}
          value={roofingMaterial}
          onChange={setRoofingMaterial}
          dataList={['징크', '리얼징크', '아스팔트슁글']}
        />
        <HouseSelectComponent
          title={'단열재'}
          name={'insulation_material'}
          value={insulationMaterial}
          onChange={setInsulationMaterial}
          dataList={['스카이텍', '기밀자재']}
        />
        <HouseSelectComponent
          title={'내장재'}
          name={'interior_material'}
          value={interiorMaterial}
          onChange={setInteriorMaterial}
          dataList={['합지도배', '랩핑몰딩', '강화마루']}
        />
        <HouseSelectComponent
          title={'창호'}
          name={'window'}
          value={window}
          onChange={setWindow}
          dataList={['미국식', '유럽식', 'KCC']}
        />
        <HouseSelectComponent
          title={'난방'}
          name={'heating'}
          value={heating}
          onChange={setHeating}
          dataList={['전기탄소필름', 'LPG']}
        />
        <HouseSelectComponent
          title={'가구'}
          name={'furniture'}
          value={furniture}
          onChange={setFurniture}
          dataList={['신발장', '수납장', '붙박이장']}
        />
        <HouseSelectComponent
          title={'화장실'}
          name={'toilet'}
          value={toilet}
          onChange={setToilet}
          dataList={['온수기', '양변기', '세면대', '샤워부스']}
        />
        <HouseSelectComponent
          title={'주방'}
          name={'kitchen'}
          value={kitchen}
          onChange={setKitchen}
          dataList={['싱크대', '인덕션', '가스레인지', '하이라이트']}
        />
        <HouseSelectComponent
          title={'조명'}
          name={'lighting'}
          value={lighting}
          onChange={setLighting}
          dataList={['LED']}
        />
        <TextBoxComponent
          className={'my-2'}
          title={'기타'}
          name={'etc_info'}
          value={etcInfo}
          onChange={handleETCInfo}
        />
        <TextAreaComponent
          className={'my-2'}
          title={'추가로, 제작사양 관련 하고 싶은 말을 적어주세요. (최대 2,000자)'}
          name={'specification_description'}
          value={specificationDescription}
          onChange={handleSpecificationDescription}
        />
      </div>
    </div>
  );
}
