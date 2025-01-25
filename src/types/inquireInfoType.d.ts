interface InquireProductInfoState {
  productData: ApiProductData;
  isLandOwner: boolean;
  purpose: string;
  location: string;
  landArea: string;
  landSlope: string;
  landAccess: string;
}

interface InquireServiceInfoState {
  helpType: string;
  startPlan: string;
  priority: string;
  budget: number;
}

interface InquireContactInfoState {
  name: string;
  contact: string;
  additionalRequest: string;
  responseType: string;
}

interface InquireProductInfoActions {
  setProductData: (productData: any) => void;
  setIsLandOwner: (isLandOwner: boolean) => void;
  setPurpose: (purpose: string) => void;
  setLocation: (location: string) => void;
  setLandArea: (landArea: string) => void;
  setLandSlope: (landSlope: string) => void;
  setLandAccess: (landAccess: string) => void;
  initProduct: () => void;
  resetProduct: () => void;
}

interface InquireServiceInfoActions {
  setHelpType: (helpType: string) => void;
  setStartPlan: (startPlan: string) => void;
  setPriority: (priority: string) => void;
  setBudget: (budget: number) => void;
  initService: () => void;
  resetService: () => void;
}

interface InquireContactInfoActions {
  setName: (name: string) => void;
  setContact: (contact: string) => void;
  setAdditionalRequest: (additionalRequest: string) => void;
  setResponseType: (responseType: string) => void;
  initContact: () => void;
  resetContact: () => void;
}
