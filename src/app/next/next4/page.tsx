"use client"

import BasicCard from "@/components/BasicCard"

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>
      
      <div className="bg-primary text-white my-3 py-3 px-5 fs-3">장바구니</div>
      
      <div className="btn-group my-3 w-100" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">건물</button>
        <button type="button" className="btn btn-outline-secondary">건축 사무소</button>
        <button type="button" className="btn btn-outline-secondary">시공사</button>
      </div>

      <div className='row mx-3'>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
        <BasicCard src={"image1.jpg"} title={"Card title"} url={"next2"} className="py-3 my-3" >
          대충 그럴듯한 설명이 담긴 글
        </BasicCard>
      </div>
    </main>
  )
}
