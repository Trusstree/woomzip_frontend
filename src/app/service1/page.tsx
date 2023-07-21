import SearchBar from "@/components/SearchBar";
import Map from "@/components/Map";
import RouteButton from "@/components/RouteButton";
import Submit from "@/components/Submit";
import GuideLine from "@/components/GuideLine";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`} >
      <div className={`row w-100`}>
        <div className={`col-6`}>
          <Map></Map>
        </div>

        <div className={`col-6 d-flex justify-content-center flex-column`}>
          <h5 className='fw-bold text-left' style={{color:"#1F74F4"}}>트러스는 전국 어디든지 서비스를 제공합니다.</h5>
          <h2 className='fw-bold text-left'>지도에서 건축하실 위치를 선택해주세요.</h2>
          
          <div className="row mt-5">
            <div className="col-10"><SearchBar placeholder={"ex) 공세동 한보라2동 141"} /></div>
            <div className="col-2"><Submit></Submit></div>
          </div>
          <div className='fw-bold text-left' style={{color:"#1F74F4"}}>자세한 주소를 제출해주시면 보다 정확한 서비스 이용이 가능합니다.</div>
        </div>
      </div>

      <div className="row w-100 mt-5">
        <div className="col-7 px-5 mt-4"><GuideLine page={"service1"}></GuideLine></div>
        <div className="col-2"></div>
        <div className="col-3"><RouteButton url={'/service2'} className="px-5 mx-auto align-self-left">다음 단계로 이동하기</RouteButton></div>
      </div>
    </main>
  )
}