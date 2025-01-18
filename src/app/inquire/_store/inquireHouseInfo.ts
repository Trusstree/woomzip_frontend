import { create } from 'zustand';
interface InquireHouseInfoActions {
  setIsLandOwner: (isLandOwner: boolean) => void;
  setPurpose: (purpose: string) => void;
  setLocation: (location: string) => void;
  setLandArea: (landArea: string) => void;
  setLandSlope: (landSlope: string) => void;
  setLandAccess: (landAccess: string) => void;
  reset: () => void;
}

const useInquireHouseInfo = create<InquireHouseInfoState & InquireHouseInfoActions>((set) => ({
  isLandOwner: true,
  purpose: 'HOUSE',
  location: 'SEOUL',
  landArea: 'UNDER_100',
  landSlope: 'FLAT',
  landAccess: 'WIDE',
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
  reset: () => {
    set({
      isLandOwner: true,
      purpose: 'HOUSE',
      location: 'SEOUL',
      landArea: 'UNDER_100',
      landSlope: 'FLAT',
      landAccess: 'WIDE',
    });
  },
}));

export default useInquireHouseInfo;
