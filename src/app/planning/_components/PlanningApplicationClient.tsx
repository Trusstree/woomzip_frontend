'use client';

import React, { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { alertError } from '@/lib/alertUtil';
import usePlanningInfo from '@/app/planning/_store/planningInfo';
import PlanningSelectBox from '@/app/planning/_components/PlanningSelectBox';

export default function PlanningApplicationClient() {
  const searchParams = useSearchParams();
  const planningInfo = usePlanningInfo();

  const submit = useCallback(async () => {
    const params = new URLSearchParams(searchParams);

    if (planningInfo.requiredService.length == 0) {
      alertError('어떤 도움이 필요하신지 알려주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.timeline.length == 0) {
      alertError('건축 일정을 알려주세요!', '모든 항목에 대해 선택해야 합니다.');
      return;
    }

    if (planningInfo.finance.length == 0) {
      alertError(
        '가성비, 완성도, 신뢰성 중 어떤 항목을 가장 중요하게 생각하는지 알려주세요!',
        '모든 항목에 대해 선택해야 합니다.',
      );
      return;
    }

    if (planningInfo.name.length == 0) {
      alertError('이름을 입력해주세요!', '');
      return;
    }

    if (planningInfo.contact.length == 0) {
      alertError('전화번호를 입력해주세요!', '');
      return;
    }
    planningInfo.setPage('confirm');
    scrollTo({ top: 0 });
  }, [planningInfo]);

  return (
    <>
      <div className="row">
        <div className="col-md-8 col-12">
          <div style={{ marginBottom: '150px' }}>
            <div
              style={{
                fontSize: '25px',
                fontWeight: '600',
              }}
            >
              어떤 도움이 필요하신가요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>원하시는 도움에 따라 고민해드릴게요.</div>
            <div className="row g-2">
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'단순 문의'}
                  text={'제품이나 과정이 궁금해요!'}
                  value={'InquiryOnly'}
                  data={planningInfo.requiredService}
                  setData={planningInfo.setRequiredService}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'상세 견적서 요청'}
                  text={'자세한 상담을 통해 정확한 견적을 알려드려요!'}
                  value={'ConnectwithCompany'}
                  data={planningInfo.requiredService}
                  setData={planningInfo.setRequiredService}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'통합 안심 서비스'}
                  text={'안심문의, 안심계약, 안심지불, 안심AS 서비스를 원해요!'}
                  value={'FullService'}
                  data={planningInfo.requiredService}
                  setData={planningInfo.setRequiredService}
                  width={'100%'}
                  height={'130px'}
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
              언제 시작하실 계획이신가요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>대략적인 기간을 알려주세요</div>
            <div className="row g-2">
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'최대한 빠르게'}
                  text={'4~12주 이내'}
                  value={'ASAP'}
                  data={planningInfo.timeline}
                  setData={planningInfo.setTimeline}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'조금 여유가 있어요.'}
                  text={'4~8개월 이내'}
                  value={'Within1Year'}
                  data={planningInfo.timeline}
                  setData={planningInfo.setTimeline}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'고민 중이에요.'}
                  text={'아직 모르겠어요.'}
                  value={'NoPlan'}
                  data={planningInfo.timeline}
                  setData={planningInfo.setTimeline}
                  width={'100%'}
                  height={'130px'}
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
              건축에서 무엇을 가장 중요하게 생각하시나요?
            </div>
            <div style={{ fontSize: '19px', marginBottom: '30px' }}>당신의 생각이 궁금합니다.</div>
            <div className="row g-2">
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'가성비'}
                  text={'가격이 가장 중요합니다.'}
                  value={'Self-funded'}
                  data={planningInfo.finance}
                  setData={planningInfo.setFinance}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'완성도'}
                  text={'높은 완성도와 자재가 중요합니다.'}
                  value={'InterestedInFundraising'}
                  data={planningInfo.finance}
                  setData={planningInfo.setFinance}
                  width={'100%'}
                  height={'130px'}
                />
              </div>
              <div className="col-md-4 col-12">
                <PlanningSelectBox
                  title={'신뢰도'}
                  text={'믿을 수 있는 업체인지가 중요합니다.'}
                  value={'HousingGuaranteeFund'}
                  data={planningInfo.finance}
                  setData={planningInfo.setFinance}
                  width={'100%'}
                  height={'130px'}
                />
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
                value={planningInfo.name}
                onChange={(e) => {
                  planningInfo.setName(e.target.value);
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
                value={planningInfo.contact}
                onChange={(e) => {
                  planningInfo.setContact(e.target.value);
                }}
              />
            </div>
            <div className="col-12">
              <div>추가 문의사항</div>
              <textarea
                style={{
                  width: '100%',
                  height: '100px',
                  border: '1px solid #314FC0',
                  borderRadius: '5px',
                  backgroundColor: '#F5F7FF',
                }}
                value={planningInfo.text}
                onChange={(e) => {
                  planningInfo.setText(e.target.value);
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
              다음 단계로 가보기(2/3)
            </button>
            <button
              onClick={() => {
                planningInfo.setPage('house');
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
              뒤로 가기
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
