import Image from 'next/image';
import RouteLink from '@/app/_components/RouteLink';

const exampleUserData = {
  phoneNumber: '0507-1369-6158',
  woomzip: '가입',
  year: '11.7년',
  woomzipDuration: '0.7년',
  houses: '7개',
};

export default function CompanyDataList({ pid, houseData, userData }) {
  return (
    <div style={{ margin: '140px 0 120px 0' }}>
      <div style={{ fontSize: '22px', marginBottom: '25px', fontWeight: '500' }}>
        전문 제작사가 책임지고 제작합니다.
      </div>

      <div className="row" style={{ marginBottom: '15px', fontSize: '15px' }}>
        <div className="col-md-2 col-12">
          <Image
            src={userData?.['user_img_url'] || '/blur_image.png'}
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
              marginTop: '15px',
            }}
          />
        </div>
        <div className="col-md-5 col-12">
          <div className="d-flex" style={{ fontSize: '20px', marginTop: '15px', alignItems: 'center' }}>
            <div style={{ fontSize: '20px', marginRight: '5px', fontWeight: '500' }}>
              {houseData['seller_nickname']}
            </div>
            <Image
              src={'/houseIcons/safe.png'}
              alt={'safe'}
              width={23}
              height={23}
              style={{ width: '23px', height: '23px' }}
            />
          </div>
          <div
            style={{
              maxHeight: '80px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              lineHeight: '1.5em',
            }}
          >
            {userData?.one_line_introduce}
          </div>
          <div className="row" style={{ marginTop: '15px' }}>
            <div className="row col-12 ">
              <div className="col-md-3 col-4">대표</div>
              <div className="col-md-9 col-8" style={{ fontWeight: '500' }}>
                {userData?.name}
              </div>
            </div>
            <div className="row col-12">
              <div className="col-md-3 col-4">전화번호</div>
              <div className="col-md-9 col-8" style={{ fontWeight: '500' }}>
                {exampleUserData.phoneNumber}
              </div>
            </div>
            <div className="row col-12">
              <div className="col-md-3 col-4">주소</div>
              <div className="col-md-9 col-8" style={{ fontWeight: '500' }}>
                {userData?.addr}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-0"></div>
        <div className="col-md-4 col-12">
          <div className="row" style={{ marginTop: '15px' }}>
            <div className="col-6" style={{ padding: '10px' }}>
              <div>움집 안심 서비스</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{exampleUserData.woomzip}</div>
            </div>

            <div className="col-6" style={{ padding: '10px' }}>
              <div>업력</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{exampleUserData.year}</div>
            </div>
            <div className="col-6" style={{ padding: '10px' }}>
              <div>움집 등록기간</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{exampleUserData.woomzipDuration}</div>
            </div>
            <div className="col-6" style={{ padding: '10px' }}>
              <div>등록 제품</div>
              <div style={{ fontSize: '18px', fontWeight: '500' }}>{exampleUserData.houses}</div>
            </div>
          </div>
          <RouteLink href={`/mypage/${houseData['fk_seller_id']}`} styles={{ float: 'right', marginTop: '15px' }}>
            <div style={{ fontSize: '16px' }}>제작사 프로필 더보기</div>
          </RouteLink>
        </div>
      </div>
    </div>
  );
}
