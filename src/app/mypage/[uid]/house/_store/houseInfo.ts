import { create } from 'zustand';

type SpecificityInfoType = {
  default: Array<string>;
  etc: string;
};
interface HouseInfoState {
  houseName: string;
  houseExplanation: string;
  floorCount: number;
  buildingArea: number;
  totalFloorArea: number;
  grossFloorArea: number;
  roomCount: number;
  toiletCount: number;
  estimateDuration: number;
  warranty: string;
  hasModel: number;
  isHut: number;
  basePrice: number;
  discountPrice: number;
  priceVariation: string;
  specificityInfo: SpecificityInfoType;
}

interface HouseInfoActions {
  setHouseName: (houseName: string) => void;
  setHouseExplanation: (houseExplanation: string) => void;
  setFloorCount: (floorCount: number) => void;
  setBuildingArea: (buildingArea: number) => void;
  setTotalFloorArea: (totalFloorArea: number) => void;
  setGrossFloorArea: (grossFloorArea: number) => void;
  setRoomCount: (roomCount: number) => void;
  setToiletCount: (toiletCount: number) => void;
  setEstimateDuration: (estimateDuration: number) => void;
  setWarranty: (warranty: string) => void;
  setHasModel: (hasModel: number) => void;
  setIsHut: (isHut: number) => void;
  setBasePrice: (basePrice: number) => void;
  setDiscountPrice: (discountRate: number) => void;
  setPriceVariation: (priceVariation: string) => void;
  setSpecificityInfo: (specificityInfo: SpecificityInfoType) => void;
}

const useHouseInfo = create<HouseInfoState & HouseInfoActions>((set) => ({
  houseName: '',
  houseExplanation: '',
  floorCount: 1,
  buildingArea: 0,
  totalFloorArea: 0,
  grossFloorArea: 0,
  roomCount: 1,
  toiletCount: 1,
  estimateDuration: 1,
  warranty: '없음',
  hasModel: 0,
  isHut: 0,
  basePrice: 0,
  discountPrice: 0,
  priceVariation: '',
  specificityInfo: {
    default: [],
    etc: '',
  },
  setHouseName: (houseName: string) => {
    set({ houseName });
  },
  setHouseExplanation: (houseExplanation: string) => {
    set({ houseExplanation });
  },
  setFloorCount: (floorCount: number) => {
    set({ floorCount });
  },
  setBuildingArea: (buildingArea: number) => {
    set({ buildingArea });
  },
  setTotalFloorArea: (totalFloorArea: number) => {
    set({ totalFloorArea });
  },
  setGrossFloorArea: (grossFloorArea: number) => {
    set({ grossFloorArea });
  },
  setRoomCount: (roomCount: number) => {
    set({ roomCount });
  },
  setToiletCount: (toiletCount: number) => {
    set({ toiletCount });
  },
  setEstimateDuration: (estimateDuration: number) => {
    set({ estimateDuration });
  },
  setWarranty: (warranty: string) => {
    set({ warranty });
  },
  setHasModel: (hasModel: number) => {
    set({ hasModel });
  },
  setIsHut: (isHut: number) => {
    set({ isHut });
  },
  setBasePrice: (basePrice: number) => {
    set({ basePrice });
  },
  setDiscountPrice: (discountPrice: number) => {
    set({ discountPrice });
  },
  setPriceVariation: (priceVariation: string) => {
    set({ priceVariation });
  },
  setSpecificityInfo: (specificityInfo: SpecificityInfoType) => {
    set({ specificityInfo });
  },
}));

export default useHouseInfo;
