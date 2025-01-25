'use client';

import { postPlanning } from '@/actions/apis/planningAPI';
import { useUser } from '@/components/app/ContextSession';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { useRouter, useSearchParams } from 'next/navigation';
import usePlanningInfo from '@/app/planning/_store/planningInfo';

export default function PlanningConfirmClient() {
  const searchParams = useSearchParams();
  const house_id = Number(searchParams.get('house_id'));
  const router = useRouter();
  const { userContext } = useUser();
  const planningInfo = usePlanningInfo();

  const submit = async () => {
    const houseData = {
      house_id: house_id,
      auth: {
        is_login: !!userContext,
        access_token: userContext ? userContext.at : undefined,
      },
      house_type: planningInfo.houseType,
      area: planningInfo.area,
      addr: planningInfo.addr,
      land_condition: planningInfo.landCondition,
      road_condition: planningInfo.roadCondition,
      required_service: planningInfo.requiredService,
      timeline: planningInfo.timeline,
      finance: planningInfo.finance,
      name: planningInfo.name,
      contact: planningInfo.contact,
      text: planningInfo.text,
    };

    const [data, error] = await postPlanning(houseData);
    if (error) {
      console.log(error);
      alertError('새로고침 해주세요!', '문제가 발생했습니다.');
      return;
    }
    alertSuccess('문의가 접수되었습니다!', '최대한 빠르게 답변드리겠습니다.');
    router.push('/');
  };

  const houseTypeMap = { hut: '체류형쉼터, 농막', house: '주택' };
  const landConditionMap = { Flat: '평평함', SlightlySloped: '조금 경사짐', SteeplySloped: '많이 경사짐' };
  const roadConditionMap = { Wide: '넓음', Narrow: '조금 좁음', VeryNarrow: '많이 좁음' };
  const requiredServiceMap = {
    InquiryOnly: '단순 문의',
    ConnectwithCompany: '상세 견적서 요청',
    FullService: '통합 안심 서비스',
  };
  const timelineMap = { ASAP: '최대한 빠르게', Within1Year: '조금 여유가 있어요.', NoPlan: '고민 중이에요.' };
  const financeMap = { 'Self-funded': '가성비', InterestedInFundraising: '완성도', HousingGuaranteeFund: '신뢰도' };

  return (
    <div className="row">
      <div className="row col-md-8 col-12">
        <div className="col-12" style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>1. 기본 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>문의자</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.name}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>연락처</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.contact}</div>
            </div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>문의하신 제품</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.houseName}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>건축방식</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseTypeMap[planningInfo.houseType]}</div>
            </div>
            <div className="col-12" style={{ padding: '10px' }}>
              <div>문의 사항</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.text}</div>
            </div>
          </div>
        </div>
        <div className="col-12" style={{ margin: '20px 0' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>2. 토지 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 위치</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.addr}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 면적</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{planningInfo.area}㎡</div>
            </div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 경사도 상태</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{landConditionMap[planningInfo.landCondition]}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 진입로 상태</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{roadConditionMap[planningInfo.roadCondition]}</div>
            </div>
          </div>
        </div>
        <div className="col-12" style={{ margin: '20px 0' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>3. 요청 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>요청 서비스</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>
                {requiredServiceMap[planningInfo.requiredService]}
              </div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>건축 예상 시기</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{timelineMap[planningInfo.timeline]}</div>
            </div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>중요도 기준 </div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{financeMap[planningInfo.finance]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="sticky-top row g-1">
          <div className="container" style={{ height: '50px' }}></div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '15px',
            }}
          >
            마지막 단계입니다.
            <br />
            <span style={{ color: '#314FC0' }}>최대한 빠르게 </span>
            연락드리겠습니다.
          </div>
          <button
            onClick={() => {
              submit();
            }}
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              border: 'none',
              padding: '10px',
              marginTop: '10px',
              backgroundColor: '#314FC0',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            해당 정보로 문의 요청합니다.
          </button>
          <button
            onClick={() => {
              planningInfo.setPage('application');
              scrollTo({ top: 0 });
            }}
            style={{
              width: '100%',
              height: '50px',
              borderRadius: '10px',
              border: 'none',
              padding: '10px',
              marginTop: '10px',
              backgroundColor: '#F5F7FF',
              color: '#314FC0',
              fontSize: '18px',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            정보 수정하기
          </button>
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
