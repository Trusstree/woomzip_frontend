import BasicCard from '@/components/BasicCard'
import HorizontalScroll from '@/components/HorizontalScroll'
import RouteButton from '@/components/RouteButton'

type DesignData = {
  title: string
  src: string
  desc: string
}

export default function Home() {

  const data = [
    {title: "자연품은 작은 주택", src:"/NaturalHouse.png", desc:"자연과 함께하는 주택"},
    {title: "나만의 럭셔리 하우스", src:"/LuxuryHouse.png", desc:"휘황찬란한 멋진 하우스"},
    {title: "네모난 해뜨는 집", src:"/NemoSunriseHouse.png", desc:"해가 잘 보이는 집"},
    {title: "네모 블럭블럭 주택", src:"/NemoBlockHouse.png", desc:" 사각형의 철학이 담긴 주택"},
    {title: "피라미드", src:"/Pyramid.PNG", desc:"고대 이집트인들의 건축물"},
    {title: "뉴질랜드 조립식 주택", src:"/NewZealandMiniHouse.png", desc:"뉴질랜드식 초소형 주택"},
  ] as DesignData[];

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
            <HorizontalScroll className='w-50'>
              {data.map((e, i)=>(
                <BasicCard key={i} src={e.src} width={300} height={300} title={e.title} className="w-100">
                  {e.desc}
                </BasicCard>
              ))}
            </HorizontalScroll>
          </div>
        </div>
      </div>
    </main>
  )
}
