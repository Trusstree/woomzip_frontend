'use client';

import { postPlanning } from '@/actions/apis/planningAPI';
import { useUser } from '@/app/_components/ContextSession';
import useQuery from '@/hooks/useQuery';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConfirmComponent() {
  const { getParams } = useQuery();
  const router = useRouter();
  const { userContext } = useUser();
  const [houseData, setHouseData] = useState({});

  useEffect(() => {
    const data = {};
    getParams().forEach((value, key) => {
      data[key] = value;
    });

    data['auth'] = {
      is_login: !!userContext,
      access_token: userContext ? userContext.at : undefined,
    };

    setHouseData(data);
  }, []);

  const submit = async () => {
    const [data, error] = await postPlanning(houseData);
    if (error) {
      console.log(error);
      alertError('새로고침 해주세요!', '문제가 발생했습니다.');
      return;
    }
    console.log(data);
    alertSuccess('문의가 접수되었습니다!', '최대한 빠르게 답변드리겠습니다.');
    router.push('/');
  };

  return (
    <div className="row">
      <div className="row col-md-8 col-12">
        <div className="col-12" style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>1. 기본 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>문의자</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['name']}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>연락처</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['contact']}</div>
            </div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>문의하신 제품</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['house_id']}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-md-5 col-12" style={{ padding: '10px' }}>
              <div>건축방식</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['house_type']}</div>
            </div>
            <div className="col-12" style={{ padding: '10px' }}>
              <div>문의 사항</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>문의사항 들어가는 공간</div>
            </div>
          </div>
        </div>
        <div className="col-12" style={{ margin: '20px 0' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>2. 토지 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 위치</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['addr']}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 면적</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['area']}</div>
            </div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 경사도 상태</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['land_condition']}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>토지 진입로 상태</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['road_condition']}</div>
            </div>
          </div>
        </div>
        <div className="col-12" style={{ margin: '20px 0' }}>
          <div style={{ fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>3. 요청 정보</div>
          <div className="row" style={{ padding: '20px' }}>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>요청 서비스</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['required_service']}</div>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>건축 예상 시기</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['timeline']}</div>
            </div>
            <div className="d-flex justify-content-between col-12 col-md-5" style={{ padding: '10px' }}>
              <div>중요도 기준 </div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{houseData['finance']}</div>
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
              router.back();
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
