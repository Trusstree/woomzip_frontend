import { loadData } from '@/app/housecopy/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';

import HouseSummary from '@/app/housecopy/[pid]/_components/HouseSummary';
import HouseDesigner from '@/app/housecopy/[pid]/_components/HouseDesigner';
import Template1 from '@/app/housecopy/[pid]/_components/Template1';
import Template2 from '@/app/housecopy/[pid]/_components/Template2';
import Template3 from '@/app/housecopy/[pid]/_components/Template3';
import Masterplan from '@/app/housecopy/[pid]/_components/Masterplan';
import Detail from '@/app/housecopy/[pid]/_components/Detail';
import Tazan from '@/app/housecopy/[pid]/_components/Tazan';
import Service from '@/app/housecopy/[pid]/_components/Service';
import FAQList from '@/components/FAQList';

export default async function House({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const { houseData, imageData, specificationData, vendorData, productCardData } = await loadData(pid);

  return houseData ? (
    <>
      <HouseSummary houseData={houseData} imageData={imageData} />
      <HouseDesigner userData={vendorData} />
      <Template1 imageData={imageData} />
      <Template2 imageData={imageData} />
      <Template3 imageData={imageData} />
      <Masterplan masterplanData={imageData} />
      <Detail houseData={houseData} specificationData={specificationData} />
      <Tazan pid={pid} houseData={houseData} />
      <Service />
      <FAQList />
    </>
  ) : (
    <LoadPage />
  );
}
