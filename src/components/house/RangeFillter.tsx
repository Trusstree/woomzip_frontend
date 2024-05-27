"use client"

import { useState } from "react";
import styled from "styled-components";

const fixedMinPrice = 1;
const fixedMaxPrice = 10;
const priceGap = fixedMaxPrice-fixedMinPrice;

export default function RangeFillter({}) {
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice); 
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
  const [rangeMinPercent, setRangeMinPercent] = useState(0);
  const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

  const prcieRangeMinValueHandler = e => {
    setRangeMinValue(parseInt(e.target.value));
  };
  
  const prcieRangeMaxValueHandler = e => {
    setRangeMaxValue(parseInt(e.target.value));
  };
  
  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } else {
      setRangeMinPercent((rangeMinValue / fixedMaxPrice) * 100);
      setRangeMaxPercent(100 - (rangeMaxValue / fixedMaxPrice) * 100);
    }
  };

  const FilterPriceSlide = styled.div`
    position: relative;
    height: 4px;
    width: 650px;
    border-radius: 10px;
    background-color: #dddddd;
  `;

  const FilterPriceSlideInner = styled.div`
    position: absolute;
    left: 30%;
    right: 30%;
    height: 4px;
    border-radius: 10px;
    background-color: #b0b0b0;
  `;

  const FilterPriceRangeWrap = styled.div`
    position: relative;
  `;

  const FilterPriceRangeMin = styled.input`
    position: absolute;
    top: -9px;
    height: 7px;
    width: 100%;
    background: none;
  `;

  const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;

  return (
    <>
      <FilterPriceSlide>
          <FilterPriceSlideInner />
      </FilterPriceSlide>
      <FilterPriceRangeWrap>
        <FilterPriceRangeMin
            type="range"
            min={fixedMinPrice}
            max={fixedMaxPrice - priceGap}
            step="1000"
            value={rangeMinValue}
            onChange={e => {
                prcieRangeMinValueHandler(e);
                twoRangeHandler();
            }}
        />
        <FilterPriceRangeMax
            type="range"
            min={fixedMinPrice + priceGap}
            max={fixedMaxPrice}
            step="1000"
            value={rangeMaxValue}
            onChange={e => {
                prcieRangeMaxValueHandler(e);
                twoRangeHandler();
            }}
        />
      </FilterPriceRangeWrap>

      
    </>
  );
}