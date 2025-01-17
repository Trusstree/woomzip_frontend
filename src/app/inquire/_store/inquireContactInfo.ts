import { create } from 'zustand';

const useInquireContactInfo = create<InquireContactInfoState & InquireContactInfoActions>((set) => ({
  name: '',
  contact: '',
  additionalRequest: '',
  setName: (name: string) => {
    set({ name });
  },
  setContact: (contact: string) => {
    set({ contact });
  },
  setAdditionalRequest: (additionalRequest: string) => {
    set({ additionalRequest });
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
