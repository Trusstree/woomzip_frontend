import HouseExpl from '@/app/house/[pid]/_components/HouseExpl';
import HouseRemocon from '@/app/house/[pid]/_components/HouseRemocon';
import styles from '@/app/house/[pid]/_styles/HouseClient.module.css';
import { ReviewModal } from '@/components/house/ReviewModal';
import { loadData } from '@/app/house/[pid]/_actions/actions';
import LoadPage from '@/components/app/LoadPage';
import HeartComponent from '@/components/posts/HeartComponent';
import { getHouseHeartUser, postHouseHeart, postHouseHeartRemove } from '@/actions/apis/heartAPI';
import { detailPriceText } from '@/lib/stringUtil';
import { parseSpecificationInfo } from '@/lib/parseUtil';
import Image from 'next/image';
import { subtle } from 'crypto';

import ResponsiveGallery from '@/app/housecopy/[pid]/_components/ResponsiveGallery';
import BasicDataList from '@/app/housecopy/[pid]/_components/BasicDataList';
import ExplanationList from '@/app/housecopy/[pid]/_components/ExplanationList';
import DetailDataList from '@/app/housecopy/[pid]/_components/DetailDataList';
import OptionDataList from '@/app/housecopy/[pid]/_components/OptionDataList';
import DeliveryDataList from '@/app/housecopy/[pid]/_components/DeliveryDataList';
import Tazan from '@/app/housecopy/[pid]/_components/Tazan';
import CompanyDataList from '@/app/housecopy/[pid]/_components/CompanyDataList';
import CallWoomzip from '@/app/housecopy/[pid]/_components/CallWoomzip';

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
