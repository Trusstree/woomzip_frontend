'use client';

import { useRouter } from 'next/navigation';
import Col6Button from '@/app/inquire/_components/Col6Button';
import Col3Button from '@/app/inquire/_components/Col3Button';
import Col4Button from '@/app/inquire/_components/Col4Button';
import useInquireproductInfo from '@/app/inquire/_store/inquireProductInfo';
import useQueryString from '@/hooks/useQueryString';
import { useCallback, useEffect } from 'react';
import { getProduct } from '@/actions/apis2/productAPI';
import { isNumber } from '@/lib/validator';
import { alertError } from '@/lib/alertUtil';
import Image from '@/components/ImageFallback';

export default function Inquireproduct() {
  const router = useRouter();
  const { getParams } = useQueryString();
  const {
    productData,
    isLandOwner,
    purpose,
    location,
    landArea,
    landSlope,
    landAccess,
    setProductData,
    setIsLandOwner,
    setPurpose,
    setLocation,
    setLandArea,
    setLandSlope,
    setLandAccess,
  } = useInquireproductInfo();

  const goNextPage = useCallback(() => {
    router.push('/inquire/service');
  }, []);

  // 쿼리스트링에 product_id 가 있다면 집 데이터를 받아와야 함
  useEffect(() => {
    (async () => {
      const product_id = getParams().get('product_id');
      if (!isNumber(product_id)) return;
      const [data, error] = await getProduct(Number(product_id));
      if (error) {
        alertError('집 데이터를 불러올 수 없습니다.', '서버에 문제가 생겨 집 데이터를 불러오지 못했습니다.');
        return;
      }
      setProductData(data.payload);
    })();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '61px', width: '100%' }}></div>
      <div style={{ width: '100%', padding: '50px 0' }}>
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              fontSize: '30px',
              fontWeight: 600,
              wordBreak: 'keep-all',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            더 나은 답변을 위해 몇 가지 질문에 답을 해주세요.
          </p>
          <p style={{ marginBottom: '100px' }}>편하게 답변해주시면 됩니다.</p>

          {/* 토지 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>토지가 이미 있으신가요?</h2>
            <Col6Button
              title={'네, 있습니다.'}
              text={'제품을 설치할 토지의 조건을 알려주세요.'}
              value={true}
              data={isLandOwner}
              setData={setIsLandOwner}
            />
            <Col6Button
              title={'아니요, 없습니다.'}
              text={'제품을 설치할 토지의 조건을 알려주세요.'}
              value={false}
              data={isLandOwner}
              setData={setIsLandOwner}
            />
          </div>

          {/* 인허가 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>어떻게 사실건가요?</h2>
            <Col6Button
              title={'주택'}
              text={'일반적인 단독주택 건축과정입니다. 인허가가 필요합니다.'}
              value={'HOUSE'}
              data={purpose}
              setData={setPurpose}
            />
            <Col6Button
              title={'체류형쉼터, 농막'}
              text={'농지 등에 설치 후 신고하는 세컨하우스 방식입니다. 인허가가 필요 없습니다.'}
              value={'SHELTER'}
              data={purpose}
              setData={setPurpose}
            />
          </div>

          {/* 위치 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>위치를 알려주세요.</h2>
            <Col3Button title="수도권" value="SEOUL" data={location} setData={setLocation} />
            <Col3Button title="강원도" value="GANGWON" data={location} setData={setLocation} />
            <Col3Button title="충청도" value="CHUNGNAM" data={location} setData={setLocation} />
            <Col3Button title="경상도" value="GYEONGNAM" data={location} setData={setLocation} />
            <Col3Button title="경상도" value="JEONNAM" data={location} setData={setLocation} />
            <Col3Button title="제주도" value="JEJU" data={location} setData={setLocation} />
          </div>

          {/* 면적 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>면적을 알려주세요.</h2>
            <Col3Button title="100평" value="UNDER_100" data={landArea} setData={setLandArea} />
            <Col3Button title="200평" value="UNDER_200" data={landArea} setData={setLandArea} />
            <Col3Button title="300평" value="UNDER_300" data={landArea} setData={setLandArea} />
          </div>

          {/* 경사도 질문 */}
          <div className="row" style={{ width: '100%', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>경사도를 알려주세요.</h2>
            <Col4Button
              title={'평평함'}
              text={'토목공사가 필요 없고, 바로 주택을 설치 가능한 상태입니다.'}
              value={'FLAT'}
              data={landSlope}
              setData={setLandSlope}
            />
            <Col4Button
              title={'조금 경사짐'}
              text={'약간의 평탄화 작업을 거치면 주택을 설치 가능한 상태입니다.'}
              value={'SLIGHT_SLOPE'}
              data={landSlope}
              setData={setLandSlope}
            />
            <Col4Button
              title={'많이 경사짐'}
              text={'제품을 설치하기 위해 땅을 많이 깎아야 합니다.'}
              value={'STEEP_SLOPE'}
              data={landSlope}
              setData={setLandSlope}
            />
          </div>

          {/* 진입로 질문 */}
          <div className="row" style={{ width: '100%' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 600, marginBottom: '10px' }}>진입로 상태를 알려주세요.</h2>
            <Col4Button
              title={'넓음'}
              text={'대형 트레일러가 진입 가능할 정도의 도로폭입니다.'}
              value={'WIDE'}
              data={landAccess}
              setData={setLandAccess}
            />
            <Col4Button
              title={'조금 좁음'}
              text={'차량 두대가 동시에 통과 가능할 정도의 도로폭입니다.'}
              value={'NARROW'}
              data={landAccess}
              setData={setLandAccess}
            />
            <Col4Button
              title={'많이 좁음'}
              text={'1톤 트럭 한대가 지나갈 수 있을 정도의 도로폭입니다.'}
              value={'VERY_NARROW'}
              data={landAccess}
              setData={setLandAccess}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px',
          backgroundColor: 'black',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div className="d-flex justify-content-between">
            <div style={{ marginTop: '25px', color: '#ffffff' }}>{productData && productData.productName}</div>
            <div
              className="btn"
              style={{ backgroundColor: '#ffffff', borderRadius: '50px', marginTop: '15px', padding: '10px 20px' }}
              onClick={goNextPage}
            >
              다음으로
            </div>
          </div>
        </div>
      </div>
      {/* 만약 집 데이터가 있다면 여기서 볼 수 있음 */}
      {productData && (
        <div>
          {productData.productName}
          <Image src={productData.productImageUrl} alt={'선택된 집 사진'} />
        </div>
      )}
    </>
  );
}
