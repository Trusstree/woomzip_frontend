import BasicCard from "@/components/components/BasicCard";
import Footer from "@/components/Footer";

type DesignData = {
  title: string
  src: string
  price: string
}

export default function Home() {
  const data = [
    {title: "자연품은 작은 주택", src:"/NaturalHouse.png", price:"2억 3천만원"},
    {title: "나만의 럭셔리 하우스", src:"/LuxuryHouse.png", price:"5억 2천만원"},
    {title: "네모난 해뜨는 집", src:"/NemoSunriseHouse.png", price:"3억 9천만원"},
    {title: "네모 블럭블럭 주택", src:"/NemoBlockHouse.png", price:"7억원"},
    {title: "피라미드", src:"/Pyramid.PNG", price:"257조원"},
    {title: "뉴질랜드 초소형 조립식 주택", src:"/NewZealandMiniHouse.png", price:"2천만원"},
  ] as DesignData[];

  const building = "단독 주택";

  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>

        <div className="row">
          <div className="col-5">
            <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>32개의 시공사례를 통해</h5>
            <h2 className='fw-bold text-start'>마음에 드는 {building}의 디자인을 마음껏 선택해주세요.</h2>
          </div>

          <div className="col-7 d-flex">
            <div className="mx-3 d-flex flex-column align-items-center" style={{width:"120px"}}>
              <div className="btn py-1 bg-primary text-white rounded-3">가격</div>
              <div className="text-center">2억 1천만원~6억원</div>
            </div>

            <div className="mx-3 d-flex flex-column align-items-center" style={{width:"120px"}}>
              <div className="btn py-1 bg-primary text-white rounded-3">면적</div>
              <div className="text-center">35평~57평</div>
            </div>

            <div className="mx-3 d-flex flex-column align-items-center" style={{width:"120px"}}>
              <div className="btn py-1 bg-primary text-white rounded-3">층수</div>
              <div className="text-center">1층~2층</div>
            </div>

            <div className="mx-3 d-flex flex-column align-items-center" style={{width:"120px"}}>
              <div className="btn py-1 bg-primary text-white rounded-3">디자인</div>
              <div className="text-center">아메리칸 스타일</div>
            </div>

          </div>
        </div>
        
        <div className="row g-4 d-flex justify-content-between">
          {
          data.map((e, i)=>(
            <div className="col-4" key={i}>
              <BasicCard
                src={e.src}
                title={e.title}
                href={"/service4"}
                className="p-0 w-100 h-100">
                {e.price}
              </BasicCard>
            </div>
          ))
          }
        </div>

      </div>
      <Footer page={"디자인 선택"} />
    </main>
  )
}