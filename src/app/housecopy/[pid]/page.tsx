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
import { loadProductData } from './_actions/actions';

export default async function House({ params }: { params: { pid: number } }) {
  const { pid } = params;
  const [summaryData, vendorData, templatesData, masterplanData, detailData] = await loadProductData(pid);

  return summaryData ? (
    <>
      <HouseSummary summaryData={summaryData} />
      <HouseDesigner venderData={vendorData} />
      <Template1 templateData={templatesData.template1} />
      <Template2 templateData={templatesData.template2} />
      <Template3 templateData={templatesData.template3} />
      <Masterplan masterplanData={masterplanData} />
      <Detail detailData={detailData} />
      <Tazan pid={summaryData.productId} />
      <Service />
      <FAQList />
    </>
  ) : (
    <LoadPage />
  );
}
