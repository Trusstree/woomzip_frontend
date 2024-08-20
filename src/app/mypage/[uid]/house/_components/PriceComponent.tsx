'use client';

import useOptionInfo from '@/app/mypage/[uid]/house/_store/optionInfo';

export function PriceComponent({ index, className }: { index: number; className?: string }) {
  const { optionInfo, setOptionInfo } = useOptionInfo();

  const onClick = () => {
    setOptionInfo(optionInfo.filter((_, i) => i != index));
  };

  return (
    <div className={`${className} mt-2 col-12 row`}>
      <div className="col-6">{optionInfo[index].option_product_name}</div>
      <div className="col-4">{optionInfo[index].option_product_price}</div>
      <div className={'col-2 btn d-flex flex-column justify-content-center align-self-center'} onClick={onClick}>
        X
      </div>
    </div>
  );
}
