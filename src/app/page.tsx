import BasicCard from '@/components/BasicCard'
import HorizontalScroll from '@/components/HorizontalScroll'
import RouteButton from '@/components/RouteButton'

export default function Home() {
  return (
    <main
      style={{backgroundColor:"#E1ECEF"}}>
      <div className={`container py-5 d-flex justify-content-center flex-column align-items-center`}>
        <div className={`row`}>
          <div className={`col-4 d-flex justify-content-center flex-column`}>
            <h5 className='fw-bold text-left ps-3 ms-5' style={{color:"#1F74F4"}}>설계부터 시공사 선정, 혹시 모를 분쟁에<br/> 걱정만 하고 계시진 않나요?</h5>
            <h2 className='fw-bold text-left mt-3 ps-3 ms-5'>행복해지기 위한 건축,</h2>
            <h2 className='fw-bold text-left mb-4 ps-3 ms-5'>이젠 트러스와 즐기세요.</h2>
            <RouteButton url={'/service1'} className="px-5 mx-auto align-self-left">트러스와 건축 시작하기</RouteButton>
          </div>

          <div className={`col-8`}>
            <HorizontalScroll>
              <BasicCard key={1} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={2} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={3} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={4} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={5} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={6} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={7} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={8} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
              <BasicCard key={9} src={"image1.jpg"} title={"Card title"} className="w-100">
                대충 그럴듯한 설명이 담긴 글
              </BasicCard>
            </HorizontalScroll>
          </div>
        </div>
      </div>
    </main>
  )
}
