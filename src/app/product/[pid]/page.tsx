import ProductSummary from '@/app/product/[pid]/_components/ProductSummary';
import ProductDesigner from '@/app/product/[pid]/_components/ProductDesigner';
import Detail from '@/app/product/[pid]/_components/ProductDetail';
import Tazan from '@/app/product/[pid]/_components/ProductTazan';
import Service from '@/app/product/[pid]/_components/ProductService';
import FAQList from '@/components/FAQList';
import { loadProductData } from '@/app/product/[pid]/_actions/actions';
import Link from 'next/link';
import FullTemplate from '@/app/product/[pid]/_components/ProductFullTemplate';
import HalfTemplate from '@/app/product/[pid]/_components/ProductHalfTemplate';
import CardEntireTemplate from '@/app/product/[pid]/_components/CardEntireTemplate';
import MasterPlanTemplate from '@/app/product/[pid]/_components/ProductMasterPlanTemplate';
import InquireStickyButton from '@/app/product/[pid]/_components/InquireStickyButton';

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

  return (
    <>
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
    </>
  );
}
