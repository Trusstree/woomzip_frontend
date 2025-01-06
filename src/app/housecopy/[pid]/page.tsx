import { loadData } from '@/app/housecopy/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';

import Comp1 from '@/app/housecopy/[pid]/_components/Comp1';
import Comp2 from '@/app/housecopy/[pid]/_components/Comp2';
import Temp1 from '@/app/housecopy/[pid]/_components/Temp1';
import Temp2 from '@/app/housecopy/[pid]/_components/Temp2';
import Temp3 from '@/app/housecopy/[pid]/_components/Temp3';
import Masterplan from '@/app/housecopy/[pid]/_components/Masterplan';
import Detail from '@/app/housecopy/[pid]/_components/Detail';
import Tazan from '@/app/housecopy/[pid]/_components/Tazan';
import Service from '@/app/housecopy/[pid]/_components/Service';
import FAQList from '@/app/housecopy/[pid]/_components/FAQList';

export default async function House({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const { houseData, imageData, optionData, specificationData, userData, reviewData, deliveryData } =
    await loadData(pid);

  return houseData ? (
    <>
      <Comp1 imageData={imageData} />
      <Comp2 imageData={imageData} />
      <Temp1 imageData={imageData} />
      <Temp2 imageData={imageData} />
      <Temp3 imageData={imageData} />
      <Masterplan imageData={imageData} />
      <Detail houseData={houseData} specificationData={specificationData} />
      <Tazan pid={pid} houseData={houseData} />
      <Service />
      <FAQList />
    </>
  ) : (
    <LoadPage />
  );
}
