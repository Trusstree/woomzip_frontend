import { create } from 'zustand';

interface HouseInfoState {
  houseName: string;
  houseExplanation: string;
  floorCount: string;
  buildingArea: string;
  totalFloorArea: string;
  grossFloorArea: string;
  roomCount: string;
  toiletCount: string;
  estimateDuration: string;
  warranty: string;
  hasModel: string;
  isHut: string;
  basePrice: string;
  discountPrice: string;
  priceVariation: string;
  specificityInfo: {default: Array<string>};
}

interface HouseInfoActions {
  setHouseName: (houseName: string) => void;
  setHouseExplanation: (houseExplanation: string) => void;
  setFloorCount: (floorCount: string) => void;
  setBuildingArea: (buildingArea: string) => void;
  setTotalFloorArea: (totalFloorArea: string) => void;
  setGrossFloorArea: (grossFloorArea: string) => void;
  setRoomCount: (roomCount: string) => void;
  setToiletCount: (toiletCount: string) => void;
  setEstimateDuration: (estimateDuration: string) => void;
  setWarranty: (warranty: string) => void;
  setHasModel: (hasModel: string) => void;
  setIsHut: (isHut: string) => void;
  setBasePrice: (basePrice: string) => void;
  setDiscountPrice: (discountPrice: string) => void;
  setPriceVariation: (priceVariation: string) => void;
  setSpecificityInfo: (specificityInfo: {default: Array<string>}) => void;
}

const useHouseInfo = create<HouseInfoState & HouseInfoActions>((set) => ({
  houseName: '',
  houseExplanation: '',
  floorCount: '1',
  buildingArea: '',
  totalFloorArea: '',
  grossFloorArea: '',
  roomCount: '1',
  toiletCount: '1',
  estimateDuration: '1',
  warranty: '없음',
  hasModel: '0',
  isHut: '0',
  basePrice: '',
  discountPrice: '',
  priceVariation: '',
  specificityInfo: {default: []},
  setHouseName: (houseName: string) => {
    set({ houseName });
  },
  setHouseExplanation: (houseExplanation: string) => {
    set({ houseExplanation });
  },
  setFloorCount: (floorCount: string) => {
    set({ floorCount });
  },
  setBuildingArea: (buildingArea: string) => {
    set({ buildingArea });
  },
  setTotalFloorArea: (totalFloorArea: string) => {
    set({ totalFloorArea });
  },
  setGrossFloorArea: (grossFloorArea: string) => {
    set({ grossFloorArea });
  },
  setRoomCount: (roomCount: string) => {
    set({ roomCount });
  },
  setToiletCount: (toiletCount: string) => {
    set({ toiletCount });
  },
  setEstimateDuration: (estimateDuration: string) => {
    set({ estimateDuration });
  },
  setWarranty: (warranty: string) => {
    set({ warranty });
  },
  setHasModel: (hasModel: string) => {
    set({ hasModel });
  },
  setIsHut: (isHut: string) => {
    set({ isHut });
  },
  setBasePrice: (basePrice: string) => {
    set({ basePrice });
  },
  setDiscountPrice: (discountPrice: string) => {
    set({ discountPrice });
  },
  setPriceVariation: (priceVariation: string) => {
    set({ priceVariation });
  },
  setSpecificityInfo: (specificityInfo: {default: Array<string>}) => {
    set({ specificityInfo });
  },
}));

export default useHouseInfo;
