import { loadData } from '@/app/housecopy/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';
import Tazan from '@/app/housecopy/[pid]/_components/Tazan';
import CallWoomzip from '@/app/housecopy/[pid]/_components/CallWoomzip';
import Image from 'next/image';
import Comp1 from '@/app/housecopy/[pid]/_components/Comp1';
import Comp2 from '@/app/housecopy/[pid]/_components/Comp2';
import Temp1 from '@/app/housecopy/[pid]/_components/Temp1';

export default async function House({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const { houseData, imageData, optionData, specificationData, userData, reviewData, deliveryData } =
    await loadData(pid);

  return houseData ? (
    <>
      <Comp1 imageData={imageData} />
      <Comp2 imageData={imageData} />
      <Temp1 imageData={imageData} />
      <Temp1 imageData={imageData} />
      <Tazan pid={pid} houseData={houseData} />
      <CallWoomzip pid={pid} houseData={houseData} />
    </>
  ) : (
    <LoadPage />
  );
}
