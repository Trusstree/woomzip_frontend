import { create } from 'zustand';

interface PlanningInfoState {
  houseName: string;
  houseType: string;
  landCondition: string;
  roadCondition: string;
  area: string;
  addr: string;
  houseData: string;
}

interface PlanningInfoActions {
  setHouseName: (houseName: string) => void;
  setHouseType: (houseType: string) => void;
  setLandCondition: (landCondition: string) => void;
  setRoadCondition: (roadCondition: string) => void;
  setArea: (area: string) => void;
  setAddr: (addr: string) => void;
  setHouseData: (houseData: string) => void;
}

const useHouseInfo = create<PlanningInfoState & PlanningInfoActions>((set) => ({
  houseName:'',
  houseType:'',
  landCondition:'',
  roadCondition:'',
  area:'',
  addr:'',
  houseData:'',
  setHouseName: (houseName: string) => {
    set({ houseName });
  },
  setHouseType: (houseType: string) => {
    set({ houseType });
  },
  setLandCondition: (landCondition: string) => {
    set({ landCondition });
  },
  setRoadCondition: (roadCondition: string) => {
    set({ roadCondition });
  },
  setArea: (area: string) => {
    set({ area });
  },
  setAddr: (addr: string) => {
    set({ addr });
  },
  setHouseData: (houseData: string) => {
    set({ houseData });
  },
}));

export default useHouseInfo;
