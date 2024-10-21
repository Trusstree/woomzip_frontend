'use client';

import Image from 'next/image';
import RouteLink from '@/app/_components/RouteLink';

export default function CompanyDataList({ pid, houseData, userData }) {
  return (
    <div style={{ margin: '120px 0' }}>
      <div style={{ fontSize: '22px' }}>제작사 정보</div>
      <div className="row" style={{ marginTop: '15px' }}>
        <div className="row col-md-8 col-12" style={{ marginBottom: '15px' }}>
          <div className="col-4">
            <Image
              src={userData?.['user_img_url'] || 'blur_image.png'}
              alt={`profile`}
              width={200}
              height={200}
              style={{
                objectFit: 'cover',
                borderRadius: '100%',
                aspectRatio: '1',
                width: '100%',
                maxWidth: '150px',
                height: 'auto',
              }}
            />
          </div>
          <div className="col-8">
            <div style={{ fontSize: '20px' }}>{houseData['seller_nickname']}</div>
            <div style={{ fontSize: '14px' }}>{userData?.one_line_introduce}</div>
            <div className="row" style={{ marginTop: '15px' }}>
              <div className="row col-12 " style={{ fontSize: '14px' }}>
                <div className="col-md-3 col-4">대표</div>
                <div className="col-md-9 col-8">{userData?.name}</div>
              </div>
              <div className="row col-12" style={{ fontSize: '14px' }}>
                <div className="col-md-3 col-4">전화번호</div>
                <div className="col-md-9 col-8">0507-1369-6158</div>
              </div>
              <div className="row col-12" style={{ fontSize: '14px' }}>
                <div className="col-md-3 col-4">주소</div>
                <div className="col-md-9 col-8">{userData?.addr}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="row">
            <div className="col-6" style={{ padding: '10px' }}>
              <div style={{ fontSize: '14px' }}>업력</div>
              <div style={{ fontSize: '16px' }}>11.7년</div>
            </div>
            <div className="col-6" style={{ padding: '10px' }}>
              <div style={{ fontSize: '14px' }}>움집 등록기간</div>
              <div style={{ fontSize: '16px' }}>0.7년</div>
            </div>
            <div className="col-6" style={{ padding: '10px' }}>
              <div style={{ fontSize: '14px' }}>등록 제품</div>
              <div style={{ fontSize: '16px' }}>7개</div>
            </div>
            <div className="col-6" style={{ padding: '10px' }}>
              <div style={{ fontSize: '14px' }}>업체 후기</div>
              <div style={{ fontSize: '16px' }}>0개</div>
            </div>
          </div>
          <RouteLink href={`/mypage/${houseData['fk_seller_id']}`} styles={{ float: 'right', marginTop: '15px' }}>
            <div style={{ fontSize: '16px' }}>프로필 더보기</div>
          </RouteLink>
        </div>
      </div>
    </div>
  );
}
