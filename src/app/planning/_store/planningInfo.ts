import { create } from 'zustand';

interface PlanningInfoState {
  page: string;
  houseName: string;
  houseType: string;
  landCondition: string;
  roadCondition: string;
  area: string;
  addr: string;
  houseData: string;
  requiredService: string;
  timeline: string;
  finance: string;
  name: string;
  contact: string;
  text: string;
}

interface PlanningInfoActions {
  setPage: (page: string) => void;
  setHouseName: (houseName: string) => void;
  setHouseType: (houseType: string) => void;
  setLandCondition: (landCondition: string) => void;
  setRoadCondition: (roadCondition: string) => void;
  setArea: (area: string) => void;
  setAddr: (addr: string) => void;
  setHouseData: (houseData: string) => void;
  setRequiredService: (requiredService: string) => void;
  setTimeline: (timeline: string) => void;
  setFinance: (finance: string) => void;
  setName: (name: string) => void;
  setContact: (contact: string) => void;
  setText: (text: string) => void;
  reset: () => void;
}

const usePlanningInfo = create<PlanningInfoState & PlanningInfoActions>((set) => ({
  page: 'house',
  houseName: '',
  houseType: '',
  landCondition: '',
  roadCondition: '',
  area: '',
  addr: '',
  houseData: '',
  requiredService: '',
  timeline: '',
  finance: '',
  name: '',
  contact: '',
  text: '',
  setPage: (page: string) => {
    set({ page });
  },
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
  setRequiredService: (requiredService: string) => {
    set({ requiredService });
  },
  setTimeline: (timeline: string) => {
    set({ timeline });
  },
  setFinance: (finance: string) => {
    set({ finance });
  },
  setName: (name: string) => {
    set({ name });
  },
  setContact: (contact: string) => {
    set({ contact });
  },
  setText: (text: string) => {
    set({ text });
  },
  reset: () => {
    set({
      page: 'house',
      houseName: '',
      houseType: '',
      landCondition: '',
      roadCondition: '',
      area: '',
      addr: '',
      houseData: '',
      requiredService: '',
      timeline: '',
      finance: '',
      name: '',
      contact: '',
      text: '',
    });
  },
}));

export default usePlanningInfo;
