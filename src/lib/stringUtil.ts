export const priceText = (price:number) => {
  const eok=price>=10000?Math.floor(price/10000).toString()+"억":"";
  const man=(price%10000>0)?(price%10000)+"만":"";
  return eok+man;
}