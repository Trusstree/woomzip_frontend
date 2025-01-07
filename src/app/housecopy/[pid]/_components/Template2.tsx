import Image from 'next/image';

export default function Template2({ imageData }) {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'black',
        padding: '150px 0',
      }}
    >
      <div>
        <div className="row">
          <div
            className="col-md-6 col-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '90%',
                marginLeft: '5%',
                color: '#ffffff',
                fontSize: 'clamp(25px, 3vw, 27px)',
                fontWeight: '700',
                wordBreak: 'keep-all',
              }}
            >
              이 곳은 2번 템플릿의 첫번째 요소 제목이 들어가는 곳입니다. 두 줄 추천합니다.
            </div>
            <div
              style={{
                width: '90%',
                color: '#ffffff',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '350',
                wordBreak: 'keep-all',
                margin: '30px 0 30px 5%',
              }}
            >
              이 곳은 이 2번 템플릿의 첫번째 요소 설명란입니다. <br /> 제품을 한 번 멋들어지게 설명해보세요. 한 세줄
              추천합니다. 빠진 내용 없이, 만약 이곳에 거실 관련 설명 글이면 거실을 잘 설명해주시면 됩니다. 잘 아시겠죠?
              조금 넘어도 괜찮아요. 근데 너무 많으면 안됩니다. 4줄이 적당해요
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
              <Image
                width={900}
                height={900}
                src={imageData[1]}
                alt={'pic3'}
                style={{ objectFit: 'cover', height: 'auto', width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ margin: '100px 0', padding: '100px 0' }}>
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
              <Image
                width={900}
                height={900}
                src={imageData[2]}
                alt={'pic3'}
                style={{ objectFit: 'cover', height: 'auto', width: '100%', aspectRatio: '1' }}
              />
            </div>
          </div>
          <div
            className="col-md-6 col-12 order-md-2 order-1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '90%',
                marginLeft: '3%',
                color: '#ffffff',
                fontSize: 'clamp(25px, 3vw, 27px)',
                fontWeight: '700',
                wordBreak: 'keep-all',
              }}
            >
              이 곳은 2번 템플릿의 두 번째 요소 제목이 들어가는 곳입니다. 두 줄 추천합니다.
            </div>
            <div
              style={{
                width: '90%',
                color: '#ffffff',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '350',
                wordBreak: 'keep-all',
                margin: '30px 0 30px 3%',
              }}
            >
              이 곳은 이 2번 템플릿의 첫번째 요소 설명란입니다. <br /> 제품을 한 번 멋들어지게 설명해보세요. 한 세줄
              추천합니다. 빠진 내용 없이, 만약 이곳에 거실 관련 설명 글이면 거실을 잘 설명해주시면 됩니다. 잘 아시겠죠?
              조금 넘어도 괜찮아요. 근데 너무 많으면 안됩니다. 4줄이 적당해요
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-md-6 col-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '95%',
                marginLeft: '5%',
                color: '#ffffff',
                fontSize: '27px',
                fontWeight: '700',
                wordBreak: 'keep-all',
              }}
            >
              이 곳은 2번 템플릿의 첫번째 요소 제목이 들어가는 곳입니다. 두 줄 추천합니다.
            </div>
            <div
              style={{
                width: '95%',
                color: '#ffffff',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontWeight: '350',
                wordBreak: 'keep-all',
                margin: '30px 0 30px 5%',
              }}
            >
              이 곳은 이 2번 템플릿의 첫번째 요소 설명란입니다. <br /> 제품을 한 번 멋들어지게 설명해보세요. 한 세줄
              추천합니다. 빠진 내용 없이, 만약 이곳에 거실 관련 설명 글이면 거실을 잘 설명해주시면 됩니다. 잘 아시겠죠?
              조금 넘어도 괜찮아요. 근데 너무 많으면 안됩니다. 4줄이 적당해요
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
              <Image
                width={800}
                height={800}
                src={imageData[3]}
                alt={'pic3'}
                style={{ objectFit: 'cover', height: 'auto', width: '100%', aspectRatio: '1' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
