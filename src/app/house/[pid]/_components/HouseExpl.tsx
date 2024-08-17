'use client';

import RowText from '@/app/house/[pid]/_components/RowText';
import RowTextReverse from '@/app/house/[pid]/_components/RowTextReverse';
import HalfRowText from '@/app/house/[pid]/_components/HalfRowText';
import useQuery from '@/hooks/useQuery';
import { parseSpecificationInfo } from '@/lib/parseUtil';
import { detailPriceText } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import ReviewList from '@/app/mypage/[uid]/_components/_company/ReviewListCompany';

export default function HouseExpl({
  pid,
  deliveryData,
  houseData,
  specificationData,
  optionData,
  userData,
  reviewData,
}) {
  const { createQueryString } = useQuery();
  const router = useRouter();
  const gyeonjeokLink = `${'/planning'}?${createQueryString('house_id', pid.toString())}`;

  const elementA = useRef<HTMLDivElement>(null);
  const onMoveBoxA = () => {
    elementA.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const elementB = useRef<HTMLDivElement>(null);
  const onMoveBoxB = () => {
    elementB.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const elementC = useRef<HTMLDivElement>(null);
  const onMoveBoxC = () => {
    elementC.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const elementD = useRef<HTMLDivElement>(null);
  const onMoveBoxD = () => {
    elementD.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* 상품 네비게이션
      <div className={styles.navContainer}>
        <div className="d-flex justify-content-between">
          <div className="btn" onClick={onMoveBoxA}>
            기본 정보
          </div>
          <div className="btn" onClick={onMoveBoxB}>
            상세 정보
          </div>
          <div className="btn" onClick={onMoveBoxC}>
            후기
          </div>
          <div className="btn" onClick={onMoveBoxD}>
            배송, 가격
          </div>
        </div>
      </div> */}

      {/* 상세 정보 */}
      <div ref={elementA} className="w-full h-screen relative flex flex-col" style={{ marginTop: '50px' }}>
        <div className="row g-5">
          <HalfRowText name={'침실'} data={`${houseData['room_count']}개`} />
          <HalfRowText name={'욕실'} data={`${houseData['toilet_count']}개`} />
          <HalfRowText name={'실평수'} data={`${houseData['total_floor_area'].toFixed(1)}평`} />
          <HalfRowText name={'건축면적'} data={`${houseData['building_area'].toFixed(1)}㎡`} />
          <HalfRowText name={'소요기간'} data={`${houseData['estimate_duration']}개월`} />
          <HalfRowText name={'AS보증'} data={houseData['warranty']} />
          <HalfRowText name={'골조'} data={parseSpecificationInfo(specificationData['framework'])} />
          <HalfRowText name={'특이사항'} data={houseData['specificity_info']} />
        </div>
      </div>
      <hr style={{ margin: '60px 0' }} />
      <div
        className="btn"
        style={{ fontSize: '16px', padding: '0' }}
        onClick={() => {
          router.push(`/mypage/${houseData['fk_seller_id']}`);
        }}
      >
        <span>
          <img
            className={'m-0 align-self-center'}
            src={userData?.['user_img_url'] || 'blur_image.png'}
            alt={`profile`}
            width={30}
            height={30}
            style={{
              objectFit: 'cover',
              borderRadius: '90px',
              width: '35px',
              height: '35px',
            }}
          />
        </span>
        <span style={{ paddingLeft: '10px', fontWeight: '600' }}>{houseData['seller_nickname']}</span>
      </div>
      <div className="row">
        <div
          style={{
            fontSize: '15px',
            marginTop: '40px',
            fontWeight: '350',
          }}
          dangerouslySetInnerHTML={{ __html: houseData['house_explanation'] }}
        />
      </div>
      <hr style={{ margin: '60px 0' }} />

      {/* 배송 정보 */}
      <div ref={elementD}>
        <div
          className="col-12"
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#F8F8F9',
            borderRadius: '5px',
            padding: '10px',
            margin: '15px 0',
            fontSize: '14px',
          }}
        >
          배송 비용은 배송 위치와 진입 환경에 따라 측정됩니다.
        </div>
        <div>
          <div style={{ margin: '50px 0' }}>
            <RowText name={'기본 배송비'} data={'미포함(조건에 따라 상이)'} />
            <RowText name={'배송불가 지역'} data={deliveryData} />
          </div>
          <div className="card" style={{ width: '100%', padding: '10px', borderColor: '#314FC0' }}>
            <div style={{ fontSize: '14px' }}>
              토지 위치와 진입 환경에 따라{' '}
              <span style={{ color: '#314FC0' }}>배송비가 최대 2.5배 추가될 수 있어요!</span>
              <br />
              <span
                className="btn"
                onClick={() => {
                  router.push(gyeonjeokLink);
                }}
                style={{
                  backgroundColor: '#314FC0',
                  color: 'white',
                  padding: '2px',
                  fontSize: '14px',
                }}
              >
                내 집짓기 길잡이, AI 타잔
              </span>
              과 내 예상 배송비용을 꼭 확인해보세요!
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: '60px 0' }} />

      {/* 가격 정보 */}
      <div ref={elementD}>
        <div
          className="col-12"
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#F8F8F9',
            borderRadius: '5px',
            padding: '10px',
            margin: '15px 0',
            fontSize: '14px',
          }}
        >
          <span style={{ color: '#314FC0' }}>움집</span>의 모든 제품과 옵션에는 원칙적으로 제작 도중 추가비용이 발생하지
          않으니, 안심하세요!
          <br />
          <span style={{ fontSize: '13px' }}>(단, 소비자의 변경 요청사항에 따른 추가비용 제외)</span>
        </div>
        <div style={{ margin: '50px 0' }}>
          <div>
            <RowTextReverse name={'기본 가격'} data={detailPriceText(houseData['final_price'])} />
            <RowTextReverse name={'기본 부가세(10%)'} data={detailPriceText(houseData['final_price'] / 10)} />
            <div
              style={{
                margin: '30px 0 0 12px',
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              추가가능 옵션
            </div>
            {optionData &&
              optionData.map((e, i) => (
                <div key={i}>
                  <RowTextReverse name={e['option_product_name']} data={detailPriceText(e['option_product_price'])} />
                </div>
              ))}
            <div className="container" style={{ height: '30px' }}></div>
          </div>

          <div>
            <div className="card" style={{ width: '100%', padding: '10px', borderColor: '#314FC0' }}>
              <div style={{ fontSize: '14px' }}>
                고지된 비용에 제품 제작을 제외한 부대 비용은 포함되어 있지 않아요.
                <br />
                인허가, 토목공사, 기초공사, 각종 인입 공사, 보험, 세금 등 지금 보고 있는 비용에서{' '}
                <span style={{ color: '#314FC0' }}>평균 약 30%가 추가되고 있어요!</span>
                <br />
                <span
                  className="btn"
                  onClick={() => {
                    router.push(gyeonjeokLink);
                  }}
                  style={{
                    backgroundColor: '#314FC0',
                    color: 'white',
                    padding: '2px',
                    fontSize: '14px',
                  }}
                >
                  내 집짓기 길잡이, AI 타잔
                </span>
                과 내 예상 총비용을 꼭 확인해보세요!
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: '60px 0' }} />

      {/* 제품 사양 */}
      <div ref={elementB} className="w-full h-screen relative flex flex-col" style={{ margin: '50px 0' }}>
        <div
          className="col-12"
          style={{
            width: '100%',
            border: 'none',
            backgroundColor: '#F8F8F9',
            borderRadius: '5px',
            padding: '10px',
            margin: '15px 0',
            fontSize: '14px',
          }}
        >
          어떻게 만들어졌는지 상세 재료를 확인해보세요!
        </div>
        <div style={{ margin: '50px 0' }}>
          <div style={{ fontSize: '16px', marginBottom: '20px' }}>
            {parseSpecificationInfo(specificationData['specification_description'])}
          </div>
          <RowText name={'골조구조'} data={parseSpecificationInfo(specificationData['framework'])} />
          <RowText name={'외장재'} data={parseSpecificationInfo(specificationData['exterior_material'])} />
          <RowText name={'지붕재'} data={parseSpecificationInfo(specificationData['roofing_material'])} />
          <RowText name={'단열재'} data={parseSpecificationInfo(specificationData['insulation_material'])} />
          <RowText name={'내장재'} data={parseSpecificationInfo(specificationData['interior_material'])} />
          <RowText name={'창호'} data={parseSpecificationInfo(specificationData['window'])} />
          <RowText name={'난방'} data={parseSpecificationInfo(specificationData['heating'])} />
          <RowText name={'기본가구'} data={parseSpecificationInfo(specificationData['furniture'])} />
          <RowText name={'주방'} data={parseSpecificationInfo(specificationData['kitchen'])} />
          <RowText name={'화장실'} data={parseSpecificationInfo(specificationData['toilet'])} />
          <RowText name={'조명'} data={parseSpecificationInfo(specificationData['lighting'])} />
          <RowText name={'기타'} data={parseSpecificationInfo(specificationData['etc_info'])} />
        </div>
      </div>
      <hr />

      <div ref={elementC} className="w-full h-screen relative flex flex-col" style={{ marginTop: '50px' }}>
        <div style={{ marginBottom: '60px' }}>
          <ReviewList
            uid={houseData['fk_seller_id']}
            review={reviewData?.['houseReview'] || []}
            rating={reviewData?.['averageRating'] || 0.0}
            url={`/mypage/${houseData['fk_seller_id']}/review`}
          />
        </div>
      </div>
    </>
  );
}
