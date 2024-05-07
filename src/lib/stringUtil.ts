export const cardPriceText = (price: number | string) => {
  const _price = Math.round(Number(price)); // 만 자리 반올림
  const eok =
    _price >= 100000000 ? Math.floor(_price / 100000000).toString() + "억" : "";
  const man = _price >= 10000 ? Math.floor(_price / 10000) + "만" : "";
  const il = _price % 10000 > 0 ? _price % 10000 : "";
  return eok + man + il + "원";
};

export const detailPriceText = (price: number | string) => {
  return Number(price).toLocaleString("ko-KR") + "원";
};
