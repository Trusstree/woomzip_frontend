import { create } from 'zustand';

type SpecificityInfoType = {
  default: Array<string>;
  etc: string;
};

interface SpecificityInfoState {
  framework: SpecificityInfoType;
  wall: SpecificityInfoType;
  exteriorMaterial: SpecificityInfoType;
  roofingMaterial: SpecificityInfoType;
  insulationMaterial: SpecificityInfoType;
  interiorMaterial: SpecificityInfoType;
  window: SpecificityInfoType;
  heating: SpecificityInfoType;
  furniture: SpecificityInfoType;
  toilet: SpecificityInfoType;
  kitchen: SpecificityInfoType;
  lighting: SpecificityInfoType;
  etcInfo: string;
  specificationDescription: string;
}

interface SpecificityInfoActions {
  setFramework: (framework: SpecificityInfoType) => void;
  setWall: (wall: SpecificityInfoType) => void;
  setExteriorMaterial: (exteriorMaterial: SpecificityInfoType) => void;
  setRoofingMaterial: (roofingMaterial: SpecificityInfoType) => void;
  setInsulationMaterial: (insulationMaterial: SpecificityInfoType) => void;
  setInteriorMaterial: (interiorMaterial: SpecificityInfoType) => void;
  setWindow: (window: SpecificityInfoType) => void;
  setHeating: (heating: SpecificityInfoType) => void;
  setFurniture: (furniture: SpecificityInfoType) => void;
  setToilet: (toilet: SpecificityInfoType) => void;
  setKitchen: (kitchen: SpecificityInfoType) => void;
  setLighting: (lighting: SpecificityInfoType) => void;
  setETCInfo: (etcInfo: string) => void;
  setSpecificationDescription: (specificationDescription: string) => void;
}

const useSpecificityInfo = create<SpecificityInfoState & SpecificityInfoActions>((set) => ({
  framework: { default: [], etc: '' },
  wall: { default: [], etc: '' },
  exteriorMaterial: { default: [], etc: '' },
  roofingMaterial: { default: [], etc: '' },
  insulationMaterial: { default: [], etc: '' },
  interiorMaterial: { default: [], etc: '' },
  window: { default: [], etc: '' },
  heating: { default: [], etc: '' },
  furniture: { default: [], etc: '' },
  toilet: { default: [], etc: '' },
  kitchen: { default: [], etc: '' },
  lighting: { default: [], etc: '' },
  etcInfo: '',
  specificationDescription: '',
  setFramework: (framework: SpecificityInfoType) => {
    set({ framework });
  },
  setWall: (wall: SpecificityInfoType) => {
    set({ wall });
  },
  setExteriorMaterial: (exteriorMaterial: SpecificityInfoType) => {
    set({ exteriorMaterial });
  },
  setRoofingMaterial: (roofingMaterial: SpecificityInfoType) => {
    set({ roofingMaterial });
  },
  setInsulationMaterial: (insulationMaterial: SpecificityInfoType) => {
    set({ insulationMaterial });
  },
  setInteriorMaterial: (interiorMaterial: SpecificityInfoType) => {
    set({ interiorMaterial });
  },
  setWindow: (window: SpecificityInfoType) => {
    set({ window });
  },
  setHeating: (heating: SpecificityInfoType) => {
    set({ heating });
  },
  setFurniture: (furniture: SpecificityInfoType) => {
    set({ furniture });
  },
  setToilet: (toilet: SpecificityInfoType) => {
    set({ toilet });
  },
  setKitchen: (kitchen: SpecificityInfoType) => {
    set({ kitchen });
  },
  setLighting: (lighting: SpecificityInfoType) => {
    set({ lighting });
  },
  setETCInfo: (etcInfo: string) => {
    set({ etcInfo });
  },
  setSpecificationDescription: (specificationDescription: string) => {
    set({ specificationDescription });
  },
}));

export default useSpecificityInfo;
