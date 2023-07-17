"use client"

import { ChangeEvent, useState } from "react";

import styles from './MultiRangeSlider.module.css'

type MultiRangeSliderProps = {
  title:string
}

export default function MultiRangeSlider(props: MultiRangeSliderProps) {
  const { title } = props;
  
  const min=0, max=100;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const setMin=(e:ChangeEvent<any>)=>{
    setMinValue(Math.min(e.target.value, maxValue-1));
  }
  const setMax=(e:ChangeEvent<any>)=>{
    setMaxValue(Math.max(e.target.value, minValue+1));
  }

  return (
    <div className={`${styles.middle} m-0`}>
      <label><span className="fs-5 fw-bold">{title}</span> {minValue}만원 ~ {maxValue}만원</label>
      <div className={`${styles.multiRangeSlider}`}>
        
        <input
          type="range" className={`form-range inputLeft ${styles.inputLeft}`}
          min={min} max={max} id={`${title}InputLeft`} value={minValue} onChange={setMin}
        />
        <input
          type="range" className={`form-range inputRight ${styles.inputRight}`}
          min={min} max={max} id={`${title}InputRight`} value={maxValue} onChange={setMax}
        />
    
        <div id={`${title}Slider`} className={`slider ${styles.slider}`}>
          <div id={`${title}Track`} className={`track ${styles.track}`}></div>
          <div id={`${title}Range`} className={`range ${styles.range}`} style={{left:`${minValue}%`, right:`${100-maxValue}%`}}></div>
          <div id={`${title}ThumbLeft`} className={`thumbleft ${styles.thumbleft}`} style={{left:`${minValue}%`}} ></div>
          <div id={`${title}ThumbRight`} className={`thumbright ${styles.thumbright}`} style={{right:`${100-maxValue}%`}} ></div>
        </div>

      </div>
    </div>
    
  )
}

