import { ReviewModal } from '@/components/house/ReviewModal';
import { loadData } from '@/app/house/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';
import ResponsiveGallery from '@/app/house/[pid]/_components/ResponsiveGallery';
import BasicDataList from '@/app/house/[pid]/_components/BasicDataList';
import ExplanationList from '@/app/house/[pid]/_components/ExplanationList';
import DetailDataList from '@/app/house/[pid]/_components/DetailDataList';
import OptionDataList from '@/app/house/[pid]/_components/OptionDataList';
import DeliveryDataList from '@/app/house/[pid]/_components/DeliveryDataList';
import Tazan from '@/app/house/[pid]/_components/Tazan';
import CompanyDataList from '@/app/house/[pid]/_components/CompanyDataList';
import CallWoomzip from '@/app/house/[pid]/_components/CallWoomzip';

type PageParams = {
  pid: number;
};

export default async function House({ params }: { params: PageParams }) {
  const { pid } = params;
  const { houseData, imageData, optionData, specificationData, userData, reviewData, deliveryData } =
    await loadData(pid);

  return houseData ? (
    <>
      <div style={{ width: '90%', maxWidth: '1280px', margin: '0 auto' }}>
        <ResponsiveGallery pid={pid} imageData={imageData} />
        <BasicDataList pid={pid} houseData={houseData} specificationData={specificationData} />
        <ExplanationList pid={pid} houseData={houseData} />
        <DetailDataList pid={pid} houseData={houseData} specificationData={specificationData} />
        <OptionDataList pid={pid} houseData={houseData} optionData={optionData} />
        <DeliveryDataList pid={pid} houseData={houseData} deliveryData={deliveryData} />
        <Tazan pid={pid} houseData={houseData} />
        <CompanyDataList pid={pid} houseData={houseData} userData={userData} />
      </div>
      <CallWoomzip pid={pid} houseData={houseData} />
      <ReviewModal id={'house_detail_modal'} images={imageData} isTwoCol />
    </>
  ) : (
    <LoadPage />
  );
}
