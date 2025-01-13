import LoadPage from '@/components/app/LoadPage';

import HouseSummary from '@/app/housecopy/[pid]/_components/HouseSummary';
import HouseDesigner from '@/app/housecopy/[pid]/_components/HouseDesigner';
import Detail from '@/app/housecopy/[pid]/_components/Detail';
import Tazan from '@/app/housecopy/[pid]/_components/Tazan';
import Service from '@/app/housecopy/[pid]/_components/Service';
import FAQList from '@/components/FAQList';
import { loadProductData } from './_actions/actions';
import FullTemplate from '@/app/housecopy/[pid]/_components/FullTemplate';
import HalfTemplate from '@/app/housecopy/[pid]/_components/HalfTemplate';
import CardEntireTemplate from '@/app/housecopy/[pid]/_components/CardEntireTemplate';
import MasterPlanTemplate from '@/app/housecopy/[pid]/_components/MasterPlanTemplate';

export default async function House({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const [
    summaryData,
    vendorData,
    fullTemplatesData,
    halfTemplatesData,
    cardEntireTemplatesData,
    masterPlanTemplatesData,
    detailData,
  ] = await loadProductData(pid);

  return summaryData ? (
    <>
      <HouseSummary summaryData={summaryData} />
      <HouseDesigner vendorData={vendorData} />
      {fullTemplatesData?.length > 0 && <FullTemplate templatesData={fullTemplatesData} />}
      {halfTemplatesData?.length > 0 && <HalfTemplate templatesData={halfTemplatesData} />}
      {cardEntireTemplatesData && <CardEntireTemplate templatesData={cardEntireTemplatesData} />}
      {masterPlanTemplatesData?.length > 0 && <MasterPlanTemplate templatesData={masterPlanTemplatesData} />}
      <Detail detailData={detailData} />
      <Tazan pid={summaryData.productId} />
      <Service />
      <FAQList />
    </>
  ) : (
    <LoadPage />
  );
}
