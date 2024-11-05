'use client';

import { parseSpecificationInfo } from '@/lib/parseUtil';
import Image from 'next/image';

export default function DetailDataList({ pid, houseData, specificationData }) {
  const detailData = [
    {
      src: '/houseIcons/framework.png',
      alt: 'framework',
      title: '1.구조',
      text: `${parseSpecificationInfo(specificationData['framework']) ?? '해당사항 없음'}`,
      subtitle: '먼저 제품의 뼈대를 제작하게 됩니다. 이때 뼈대 자재에 따라 경량목과 경량철골 구조로 나뉩니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '2.벽체',
      text: `${parseSpecificationInfo(specificationData['wall']) ?? '해당사항 없음'}`,
      subtitle: '다음으로 뼈대에 벽면을 만듭니다. 판넬, OSB 합판등의 자재가 사용됩니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '3.단열',
      text: `${parseSpecificationInfo(specificationData['insulation_material']) ?? '해당사항 없음'}`,
      subtitle:
        '벽을 세운 후, 단열작업을 시작합니다. 우레탄폼이나 단열자재를 사용하여 지역 단열기준에 맞추어 시공합니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '4.난방',
      text: `${parseSpecificationInfo(specificationData['heating']) ?? '해당사항 없음'}`,
      subtitle:
        '단열 작업 후 바닥에 난방시설을 설치합니다. 전기매트나 온수난방, LPG 등 다양한 난방방식을 선택할 수 있습니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '5.내장',
      text: `${parseSpecificationInfo(specificationData['interior_material']) ?? '해당사항 없음'}`,
      subtitle: '난방작업을 마무리 한 후, 내부 벽면 및 바닥을 마무리합니다. 벽지나 몰딩 등의 내장재를 사용하게 됩니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '6.창호',
      text: `${parseSpecificationInfo(specificationData['window']) ?? '해당사항 없음'}`,
      subtitle:
        '내장 작업 끝에 창문과 대문을 설치합니다. 2중창을 많이 사용하며, 자재 등급에 따라 완성도에 차이가 발생합니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '7.외장',
      text: `${parseSpecificationInfo(specificationData['exterior_material']) ?? '해당사항 없음'}`,
      subtitle:
        '외관을 마무리합니다. 방수포를 씌운 후 세라믹사이딩, 리얼징크, 방부목, 시멘트 등 다양한 자재를 사용하여 완성합니다.',
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '8.지붕',
      text: `${parseSpecificationInfo(specificationData['roofing_material']) ?? '해당사항 없음'}`,
      subtitle: '지붕을 씌웁니다. 일반적으로 리얼징크나 아스팔트 슁글을 많이 이용합니다.',
    },
  ];

  const optionalData = [
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '주방',
      text: `${parseSpecificationInfo(specificationData['kitchen']) ?? '해당사항 없음'}`,
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '화장실',
      text: `${parseSpecificationInfo(specificationData['toilet']) ?? '해당사항 없음'}`,
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'framework',
      title: '기본가구',
      text: `${parseSpecificationInfo(specificationData['furniture']) ?? '해당사항 없음'}`,
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '조명',
      text: `${parseSpecificationInfo(specificationData['lighting']) ?? '해당사항 없음'}`,
    },
    {
      src: '/houseIcons/framework.png',
      alt: 'wall',
      title: '기타',
      text: `${parseSpecificationInfo(specificationData['etc_info']) ?? '해당사항 없음'}`,
    },
  ];

  return (
    <div className="row" style={{ margin: '140px 0' }}>
      <div className="col-12" style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '500' }}>
        {houseData['house_name']}, 이렇게 만들어집니다.
      </div>

      {detailData.map((detail, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-12" style={{ margin: '10px 0' }}>
          <div
            style={{
              padding: '20px',

              borderRadius: '10px',
              fontSize: '16px',
              color: '#555555',
            }}
          >
            <div className="d-flex" style={{ alignItems: 'center' }}>
              {/* <Image
                src={detail.src}
                alt={detail.alt}
                width={38}
                height={38}
                style={{ width: '22px', height: '22px' }}
              ></Image> */}
              <div>{detail.title}</div>
            </div>

            <div style={{ wordBreak: 'keep-all', fontWeight: '500', color: '#111111', margin: '10px 0' }}>
              {detail.text}
            </div>

            <div style={{ fontSize: '14px', wordBreak: 'keep-all' }}>{detail.subtitle}</div>
          </div>
        </div>
      ))}

      <div className="row" style={{ border: '1px solid #314FC0', borderRadius: '10px' }}>
        <div className="col-md-2 col-sm-4 col-6">
          <div className="d-flex" style={{ alignItems: 'center', marginTop: '35px' }}>
            <Image
              src={'/houseIcons/room1.png'}
              alt={'room'}
              width={38}
              height={38}
              style={{ width: '22px', height: 'auto' }}
            ></Image>
            <div style={{ fontSize: '16px', marginLeft: '5px' }}>인테리어</div>
          </div>
        </div>
        {optionalData.map((optional, index) => (
          <div key={index} className="col-md-2 col-sm-4 col-6" style={{ margin: '15px 0' }}>
            <div
              style={{
                color: '#555555',
                fontSize: '16px',
              }}
            >
              <div className="d-flex" style={{ alignItems: 'center' }}>
                <div style={{ marginRight: '5px' }}>{optional.title}</div>
                {/* <Image
              src={optional.src}
              alt={optional.alt}
              width={38}
              height={38}
              style={{ width: '24px', height: '24px' }}
            ></Image> */}
              </div>

              <div
                style={{
                  color: '#111111',
                  fontWeight: '500',
                  wordBreak: 'keep-all',
                  width: '100%',
                  marginTop: '7px',
                }}
              >
                {optional.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
