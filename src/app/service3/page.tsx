import BasicCard from "@/components/BasicCard";
import GuideLine from "@/components/GuideLine";
import HorizontalScroll from "@/components/HorizontalScroll";
import RouteButton from "@/components/RouteButton";

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-left' style={{color:"#1F74F4"}}>200개 이상의 예시 디자인 중</h5>
        <h2 className='fw-bold text-left'>마음에 드는 단독 주택의 디자인을 마음껏 선택해주세요.</h2>
        <HorizontalScroll>
          <BasicCard key={1} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={2} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={3} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={4} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={5} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={6} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={7} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={8} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
          <BasicCard key={9} src={"image1.jpg"} title={"Card title"} className="w-100">
            대충 그럴듯한 설명이 담긴 글
          </BasicCard>
        </HorizontalScroll>

        <div className="row w-100 mt-5">
          <div className="col-7 px-5 mt-4"><GuideLine page={"service3"}></GuideLine></div>
          <div className="col-2"></div>
          <div className="col-3"><RouteButton url={'/service4'} className="px-5 mx-auto align-self-left">다음 단계로 이동하기</RouteButton></div>
        </div>
      </div>
    </main>
  )
}