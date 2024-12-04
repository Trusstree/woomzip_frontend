import HeartComponent from '@/components/posts/HeartComponent';
import { getHouseHeartUser, postHouseHeart, postHouseHeartRemove } from '@/actions/apis/heartAPI';
import { detailPriceText } from '@/lib/stringUtil';
import { parseSpecificationInfo } from '@/lib/parseUtil';
import Image from 'next/image';

function BasicData({ src, alt, text }) {
  return (
    <div className="col-4 d-flex" style={{ alignItems: 'center', marginBottom: '15px' }}>
      <Image src={src} alt={alt} width={38} height={38} style={{ width: '22px', height: 'auto' }} />
      <div style={{ fontSize: '14px', marginLeft: '5px', wordBreak: 'keep-all' }}>{text}</div>
    </div>
  );
}

export default function BasicDataList({ pid, houseData, specificationData }) {
  return (
    <div className="row" style={{ margin: '50px 0' }}>
      <div className="col-md-6 col-12" style={{ marginBottom: '20px' }}>
        <div className="d-flex" style={{ alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: '500' }}>{houseData['house_name']}</div>
          <Image
            src={'/houseIcons/safe.png'}
            alt={'safe'}
            width={24}
            height={24}
            style={{ width: '24px', height: '24px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ fontSize: '22px', color: '#314FC0' }}>
          {detailPriceText(houseData['final_price'])}
          <span style={{ fontSize: '20px', color: 'black' }}>
            <span style={{ fontSize: '18px', color: '#666666' }}>(부가세 미포함)</span>
          </span>
        </div>
        <HeartComponent
          heart_id={pid}
          likeCount={houseData['like_count']}
          getHeart={getHouseHeartUser}
          postHeart={postHouseHeart}
          postHeartRemove={postHouseHeartRemove}
          type={'heart'}
        />
      </div>

      <div className="row col-md-6 col-12">
        <BasicData src={'/houseIcons/room1.png'} alt={'room'} text={`${houseData['room_count']}개 침실`} />
        <BasicData src={'/houseIcons/toilet1.png'} alt={'toilet'} text={`${houseData['toilet_count']}개 욕실`} />
        <BasicData
          src={'/houseIcons/pyeong1.png'}
          alt={'pyeong'}
          text={`${houseData['total_floor_area'].toFixed(1)}평`}
        />
        <BasicData src={'/houseIcons/floor.png'} alt={'floor'} text={`${houseData['floor']}층`} />
        <BasicData
          src={'/houseIcons/framework.png'}
          alt={'framework'}
          text={`${parseSpecificationInfo(specificationData['framework'])} 구조`}
        />
        <BasicData
          src={'/houseIcons/pyeong1.png'}
          alt={'area'}
          text={`${houseData['building_area'].toFixed(1)}㎡ 건축면적`}
        />
        <BasicData src={'/houseIcons/warranty.png'} alt={'warranty'} text={`${houseData['warranty']} 보장`} />
        <BasicData
          src={'/houseIcons/duration.png'}
          alt={'duration'}
          text={`완성까지 ${houseData['estimate_duration']}개월`}
        />
        <BasicData src={'/houseIcons/addition.png'} alt={'specificity'} text={`${houseData['specificity_info']}`} />
      </div>
    </div>
  );
}
