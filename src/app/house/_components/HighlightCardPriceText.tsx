export const HighlightCardPriceText = ({ price }: { price: number | string }) => {
  let _price = Number(price);
  if (isNaN(_price)) return <>NaN원</>; // 애초에 숫자가 아니면 에러처리
  if (_price == 0) return <>0원</>; // 0원은 만원 단위가 아니라 제거

  _price = Math.floor(_price / 10000); // 일 단위 제거
  const man = _price % 10000 > 0 ? (_price % 10000).toString() : '';
  _price = Math.floor(_price / 10000);
  const eok = _price % 10000 > 0 ? (_price % 10000) + '억' : ''; // 집은 억 단위까지
  return (
    <>
      <span>{eok + man}</span>
      {man.length > 0 ? '만' : ''}원
    </>
  );
};
