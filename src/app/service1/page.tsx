import SearchBar from "@/components/forms/SearchBar";
import Image from 'next/image'
import Submit from "@/components/forms/Submit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`} >
      <div className={`row w-100`}>
        <div className={`col-6`}>
          <Image
            className={`m-5`}
            src="/koreaMap.png"
            alt="Truss Logo"
            width={340}
            height={570}
          />
        </div>

        <div className={`col-6 d-flex justify-content-center flex-column`}>
          <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>트러스는 전국 어디든지 서비스를 제공합니다.</h5>
          <h2 className='fw-bold text-start'>지도에서 건축하실 위치를 선택해주세요.</h2>
          
          <div className="row mt-5">
            <div className="col-10"><SearchBar placeholder={"ex) 공세동 한보라2동 141"} /></div>
            <div className="col-2"><Submit>Submit</Submit></div>
          </div>
          <div className='fw-bold text-start' style={{color:"#1F74F4"}}>자세한 주소를 제출해주시면 보다 정확한 서비스 이용이 가능합니다.</div>
        </div>
      </div>

      <Footer page={"위치 선정"} url={'/service2'} />
    </main>
  )
}