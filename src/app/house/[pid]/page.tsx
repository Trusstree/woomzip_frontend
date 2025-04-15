import ProductSummary from '@/app/house/[pid]/_components/ProductSummary';
import ProductDesigner from '@/app/house/[pid]/_components/ProductDesigner';
import Detail from '@/app/house/[pid]/_components/ProductDetail';
import Tazan from '@/app/house/[pid]/_components/ProductTazan';
import Service from '@/app/house/[pid]/_components/ProductService';
import FAQList from '@/components/FAQList';
import { loadProductData } from '@/app/house/[pid]/_actions/actions';
import FullTemplate from '@/app/house/[pid]/_components/ProductFullTemplate';
import HalfTemplate from '@/app/house/[pid]/_components/ProductHalfTemplate';
import CardEntireTemplate from '@/app/house/[pid]/_components/CardEntireTemplate';
import MasterPlanTemplate from '@/app/house/[pid]/_components/ProductMasterPlanTemplate';
import InquireStickyButton from '@/app/house/[pid]/_components/InquireStickyButton';
import ErrorPage from '@/app/house/[pid]/error';

export const revalidate = 2592000;
export default async function Product({ params }: { params: { pid: number } }) {
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
      <div>
        <ProductSummary summaryData={summaryData} />
        <ProductDesigner vendorData={vendorData} />
        {fullTemplatesData?.length > 0 && <FullTemplate templatesData={fullTemplatesData} />}
        {halfTemplatesData?.length > 0 && <HalfTemplate templatesData={halfTemplatesData} />}
        {cardEntireTemplatesData && <CardEntireTemplate templatesData={cardEntireTemplatesData} />}
        {masterPlanTemplatesData?.length > 0 && <MasterPlanTemplate templatesData={masterPlanTemplatesData} />}
        <Detail detailData={detailData} />
        <Tazan pid={summaryData.productId} />
        <Service />
        <FAQList />
        <InquireStickyButton pid={summaryData.productId} />
      </div>
  ) : (
    <ErrorPage />
  );
}
