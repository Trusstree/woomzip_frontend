export const cardPriceText = (price: number | string) => {
  let _price = Number(price);
  if (isNaN(_price)) return "NaN원"; // 애초에 숫자가 아니면 에러처리
  _price = Math.floor(_price); // 소수점은 제거

  const il = _price % 10000 > 0 ? _price % 10000 : "";
  _price = Math.floor(_price / 10000);
  const man = _price % 10000 > 0 ? (_price % 10000) + "만" : "";
  _price = Math.floor(_price / 10000);
  const eok = _price % 10000 > 0 ? (_price % 10000) + "억" : ""; // 집은 억 단위까지
  return eok + man + il + "원";
};

export const simplePriceText = (price: number | string) => {
  let _price = Number(price);
  if (isNaN(_price)) return "NaN원"; // 애초에 숫자가 아니면 에러처리
  _price = Math.floor(_price); // 소수점은 제거

  const man = _price % 10000 > 0 ? (_price % 10000) + "만" : "";
  _price = Math.floor(_price / 10000);
  const eok = _price % 10000 > 0 ? (_price % 10000) + "억" : ""; // 집은 억 단위까지
  return eok + man + "원";
};

export const detailPriceText = (price: number | string) => {
  return Number(price).toLocaleString("ko-KR") + "원";
};

export function toStringByFormatting(source, delimiter = "-") {
  function leftPad(value) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }

  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}
