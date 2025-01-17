import { create } from 'zustand';

const useInquireContactInfo = create<InquireContactInfoState & InquireContactInfoActions>((set) => ({
  name: '',
  contact: '',
  additionalRequest: '',
  type: '',
  setName: (name: string) => {
    set({ name });
  },
  setContact: (contact: string) => {
    set({ contact });
  },
  setAdditionalRequest: (additionalRequest: string) => {
    set({ additionalRequest });
  },
  setType: (type: string) => {
    set({ type });
  },
  reset: () => {
    set({
      name: '',
      contact: '',
      additionalRequest: '',
    });
  },
}));

export default useInquireContactInfo;
