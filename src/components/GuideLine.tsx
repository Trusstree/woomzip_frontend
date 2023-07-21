import style from "./GuideLine.module.css";

type GuideLineProps = {
  page:string;
}

export default function GuideLine (props: GuideLineProps) {
  const { page } = props;

  const pageName=["service1", "service2", "service3", "service4", "service5", "service6"]
  .map((e, i)=>(
    <div key={i}>
      <div className={`${style.circle} rounded-5 bg-blue`}>
        <label className={`${style.label} ${(e==page)?style.selected:""}`}>{e}</label>
      </div>
    </div>
  ))

  return (
  <div style={{position:"relative"}}>
    <div className={`${style.guidebar} w-100`}></div>
    <div className="w-100 d-flex justify-content-between">
      {pageName}
    </div>
  </div>
  )
}