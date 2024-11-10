'use client';

import React, { useCallback, useEffect, useState } from 'react';
import SelectBox from '@/app/planning/_components/SelectBox';
import SelectMiniBox from '@/app/planning/_components/SelectMiniBox';
import SelectCityBox from '@/app/planning/_components/SelectCityBox';
import PriceBox from '@/app/planning/_components/PriceBox';
import { useRouter, useSearchParams } from 'next/navigation';
import { getHouse } from '@/actions/apis/houseAPI';
import { alertError } from '@/lib/alertUtil';
import PlanningHouseCard from '@/app/planning/_components/PlanningHouseCard';
import usePlanningInfo from '@/app/planning/_store/planningInfo';

export default function PlanningClient() {
  const searchParams = useSearchParams();
  const house_id = Number(searchParams.get('house_id'));
  const [houseData, setHouseData] = useState({} as any);
  const router = useRouter();

  const planningInfo = usePlanningInfo();

  const submit = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (isNaN(house_id) || house_id <= 0) {
      alertError('house_id', '집이 선택되지 않았어요!');
      router.push('/house');
    }

    if (planningInfo.houseType.length == 0) {
      alertError('농막인지 주택인지 선택해주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.addr.length == 0) {
      alertError('위치를 선택해주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.area.length == 0) {
      alertError('토지 면적을 선택해주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.landCondition.length == 0) {
      alertError('토지 기울기를 선택해주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.roadCondition.length == 0) {
      alertError('도로 진입로 상태를 선택해주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    router.push(`/planning/application?${params.toString()}`);
  }, [planningInfo]);

  useEffect(() => {
    (async () => {
      if (isNaN(house_id)) return;
      const [data, error] = await getHouse(house_id);
      if (error) {
        console.error(error);
        return;
      }

      // house card 데이터 채워넣는 용도
      setHouseData({
        houseName: data.data[0]['house_info']['house_name'],
        price: data.data[0]['house_info']['final_price'],
        imgUrl: data.data[0]['house_image']['representative_images'],
        totalFloorArea: data.data[0]['house_info']['total_floor_area'],
        roomCount: data.data[0]['house_info']['room_count'],
        toiletCount: data.data[0]['house_info']['toilet_count'],
      });
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8 col-12">
        <div style={{ marginBottom: '100px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>선택하신 집</span>이 맞나요?
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>제품찾기에서 마음에 드는 주택을 찾아보세요.</div>
          <div style={{ width: 'auto', height: '300px', borderRadius: '10px' }}>
            {houseData ? (
              <PlanningHouseCard data={houseData} />
            ) : (
              <button
                style={{
                  width: '50%',
                  borderRadius: '5px',
                  aspectRatio: '5 / 3',
                  overflow: 'hidden',
                  padding: '10px',
                }}
              >
                선택된 집이 없어요.
                <br />
                제품찾기에서 집을 선택해주세요.
              </button>
            )}
          </div>
        </div>

        <div style={{ marginBottom: '150px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>어떻게</span> 사실 건가요?
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>방식을 선택해주세요.</div>
          <div className="row">
            <div className="col-md-4 col-12">
              <SelectBox
                title={'체류형쉼터, 농막'}
                text={'건축 인허가가 필요 없습니다.'}
                value={'hut'}
                data={planningInfo.houseType}
                setData={planningInfo.setHouseType}
                img={'/planningIcons/nongmak.png'}
              />
            </div>
            <div className="col-md-4 col-12">
              <SelectBox
                title={'주택'}
                text={'건축 인허가가 필요합니다.'}
                value={'house'}
                data={planningInfo.houseType}
                setData={planningInfo.setHouseType}
                img={'/planningIcons/house.png'}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '150px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>어디에</span> 지으실 건가요?
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>아직 구매 전이라면 원하시는 위치를 알려주세요.</div>
          <SelectCityBox title={'경기도'} value={'경기도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'강원도'} value={'강원도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'충청북도'} value={'충청북도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'충청남도'} value={'충청남도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'경상북도'} value={'경상북도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'경상남도'} value={'경상남도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'전라북도'} value={'전라북도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'전라남도'} value={'전라남도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
          <SelectCityBox title={'제주도'} value={'제주도'} data={planningInfo.addr} setData={planningInfo.setAddr} />
        </div>

        <div style={{ marginBottom: '150px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>토지 면적</span>을 알려주세요.
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>아직 구매 전이라면 원하시는 면적을 알려주세요.</div>
          <SelectMiniBox title={'50평 이하'} text={'~165㎡'} value={'50'} data={planningInfo.area} setData={planningInfo.setArea} />
          <SelectMiniBox title={'75평 이하'} text={'~248㎡'} value={'75'} data={planningInfo.area} setData={planningInfo.setArea} />
          <SelectMiniBox title={'100평 이하'} text={'~330㎡'} value={'100'} data={planningInfo.area} setData={planningInfo.setArea} />
          <SelectMiniBox title={'125평 이하'} text={'~413㎡'} value={'125'} data={planningInfo.area} setData={planningInfo.setArea} />
          <SelectMiniBox title={'150평 이하'} text={'~496㎡'} value={'150'} data={planningInfo.area} setData={planningInfo.setArea} />
          <SelectMiniBox title={'150평 초과'} text={'496㎡~'} value={'151'} data={planningInfo.area} setData={planningInfo.setArea} />
        </div>

        <div style={{ marginBottom: '150px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>토지 경사도</span> 상태는 어떤가요?
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>대략적인 느낌을 알려주세요.</div>
          <div className="row g-2">
            <div className="col-md-4 col-12">
              <SelectBox
                title={'평평함'}
                text={'토목공사가 필요 없습니다.'}
                value={'flat'}
                data={planningInfo.landCondition}
                setData={planningInfo.setLandCondition}
                img={'planningIcons/flat.png'}
              />
            </div>
            <div className="col-md-4 col-12">
              <SelectBox
                title={'조금 경사짐'}
                text={'토목공사가 필요합니다.'}
                value={'SlightlySloped'}
                data={planningInfo.landCondition}
                setData={planningInfo.setLandCondition}
                img={'planningIcons/slope.png'}
              />
            </div>
            <div className="col-md-4 col-12">
              <SelectBox
                title={'많이 경사짐'}
                text={'비용이 더 많이 소요됩니다.'}
                value={'SteeplySloped'}
                data={planningInfo.landCondition}
                setData={planningInfo.setLandCondition}
                img={'planningIcons/veryslope.png'}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '150px' }}>
          <div
            style={{
              fontSize: '25px',
              fontWeight: '600',
            }}
          >
            <span style={{ color: '#314FC0' }}>토지 진입로</span> 상태는 어떤가요?
          </div>
          <div style={{ fontSize: '19px', marginBottom: '30px' }}>대략적인 느낌을 알려주세요.</div>
          <div className="row g-2">
            <div className="col-md-4 col-12">
              <SelectBox
                title={'넓음'}
                text={'대형 트레일러가 진입할 수 있어요! 기본 배송비가 소요됩니다.'}
                value={'Wide'}
                data={planningInfo.roadCondition}
                setData={planningInfo.setRoadCondition}
                img={'planningIcons/wide.png'}
              />
            </div>
            <div className="col-md-4 col-12">
              <SelectBox
                title={'조금 좁음'}
                text={'차량 두대 정도가 들어갈 수 있어요! 추가 트럭 및 인력이 필요합니다.'}
                value={'Narrow'}
                data={planningInfo.roadCondition}
                setData={planningInfo.setRoadCondition}
                img={'planningIcons/nerrow.png'}
              />
            </div>
            <div className="col-md-4 col-12">
              <SelectBox
                title={'많이 좁음'}
                text={'1톤 트럭이 겨우 들어가요! 현장건축이 필요합니다.'}
                value={'VeryNarrow'}
                data={planningInfo.roadCondition}
                setData={planningInfo.setRoadCondition}
                img={'planningIcons/verynerrow.png'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="py-5 sticky-top">
          <PriceBox
            houseType={planningInfo.houseType}
            landCondition={planningInfo.landCondition}
            roadCondition={planningInfo.roadCondition}
            addr={planningInfo.addr}
            area={planningInfo.area}
            house={houseData}
          />
          <div
            className="button"
            style={{
              width: '95%',
              height: 'auto',
              borderRadius: '10px',
              padding: '10px',
              margin: '5% 0 0 10px',
              backgroundColor: '#314FC0',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              textAlign: 'center',
              wordBreak: 'keep-all',
            }}
            onClick={submit}
          >
            다음 단계로 가보기( 1 / 2 )
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '330',
              textAlign: 'center',
              margin: '10px 0',
            }}
          >
            본 계약 전에는 요금이 청구되지 않습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
