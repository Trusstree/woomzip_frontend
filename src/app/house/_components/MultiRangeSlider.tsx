"use client";

import { ChangeEvent, useState } from "react";
import styles from "@/app/house/_styles/MultiRangeSlider.module.css";

type MultiRangeSliderProps = {
  name: string;
  min: number;
  max: number;
  step: number;
  setData: Function;
  setIsSubmit: Function;
};

export default function MultiRangeSlider(props: MultiRangeSliderProps) {
  const { name, min, max, step, setData, setIsSubmit } = props;

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const setMin = (e: ChangeEvent<any>) => {
    let [_min, _max] = [minValue, maxValue];
    _min = Math.min(e.target.value, max - step);
    setMinValue(_min);
    if (e.target.value >= maxValue) {
      _max = Math.min(Math.max(Number(e.target.value) + step, minValue + step), max);
      setMaxValue(_max);
    }
    setData((oldValue) => ({ ...oldValue, [name]: [_min, _max] }));
  };
  const setMax = (e: ChangeEvent<any>) => {
    let [_min, _max] = [minValue, maxValue];
    _max = Math.max(e.target.value, min + step);
    setMaxValue(_max);
    if (e.target.value <= minValue) {
      _min = Math.max(Math.min(Number(e.target.value) - step, maxValue - step), min);
      setMinValue(_min);
    }
    setData((oldValue) => ({ ...oldValue, [name]: [_min, _max] }));
    setIsSubmit(true);
  };

  return (
    <div className={`${styles.middle} m-0`}>
      <div className={`${styles.multiRangeSlider}`}>
        <input
          type="range"
          className={`form-range inputLeft ${styles.inputLeft}`}
          min={min}
          max={max}
          step={step}
          id={`${name}InputLeft`}
          value={minValue}
          onChange={setMin}
        />
        <input
          type="range"
          className={`form-range inputRight ${styles.inputRight}`}
          min={min}
          max={max}
          step={step}
          id={`${name}InputRight`}
          value={maxValue}
          onChange={setMax}
        />

        <div id={`${name}Slider`} className={`slider ${styles.slider}`}>
          <div id={`${name}Track`} className={`track ${styles.track}`}></div>
          <div
            id={`${name}Range`}
            className={`range ${styles.range}`}
            style={{
              left: `${(100 * (minValue - min)) / (max - min)}%`,
              right: `${(100 * (max - maxValue)) / (max - min)}%`,
            }}
          ></div>
          <div
            id={`${name}ThumbLeft`}
            className={`thumbleft ${styles.thumbleft}`}
            style={{ left: `${(100 * (minValue - min)) / (max - min)}%` }}
          ></div>
          <div
            id={`${name}ThumbRight`}
            className={`thumbright ${styles.thumbright}`}
            style={{ right: `${(100 * (max - maxValue)) / (max - min)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
