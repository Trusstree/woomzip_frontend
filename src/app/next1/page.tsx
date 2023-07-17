import SearchBar from '@/components/SearchBar'
import CheckBoxs from '@/components/CheckBoxs'
import Submit from '@/components/Submit'
import Radios from '@/components/Radios'
import BasicCard from '@/components/BasicCard'
import MultiRangeSlider from '@/components/MultiRangeSlider'

export default function Home() {
  return (
    <main className={`container d-flex justify-content-center flex-column align-items-center`}>

      {/* https://mdbootstrap.com/docs/standard/forms/search/ */}

      <div className='row w-100'>

        <div className='col-12 mb-5'>
          <SearchBar title={"목표"} />
        </div>
        
        <CheckBoxs className="col-2" title="용도">
          {["단독주택", "다가구주택", "상가건물"]}
        </CheckBoxs>

        <Radios className="col-2" title="정렬방식">
          {["인기순", "가격높은순", "최신순", "사무소 평점순"]}
        </Radios>

        <div className='col-6'>
          <MultiRangeSlider title={"목표1"} />
          <MultiRangeSlider title={"목표2"} />
          <MultiRangeSlider title={"목표3"} />
        </div>

        <div className='col-2'>
          <Submit />
        </div>
      </div>

      <div className='row mx-3 mt-5 mb-3'>
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
        <BasicCard url={"next2"} className="py-3 my-3" />
      </div>
    </main>
  )
}
