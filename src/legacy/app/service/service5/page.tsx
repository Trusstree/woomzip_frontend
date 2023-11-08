// import Footer from "@/components/Footer";
import SearchBox from "@/components/forms/SearchBox";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-start flex-column align-items-start`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold' style={{color:"#1F74F4"}}>건축사사무소와의 원활한 소통을 위하여 변경을 원하시는 부분에 대해 자세하게 알려주세요.</h5>

        <div className="my-5">
          <div className="row mt-5">
            <label className="fw-bold fs-3">문, 샤시 등 자재변경부터 면적, 층수 등 특별요청까지 자세하게 알려주세요.</label>
            <SearchBox placeholder={"ex) 문 색깔은 파란색이 좋을 것 같고, 면적은 5평 정도 줄이고 싶습니다. 외장재 콘크리트로 느낌을 살리고 싶습니다."} />
          </div>
          <div className="row mt-5">
            <label className="fw-bold fs-3">트러스나 건축사사무소, 시공사에게 궁금한 것이 있다면 자유롭게 물어봐주세요.</label>
            <SearchBox placeholder={"ex) 트러스룰 이용하면 좋은 점이 무엇인지 구체적으로 알고 싶어요."} />
          </div>
        </div>
      </div>

      {/* <Footer page={"세부내역 작성"} url={'/service6'} /> */}
    </main>
  )
}