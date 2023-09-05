import BasicCard from "@/components/BasicCard";
import BossCard from "@/components/BossCard";
import Footer from "@/components/Footer";
import RouteButton from "@/components/RouteButton";
import Image from 'next/image'

export default function Home() {
  const data = {
    period: "4개월 21일",
    dPrice: "5000만원 이하",
    rate: 4.6,
    like: 4.7,
    office:"하우스팩토리",
    officeURL: "/",
    builder:"하우스팩토리",
    builderURL:"/"
  }

  const resultData = [
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
    {src:"/LuxuryHouse.png", price:"5억 1000만원", period:"5개월 8일", rate:4.6},
  ]

  const number = 6;

  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>나만의 럭셔리 하우스</h5>
        <h2 className='fw-bold text-start'>해당 설계를 통해 <span style={{color:"#1F74F4"}}>총 {number}명의 건축주</span>가 건축을 진행하였어요!</h2>

        <div className="my-5">
          <div className='row w-100'>
            <div className='col-5 d-flex flex-column justify-content-center'>
              <h2 className='py-3 fw-bold'>이 건물의 평균 건축비용은<br/> ~만원이에요!</h2>
              <ul className='py-1'>
                <li><span className='fs-5'>평균 시공시간: {data.period}</span></li>
                <li><span className='fs-5'>평균-최고 비용 차이: {data.dPrice}</span></li>
                <li><span className='fs-5'>평균 트러스 평점 : {data.rate}/5.0</span></li>
                <li><span className='fs-5'>건축주 만족도 : {data.like}/5.0</span></li>
              </ul>
              <ul className='py-1'>
                <li><span className='fs-5'>담당 건축사사무소 : {data.office}</span></li>
                <li><span className='fs-5'>담당 시공사 : {data.builder}</span></li>
              </ul>

              <div className="d-flex justify-content-around">
              <RouteButton url={"/service4"}>장바구니 넣기</RouteButton>
                <RouteButton url={"/service5"}>건축 문의하기</RouteButton>
              </div>
            </div>

            <div className='col-7'>
              <div className="m-3">
                <div className="mx-1 px-3 btn btn-outline-secondary rounded-lg">
                  외부
                </div>
                <div className="mx-1 px-3 btn btn-outline-secondary rounded-lg">
                  내부
                </div>
              </div>

              <div className="d-flex justify-content-center">

                <Image
                  className={`styles.logo`}
                  src="/LuxuryHouse.png"
                  alt="Truss Logo"
                  width={488}
                  height={400}
                  priority
                />
                <div className="d-flex flex-column justify-content-around">
                  <Image
                    className={`styles.logo`}
                    src="/LuxuryHouse.png"
                    alt="Truss Logo"
                    width={244}
                    height={200}
                    priority
                  />
                  <Image
                    className={`styles.logo`}
                    src="/LuxuryHouse.png"
                    alt="Truss Logo"
                    width={244}
                    height={200}
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="my-5">
          <div className='fw-bold text-start' style={{color:"#1F74F4"}}>총 {number}명의 건축주가 참여한</div>
          <h4 className='fw-bold text-start'>해당 설계를 이용한 실제 건축주들의 <span style={{color:"#1F74F4"}}>결과물</span>을 확인해보세요!</h4>
          <div className="row g-4 d-flex justify-content-between">
            {
            resultData.map((e, i)=>(
              <div className="col-4" key={i}>
                <BasicCard
                  src={e.src}
                  className="p-0 w-100 h-100">
                  <div>건축비용: {e.price}</div>
                  <div>건축기간: {e.period}</div>
                  <div>건축주 만족도: {e.rate}/5.0</div>
                </BasicCard>
              </div>
            ))
            }
          </div>
          <div className="my-5 d-flex justify-content-end">
            <label style={{color:"#1F74F4"}} className="me-3">사진을 넘어서 마감, 하자, 구조 등<br/>직접 두 눈으로 보고 결정하세요!</label>
            <RouteButton url={"/zipduri"}>집들이 요청하기</RouteButton>
          </div>
        </div>

        <div className="my-5">
          <div className='fw-bold text-start' style={{color:"#1F74F4"}}>나만의 럭셔리 하우스의</div>
          <h4 className='fw-bold text-start'>담당 <span style={{color:"#1F74F4"}}>시공사 정보확인</span>을 통해 신뢰할 만한지 판단하세요!</h4>
          <BossCard url={""} src={"/boss.png"} className={"w-100"}></BossCard>
        </div>
      </div>

      <Footer page={"세부정보 보기"} />
    </main>
  )
}