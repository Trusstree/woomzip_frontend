// import Footer from "@/components/Footer";
import SearchBar from "@/components/forms/SearchBox";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-start flex-column align-items-start`}>
      <div className={`mt-5`}>
        <div className='fw-bold fs-5' style={{color:"#1F74F4"}}>요청사항이 저장되었습니다!</div>
        <div className='fw-bold fs-2'>의뢰내용에 대한 답변을 받으실 연락처를 알려주세요.</div>

        <div className="my-5">
          <div className="row mt-5">
            <label style={{color:"#1F74F4"}}>의뢰하시는 분 성함을 알려주세요</label>
            <SearchBar placeholder={"ex) 홍길동"} />
          </div>
          <div className="row mt-5">
            <label style={{color:"#1F74F4"}}>전화번호를 입력해주세요.</label>
            <SearchBar placeholder={"ex) 000-0000-0000"} />
          </div>
          <div className="row mt-5">
            <label style={{color:"#1F74F4"}}>이메일을 입력해주세요.</label>
            <SearchBar placeholder={"ex) truss369@naver.com"} />
          </div>
        </div>
      </div>
      <p className="fw-bold fs-3">
        최대한 빠른 시간 내에 연락드리겠습니다.<br/>
        트러스가 건축주님의 편안한 건축과정을 위한 안내자가 되겠습니다.
      </p>

      {/* <Footer page={"건축의뢰 완료"} /> */}
    </main>
  )
}