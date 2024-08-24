import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <Image
          src="/111.webp"
          alt="carousel image"
          width={500}
          height={500}
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '90%',
            color: 'white',
            fontSize: '7vw',
            fontWeight: '500',
          }}
        >
          WOOMZIP
        </div>
      </div>

      {/* <div
        style={{ width: "100%", height: "400px", backgroundColor: "#FAFBFC" }}
      >
        <div
          style={{
            paddingTop: "120px",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "500",
          }}
        >
          전원생활을 고민할 때부터
          <br />내 집을 짓는 순간을 지나
          <br />
          살아가는 삶까지,
          <br />
          움집이 있다면 더욱 즐거워질 거예요.
        </div>
      </div> */}

      <div style={{ width: '100%', backgroundColor: '#FAFBFC' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '100px 0',
          }}
        >
          <div className="col-md-7 col-12">
            <div
              style={{
                fontSize: '48px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              꿈꾸는 삶을 현실로
              <br />
              움집에서 쉽고 간편하게
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '50px',
                width: '10px',
                height: '10px',
                marginTop: '170px',
              }}
            ></div>
            <div
              style={{
                padding: '20px 0',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              든든한 전원생활 파트너
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              전원생활을 고민할 때부터, 내 집을 짓는 순간을 지나, 살아가는 삶까지
              <br />
              움집이 있다면 더욱 즐거워질거에요.
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '100px 0',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                color: 'white',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
              }}
            >
              커뮤니티
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              다른 사람들과
              <br />
              정보 공유
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              즐거운 삶의 순간, 때로는 머리 아픈 고민들
              <br />
              다른 사람들과 나누면 더 좋아질거에요!
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service11.png'}
              alt={'community image'}
              width={500}
              height={500}
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', backgroundColor: '#FAFBFC' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            paddingTop: '100px',
            paddingBottom: '50px',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                color: 'white',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
              }}
            >
              살아보기
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              전원생활을
              <br />
              체험해보세요
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              이 업체에게 내 집을 맡겨도 될까? 우리 가족이 전원생활을 잘 할 수 있을까?
              <br />
              해당 업체가 지은 집에서 살아보며 알아보세요!
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service2.png'}
              alt={'living images'}
              width={500}
              height={500}
              style={{
                width: '100%',
                marginBottom: '50px',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '100px 0',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                color: 'white',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
              }}
            >
              찾아보기
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              찾고 있던 집을
              <br />
              모았어요
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              움집이 당신이 찾던 제품을 40가지 항목으로 데이터화 해두었어요.
              <br />
              다양한 카테고리, 필터링을 통해 빠르게 찾아보세요!
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service3.png'}
              alt={'house finding image'}
              width={500}
              height={500}
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', backgroundColor: '#FAFBFC' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            paddingTop: '100px',
            paddingBottom: '50px',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#314FC0',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                color: 'white',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
              }}
            >
              AI 타잔
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              총 비용을
              <br />
              쉽게 알 수 있어요
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              그래서 총 얼마가 드는데? 라는 질문은 이제 그만!
              <br />
              움집 만의 건축 전문가 AI-타잔이 당신의 총 공사비용을 예측해드립니다.
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/service4.png'}
              alt={'planning ai image'}
              width={500}
              height={500}
              style={{
                width: '100%',
                marginBottom: '50px',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '400px' }}>
        <div
          style={{
            paddingTop: '120px',
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '500',
          }}
        >
          전원생활을 고민할 때부터,
          <br />내 집을 짓는 순간을 지나,
          <br />
          살아가는 삶까지
          <br />
          움집이 있다면 더욱 즐거워질거에요.
        </div>
      </div>

      <div style={{ width: '100%', backgroundColor: '#FAFBFC' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '100px 0',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#E2FFCC',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                color: '#95C844',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
              }}
            >
              움집 팀
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              믿을 수 있는 움집 팀에서
              <br />
              만드는 서비스
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              움집 팀이 궁금하시다면
              <br />
              하단의 회사소개를 참고해주세요
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/team.jpg'}
              alt={'woomzip team image'}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <div
          className="row"
          style={{
            width: '90%',
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '100px 0',
          }}
        >
          <div className="col-md-6 col-12">
            <div
              style={{
                backgroundColor: '#FFCCCC',
                borderRadius: '40px',
                width: '120px',
                height: '40px',
                textAlign: 'center',
                fontSize: '23px',
                fontWeight: '600',
                padding: '5px 0',
                color: '#BD4040',
              }}
            >
              만남
            </div>
            <div
              style={{
                padding: '50px 0',
                fontSize: '40px',
                fontWeight: '600',
                wordBreak: 'keep-all',
              }}
            >
              연락을 기다립니다
            </div>
            <div
              style={{
                paddingBottom: '50px',
                fontSize: '16px',
                fontWeight: '500',
                color: '#B5B5B5',
                wordBreak: 'keep-all',
              }}
            >
              전화번호 : 0507-1369-6158
              <br />
              이메일 : service@woomzip.com
              <br />
              주소 : 서울특별시 동작구 상도로 55길 8, 304호(상도동, 숭실대학교 챌린지스테이션)
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={'https://trussbucketdev.s3.ap-northeast-2.amazonaws.com/icons/map.png'}
              alt={'map image'}
              width={500}
              height={500}
              style={{
                width: '100%',
                objectFit: 'cover',
                height: '500px',
                borderRadius: '10px',
                boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
