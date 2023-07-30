import BasicCard from "@/components/BasicCard";
import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/HorizontalScroll";

type BuildingData = {
  title: string
  src: string
  minDate: string
  maxDate: string
  minPrice: string
}

export default function Home() {

  const data = [
    {title:"단독 주택", src:"/SoloHouse.png", minDate:"8", maxDate:"15", minPrice:"8320"},
    {title:"다가구 주택", src:"/FamilyHouse.png", minDate:"16", maxDate:"29", minPrice:"53400"},
    {title:"상가주택", src:"/SangaHouse.png", minDate:"22", maxDate:"37", minPrice:"83255"},
    {title:"상가", src:"/Sanga.png", minDate:"31", maxDate:"42", minPrice:"103825"},
  ] as BuildingData[];

  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>주택부터 상가까지</h5>
        <h2 className='fw-bold text-start'>건축하실 건물의 종류를 선택해주세요.</h2>
        <HorizontalScroll>
          {data.map((e,i)=>(
            <BasicCard key={i} className="w-100 h-100"
              src={e.src}
              title={e.title}
              href={"/service3"}>
              <div className="row mb-3">
                <div className="col-6 my-1 text-start">공사기간</div>
                <div className="col-6 my-1 text-end">{e.minDate}주 ~ {e.maxDate}주</div>
                <div className="col-6 my-1 text-start">총공사비</div>
                <div className="col-6 my-1 text-end">{e.minPrice}만원~</div>
              </div>
            </BasicCard>
          ))}
        </HorizontalScroll>
      </div>

      <Footer page={"건축 종류 선택"} />
    </main>
  )
}