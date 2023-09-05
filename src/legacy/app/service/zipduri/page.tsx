import SearchBar from "@/components/forms/SearchBox";
import Image from 'next/image'
import Submit from "@/components/forms/SubmitButton";
import SearchBox from "@/components/forms/SearchBox";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`} >
      <div className={`row w-100 mt-5`}>
        <div className={`col-6`}>
          <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>나만의 럭셔리 하우스 중 총 5개가 현재 집들이가 가능합니다.</h5>
          <h2 className='fw-bold text-start'>지도에서 집들이하실 건축물의 위치를 선택해주세요.</h2>
          <Image
            className={`m-5`}
            src="/koreaMap.png"
            alt="Truss Logo"
            width={340}
            height={570}
          />
        </div>

        <div className={`col-6 d-flex justify-content-center flex-column`}>
          <h5 className='fw-bold text-start' style={{color:"#1F74F4"}}>집들이 일정은 건축주와 협의를 통해 이루어집니다.</h5>
          <h2 className='fw-bold text-start'>가능하신 일자를 모두 선택해주세요.</h2>
          <Image
            className={`m-3`}
            src="/calender.png"
            alt="calender"
            width={271}
            height={204}
          />

          <div className="my-3">
            <label className='fw-bold fs-4 text-start'>일정협의를 위해 연락저를 적어주세요.</label>
            <div className="col-10"><SearchBar placeholder={"ex) 000-0000-0000"} /></div>
          </div>

          <div className="my-3">
            <label className='fw-bold fs-4 text-start'>일정관련하여 세부사항을 적어주세요.</label>
            <div className="col-10"><SearchBox placeholder={"ex) 저녁 7시 이후가 좋을 것 같아요."} /></div>
          </div>

          <div className="m-5 d-flex justify-content-end">
            {/* <Submit>집들이 요청하기</Submit> */}
          </div>
          
        </div>
      </div>
    </main>
  )
}