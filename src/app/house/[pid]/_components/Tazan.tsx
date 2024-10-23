'use client';

import Image from 'next/image';
import useQuery from '@/hooks/useQuery';
import { useRouter } from 'next/navigation';
import { detailPriceText } from '@/lib/stringUtil';

export default function Tazan({ pid, houseData }) {
  const { createQueryString } = useQuery();
  const router = useRouter();
  const gyeonjeokLink = `${'/planning'}?${createQueryString('house_id', pid.toString())}`;

  return (
    <div className="row" style={{ margin: '120px 0' }}>
      <div className="col-12 d-flex" style={{ marginBottom: '15px', alignItems: 'center' }}>
        <Image
          src={'/houseIcons/warning.png'}
          alt={'warning'}
          width={38}
          height={38}
          style={{ width: '22px', height: '22px' }}
        ></Image>
        <div style={{ fontSize: '22px', marginLeft: '10px', wordBreak: 'keep-all' }}>
          잠시만요! 제품가격이 끝이 아닌거 아시죠?
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div style={{ fontSize: '18px', wordBreak: 'keep-all', margin: '15px 0' }}>
          모듈러 주택을 구매한다고 끝나는게 아니에요.
          <div style={{ fontSize: '16px', color: '#555555' }}>
            허가, 토지 공사, 세금 등 지금보고 있는 금액에서 평균적으로{' '}
            <span style={{ color: '#314FC0' }}>25%~35% </span>
            정도 추가돼요.
          </div>
        </div>

        <div style={{ fontSize: '18px', wordBreak: 'keep-all', margin: '20px 0' }}>
          이런 비용을 예상하지 못하고 있다가 갑자기 지출하게 된다면 계획에 차질이 생길 수 밖에 없어요.
          <br />
          <span style={{ color: '#314FC0' }}>꼭 내 예상견적을 계산해보고 시작하세요!</span>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div
          style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', padding: '15px' }}
        >
          <div style={{ fontSize: '20px', marginBottom: '15px' }}>안녕하세요!</div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px', marginBottom: '10px' }}>
            <div style={{ fontSize: '20px' }}>
              당신의 총 예상비용은,
              <br />
              <span style={{ color: '#314FC0' }}>{detailPriceText(houseData['final_price'])}~???원</span>
              <br />
              으로 예상 됩니다.
            </div>
          </div>
          <hr />

          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>주택가격</div>
            <div style={{ fontSize: '14px' }}>{detailPriceText(houseData['final_price'])}</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>배송비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>측량비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>인허가비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>토목공사비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>기초공사비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>전기, 수도 인입비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>보험비</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <div className="d-flex justify-content-between" style={{ lineHeight: '35px' }}>
            <div style={{ fontSize: '16px' }}>세금</div>
            <div style={{ fontSize: '14px' }}>???원</div>
          </div>
          <hr />
          <div
            style={{
              fontSize: '13px',
              textAlign: 'center',
              margin: '10px 0',
              color: '#555555',
              wordBreak: 'keep-all',
            }}
          >
            본 견적은 이해를 돕기 위해 일반적인 상황을 가정한 자가진단 견적이며, 실제 비용과는 다를 수 있습니다.
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
        <div style={{ fontSize: '18px', wordBreak: 'keep-all', margin: '15px 0' }}>
          다행히도 움집에서는 <span style={{ color: '#314FC0' }}>5가지 선택만</span> 하면
          <br />내 총 예상 견적을 알아볼 수 있어요!
        </div>
        <div
          className="btn text-white d-flex justify-content-center align-items-center"
          style={{ backgroundColor: '#314FC0', height: '60px', width: '200px' }}
          onClick={() => {
            router.push(gyeonjeokLink);
          }}
        >
          <span style={{ wordBreak: 'keep-all', fontSize: '16px' }}>
            20초만에 내 예상 견적
            <br />
            자가진단 하기
          </span>
        </div>
      </div>
    </div>
  );
}
