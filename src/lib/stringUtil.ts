export const priceText = (price:number) => {
  const _price=Math.round(price/10000)*10000; // 만 자리 반올림
  const eok=_price>=10000?Math.floor(_price/10000).toString()+"억":"";
  const man=(_price%10000>0)?(_price%10000)+"만":"";
  return eok+man;
}