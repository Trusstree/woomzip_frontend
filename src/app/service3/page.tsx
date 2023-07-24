import BasicCard from "@/components/BasicCard";
import Footer from "@/components/Footer";

type DesignData = {
  title: string
  src: string
  price: string
}

export default function Home() {
  const data = [
    {title: "자연품은 작은 주택", src:"image1.jpg", price:"2억 3천만원"},
    {title: "나만의 력셔리 하우스", src:"image1.jpg", price:"5억 2천만원"},
    {title: "네모난 해뜨는 집", src:"image1.jpg", price:"3억 9천만원"},
    {title: "이글루", src:"image1.jpg", price:"3천만원"},
    {title: "피라미드", src:"image1.jpg", price:"257조원"},
    {title: "유머모음집", src:"image1.jpg", price:"5천원"},
  ] as DesignData[];

  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      <div className={`mt-5`}>
        <h5 className='fw-bold text-left' style={{color:"#1F74F4"}}>200개 이상의 예시 디자인 중</h5>
        <h2 className='fw-bold text-left'>마음에 드는 단독 주택의 디자인을 마음껏 선택해주세요.</h2>
        <div className="row g-4 d-flex justify-content-between">
          {
          data.map((e, i)=>(
            <div className="col-4" key={i}>
              <BasicCard
                src={e.src}
                title={e.title}
                className="p-0">
                {e.price}
              </BasicCard>
            </div>
          ))
          }
        </div>

      </div>
      <Footer page={"디자인 선택"} url={'/service4'} />
    </main>
  )
}