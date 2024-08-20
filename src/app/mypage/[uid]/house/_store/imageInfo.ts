import { create } from 'zustand';

interface ImageInfoState {
  representativeImage: Array<string>;
  externalImages: Array<string>;
  internalImages: Array<string>;
  floorPlanImages: Array<string>;
  elevationPlanImages: Array<string>;
}

interface ImageInfoActions {
  setRepresentativeImage: (representativeImage: Array<string>) => void;
  setExternalImages: (externalImages: Array<string>) => void;
  setInternalImages: (internalImages: Array<string>) => void;
  setFloorPlanImages: (floorPlanImages: Array<string>) => void;
  setElevationPlanImages: (elevationPlanImages: Array<string>) => void;
}

const useImageInfo = create<ImageInfoState & ImageInfoActions>((set) => ({
  representativeImage: [],
  externalImages: [],
  internalImages: [],
  floorPlanImages: [],
  elevationPlanImages: [],
  setRepresentativeImage: (representativeImage: Array<string>) => set({ representativeImage }),
  setExternalImages: (externalImages: Array<string>) => set({ externalImages }),
  setInternalImages: (internalImages: Array<string>) => set({ internalImages }),
  setFloorPlanImages: (floorPlanImages: Array<string>) => set({ floorPlanImages }),
  setElevationPlanImages: (elevationPlanImages: Array<string>) => set({ elevationPlanImages }),
}));

export default useImageInfo;
