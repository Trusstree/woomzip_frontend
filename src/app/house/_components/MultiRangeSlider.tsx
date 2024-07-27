"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import useQuery from "@/hooks/useQuery";
import styles from "@/app/house/_styles/MultiRangeSlider.module.css";

type MultiRangeSliderProps = {
  minName: string;
  maxName: string;
  min: number;
  max: number;
  step: number;
};

export default function MultiRangeSlider(props: MultiRangeSliderProps) {
  const { minName, maxName, min, max, step } = props;

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();

  const setMin = (e: ChangeEvent<any>) => {
    let [_min, _max] = [minValue, maxValue];
    _min = Math.min(e.target.value, max - step);
    setMinValue(_min);
    if (e.target.value >= maxValue) {
      _max = Math.min(Math.max(Number(e.target.value) + step, minValue + step), max);
      setMaxValue(_max);
      createQuery(maxName, (_max).toString());
    }
    createQuery(minName, (_min).toString());
    router.replace(getRouteParams());
  };

  const setMax = (e: ChangeEvent<any>) => {
    let [_min, _max] = [minValue, maxValue];
    _max = Math.max(e.target.value, min + step);
    setMaxValue(_max);
    if (e.target.value <= minValue) {
      _min = Math.max(Math.min(Number(e.target.value) - step, maxValue - step), min);
      setMinValue(_min);
      createQuery(minName, (_min).toString());
    }
    createQuery(maxName, (_max).toString());
    router.replace(getRouteParams());
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
          id={`${minName}InputLeft`}
          value={minValue}
          onChange={setMin}
        />
        <input
          type="range"
          className={`form-range inputRight ${styles.inputRight}`}
          min={min}
          max={max}
          step={step}
          id={`${maxName}InputRight`}
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
            id={`${minName}ThumbLeft`}
            className={`thumbleft ${styles.thumbleft}`}
            style={{ left: `${(100 * (minValue - min)) / (max - min)}%` }}
          ></div>
          <div
            id={`${maxName}ThumbRight`}
            className={`thumbright ${styles.thumbright}`}
            style={{ right: `${(100 * (max - maxValue)) / (max - min)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
