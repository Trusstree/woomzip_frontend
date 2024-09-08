'use client';

import React, { useCallback, useEffect, useState } from 'react';
import SelectBoxApp from '@/app/planning/application/_components/SelectBoxApp';
import { useRouter, useSearchParams } from 'next/navigation';
import { alertError, alertSuccess } from '@/lib/alertUtil';
import { postPlanning } from '@/actions/apis/planningAPI';
import { useUser } from '@/app/_components/ContextSession';

export default function PlanningApplicationClient() {
  const [planningData, setPlanningData] = useState({});
  const [requiredService, setRequiredService] = useState('');
  const [timeline, setTimeline] = useState('');
  const [finance, setFinance] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const params = useSearchParams();
  const router = useRouter();
  const { userContext } = useUser();

  useEffect(() => {
    setPlanningData((oldValues) => ({
      ...oldValues,
      required_service: requiredService,
      timeline: timeline,
      finance: finance,
      name: name,
      contact: contact,
    }));
  }, [requiredService, timeline, finance, name, contact]);

  useEffect(() => {
    const res = {};
    params.forEach((value, key) => {
      res[key] = value;
    });
    setPlanningData({
      ...res,
      auth: {
        is_login: !!userContext,
        access_token: userContext?.at ?? null,
      },
    });
  }, []);

  const submit = useCallback(async () => {
    if (requiredService.length == 0) {
      alertError('입력이 빠져있어요!', "'어떤 도움이 필요하신가요?' 항목이 선택되지 않았어요!");
      return;
    }

    // params.set('required_service', requiredService.toString());

    if (timeline.length == 0) {
      alertError('입력이 빠져있어요!', "'언제 시작하실 계획이신가요?' 항목이 선택되지 않았어요!");
      return;
    }
    if (finance.length == 0) {
      alertError('입력이 빠져있어요!', "'건축비를 위해 도움이 필요하신가요?' 항목이 선택되지 않았어요!");
      return;
    }

    console.log(userContext);
    console.log(planningData);

    const [data, error] = await postPlanning(planningData);
    if (error) {
      console.log(error);
      alertError('에러', '입력값에 문제가 있어요. 새로고침하여 다시 시도해보세요!');
      return;
    }

    console.log(data);
    alertSuccess('성공적으로 등록되었어요!', '제대로 입력되었습니다!');
    router.push('/');
  }, [planningData]);

  return (
    <>
      <div className="row">
        <div className="col-md-8 col-12">
          <div style={{ marginBottom: '150px' }}>
            <div
              style={{
                fontSize: '25px',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              어떤 도움이 필요하신가요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>같이 고민해드릴게요</div>
            <div className="row g-2">
              <SelectBoxApp
                title={'안심 계약'}
                text={'계약과정을 안심할 수 있습니다.'}
                value={'InquiryOnly'}
                data={requiredService}
                setData={setRequiredService}
              />
              <SelectBoxApp
                title={'이해관계자 연결'}
                text={'건축사, 토목사 등을 이어드립니다.'}
                value={'ConnectwithCompany'}
                data={requiredService}
                setData={setRequiredService}
              />
              <SelectBoxApp
                title={'통합 패키지'}
                text={'모든 과정을 밀착 관리합니다.'}
                value={'FullService'}
                data={requiredService}
                setData={setRequiredService}
              />
            </div>
          </div>

          <div style={{ marginBottom: '150px' }}>
            <div
              style={{
                fontSize: '25px',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              언제 시작하실 계획이신가요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>대략적인 기간을 알려주세요</div>
            <div className="row g-2">
              <SelectBoxApp
                title={'최대한 빠르게'}
                text={'4~10주 내'}
                value={'ASAP'}
                data={timeline}
                setData={setTimeline}
              />
              <SelectBoxApp
                title={'1년 이내'}
                text={'12주 내'}
                value={'Within1Year'}
                data={timeline}
                setData={setTimeline}
              />
              <SelectBoxApp
                title={'계획 없음'}
                text={'견적만 알아보기'}
                value={'NoPlan'}
                data={timeline}
                setData={setTimeline}
              />
            </div>
          </div>

          <div style={{ marginBottom: '150px' }}>
            <div
              style={{
                fontSize: '25px',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              건축비를 위해 도움이 필요하신가요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>은행권 대출을 연계해드립니다</div>
            <div className="row g-2">
              <SelectBoxApp
                title={'필요 없습니다.'}
                text={'스스로 확보하겠습니다.'}
                value={'Self-funded'}
                data={finance}
                setData={setFinance}
              />
              <SelectBoxApp
                title={'고민 중입니다.'}
                text={'연계 서비스를 확인해보겠습니다.'}
                value={'InterestedInFundraising'}
                data={finance}
                setData={setFinance}
              />
              <SelectBoxApp
                title={'필요합니다.'}
                text={'금융 서비스에 관심이 있습니다.'}
                value={'HousingGuaranteeFund'}
                data={finance}
                setData={setFinance}
              />
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
              이름과 전화번호를 알려주세요!
              <br />
              <span style={{ color: '#314FC0' }}>최대한 빠르게 </span>
              연락드리겠습니다.
            </div>
            <div className="col-md-4 col-12">
              <div>이름</div>
              <input
                style={{
                  width: '100%',
                  border: '1px solid #314FC0',
                  borderRadius: '5px',
                  backgroundColor: '#F5F7FF',
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-md-8 col-12">
              <div>전화번호</div>
              <input
                style={{
                  width: '100%',
                  border: '1px solid #314FC0',
                  borderRadius: '5px',
                  backgroundColor: '#F5F7FF',
                }}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <button
              onClick={submit}
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
              문의 요청하기
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
    </>
  );
}
