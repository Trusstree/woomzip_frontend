import { create } from 'zustand';

const useInquireServiceInfo = create<InquireServiceInfoState & InquireServiceInfoActions>((set) => ({
  helpType: '',
  startPlan: '',
  priority: '',
  budget: 0,
  setHelpType: (helpType: string) => {
    set({ helpType });
  },
  setStartPlan: (startPlan: string) => {
    set({ startPlan });
  },
  setPriority: (priority: string) => {
    set({ priority });
  },
  setBudget: (budget: number) => {
    set({ budget });
  },
  reset: () => {
    set({
      helpType: '',
      startPlan: '',
      priority: '',
      budget: 0,
    });
  },
}));

export default useInquireServiceInfo;
