import { create } from 'zustand';

const useInquireProductInfo = create<InquireProductInfoState & InquireProductInfoActions>((set) => ({
  productData: null,
  isLandOwner: true,
  purpose: 'HOUSE',
  location: 'SEOUL',
  landArea: 'UNDER_100',
  landSlope: 'FLAT',
  landAccess: 'WIDE',
  setProductData: (productData: any) => {
    set({ productData });
  },
  setIsLandOwner: (isLandOwner: boolean) => {
    set({ isLandOwner });
  },
  setPurpose: (purpose: string) => {
    set({ purpose });
  },
  setLocation: (location: string) => {
    set({ location });
  },
  setLandArea: (landArea: string) => {
    set({ landArea });
  },
  setLandSlope: (landSlope: string) => {
    set({ landSlope });
  },
  setLandAccess: (landAccess: string) => {
    set({ landAccess });
  },
  initProduct: () => {
    set({
      productData: null,
      isLandOwner: true,
      purpose: 'HOUSE',
      location: 'SEOUL',
      landArea: 'UNDER_100',
      landSlope: 'FLAT',
      landAccess: 'WIDE',
    });
  },
  resetProduct: () => {
    set({
      productData: null,
      isLandOwner: true,
      purpose: '',
      location: '',
      landArea: '',
      landSlope: '',
      landAccess: '',
    });
  },
}));

export default useInquireProductInfo;
