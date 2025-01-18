import { create } from 'zustand';

const useInquireContactInfo = create<InquireContactInfoState & InquireContactInfoActions>((set) => ({
  name: '',
  contact: '',
  additionalRequest: '',
  responseType: 'CALL',
  setName: (name: string) => {
    set({ name });
  },
  setContact: (contact: string) => {
    set({ contact });
  },
  setAdditionalRequest: (additionalRequest: string) => {
    set({ additionalRequest });
  },
  setResponseType: (responseType: string) => {
    set({ responseType });
  },
  initContact: () => {
    set({
      name: '',
      contact: '',
      additionalRequest: 'CALL',
    });
  },
  resetContact: () => {
    set({
      name: '',
      contact: '',
      additionalRequest: 'CALL',
    });
  },
}));

export default useInquireContactInfo;
