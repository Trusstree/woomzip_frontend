import BossCard from "@/components/BossCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-left' style={{color:"#1F74F4"}}>홍길동님에게 딱 맞는 건설사가 32개나 있어요.</h5>
        <h2 className='fw-bold text-left'>건설사들의 프로필을 확인해보고 마음에 드는 건설사들을 선택하세요.</h2>

        <div className="my-5">
          <BossCard url={""}></BossCard>
        </div>
      </div>

      <Footer page={"건축의뢰 완료"} url={'/'} />
    </main>
  )
}