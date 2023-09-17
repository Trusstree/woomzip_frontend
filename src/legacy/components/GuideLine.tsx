import style from "./GuideLine.module.css";

type GuideLineProps = {
  page:string
}

export default function GuideLine (props: GuideLineProps) {
  const { page } = props;

  const pageName=["위치 선정", "건축 종류 선택", "디자인 선택", "세부정보 보기", "세부내역 작성", "건축의뢰 완료"]
  .map((e, i)=>(
    <div key={i} className={`d-flex flex-column align-items-center`} >
      <label className={`${style.label} text-center ${(e==page)?style.selected:""}`}>{e}</label>
      <div className={`${style.circle} rounded-5 bg-blue`}/>
    </div>
  ))

  return (
  <div className={`w-100 h-100`}>
    <div className={`${style.guidebar} w-100 mt-4`} ></div>
    <div className="w-100 d-flex justify-content-between">
      {pageName}
    </div>
  </div>
  )
}