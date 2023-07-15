import BasicCard from '@/components/BasicCard'
import HorizontalScroll from '@/components/HorizontalScroll'
import RouteButton from '@/components/RouteButton'

export default function Home() {
  return (
    <main className={`container my-4 py-5 d-flex justify-content-center flex-column align-items-center`}>
      <h1>설레는 건축의 시작</h1>
      <h1>트러스와 함께 하세요!</h1>
      <HorizontalScroll>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
        <BasicCard url={"next2"} className="w-100"/>
      </HorizontalScroll>
      <div className={`py-4 align-self-end`}>
        <RouteButton dir={'/next1'}>다음 페이지</RouteButton>
      </div>
    </main>
  )
}
