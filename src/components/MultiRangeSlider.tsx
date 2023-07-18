"use client"

import { ChangeEvent, useState } from "react";

import styles from './MultiRangeSlider.module.css'

type MultiRangeSliderProps = {
  title:string;
  unit:string;
  min:number;
  max:number;
  step:number;
}

export default function MultiRangeSlider(props: MultiRangeSliderProps) {
  const { title, unit, min, max, step } = props;
  
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
      <label><span className="fs-5 fw-bold">{title}</span> {minValue}{unit} ~ {maxValue}{unit}</label>
      <div className={`${styles.multiRangeSlider}`}>
        
        <input
          type="range" className={`form-range inputLeft ${styles.inputLeft}`}
          min={min} max={max} step={step} id={`${title}InputLeft`} value={minValue} onChange={setMin}
        />
        <input
          type="range" className={`form-range inputRight ${styles.inputRight}`}
          min={min} max={max} step={step} id={`${title}InputRight`} value={maxValue} onChange={setMax}
        />
    
        <div id={`${title}Slider`} className={`slider ${styles.slider}`}>
          <div id={`${title}Track`} className={`track ${styles.track}`}></div>
          <div id={`${title}Range`} className={`range ${styles.range}`} style={{left:`${100*(minValue-min)/(max-min)}%`, right:`${100*(max-maxValue)/(max-min)}%`}}></div>
          <div id={`${title}ThumbLeft`} className={`thumbleft ${styles.thumbleft}`} style={{left:`${100*(minValue-min)/(max-min)}%`}} ></div>
          <div id={`${title}ThumbRight`} className={`thumbright ${styles.thumbright}`} style={{right:`${100*(max-maxValue)/(max-min)}%`}} ></div>
        </div>

      </div>
    </div>
    
  )
}

