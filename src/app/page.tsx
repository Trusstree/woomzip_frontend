import BasicCard from '@/components/BasicCard'
import HorizontalScroll from '@/components/HorizontalScroll'
import RouteButton from '@/components/RouteButton'

export default function Home() {
  return (
    <main className={`container my-4 py-5 d-flex justify-content-center flex-column align-items-center`}>
      <h1>설레는 건축의 시작</h1>
      <h1>트러스와 함께 하세요!</h1>
      <HorizontalScroll>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} className="w-100">
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
      </HorizontalScroll>
      <div className={`py-4 align-self-end`}>
        <RouteButton url={'/next1'} className={''}>다음 페이지</RouteButton>
      </div>
    </main>
  )
}
