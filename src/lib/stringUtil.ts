export const cardPriceText = (price: number | string) => {
  let _price = Number(price);
  if (isNaN(_price)) return "NaN원"; // 애초에 숫자가 아니면 에러처리
  if (_price == 0) return "0원"; // 0원은 만원 단위가 아니라 제거
  _price = Math.floor(_price); // 소수점은 제거

  const il = _price % 10000 > 0 ? _price % 10000 : "";
  _price = Math.floor(_price / 10000);
  const man = _price % 10000 > 0 ? (_price % 10000) + "만" : "";
  _price = Math.floor(_price / 10000);
  const eok = _price % 10000 > 0 ? (_price % 10000) + "억" : ""; // 집은 억 단위까지
  return eok + man + il + "원";
};

// 만원 이하 단위 절삭한 함수
export const simplePriceText = (price: number | string) => {
  let _price = Number(price);
  if (isNaN(_price)) return "NaN원"; // 애초에 숫자가 아니면 에러처리
  if (_price == 0) return "0원"; // 0원은 만원 단위가 아니라 제거
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

export const cardCountText = (count: number | string) => {
  const _count = Number(count);
  if (isNaN(_count)) return "NaN"; // 애초에 숫자가 아니면 에러처리
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (_count >= si[i].value) {
      break;
    }
  }
  return (_count / si[i].value).toFixed(3).replace(rx, "$1") + si[i].symbol;
};
