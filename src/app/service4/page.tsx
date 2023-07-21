import BasicCard from "@/components/BasicCard";
import BossCard from "@/components/BossCard";
import GuideLine from "@/components/GuideLine";
import HorizontalScroll from "@/components/HorizontalScroll";
import RouteButton from "@/components/RouteButton";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-left' style={{color:"#1F74F4"}}>홍길동님에게 딱 맞는 건설사가 32개나 있어요.</h5>
        <h2 className='fw-bold text-left'>건설사들의 프로필을 확인해보고 마음에 드는 건설사들을 선택하세요.</h2>

        <div className="my-5">
          <BossCard url={""}></BossCard>
        </div>

        <div className="row w-100 mt-5">
          <div className="col-7 px-5 mt-4"><GuideLine page={"service4"}></GuideLine></div>
          <div className="col-2"></div>
          <div className="col-3"><RouteButton url={'/'} className="px-5 mx-auto align-self-left">다음 단계로 이동하기</RouteButton></div>
        </div>
      </div>
    </main>
  )
}