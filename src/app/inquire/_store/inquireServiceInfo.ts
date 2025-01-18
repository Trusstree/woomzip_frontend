import { create } from 'zustand';

const useInquireServiceInfo = create<InquireServiceInfoState & InquireServiceInfoActions>((set) => ({
  helpType: 'SIMPLE_INQUIRY',
  startPlan: 'ASAP',
  priority: 'COST_EFFICIENCY',
  budget: 40_000_000,
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
  initService: () => {
    set({
      helpType: 'SIMPLE_INQUIRY',
      startPlan: 'ASAP',
      priority: 'COST_EFFICIENCY',
      budget: 40_000_000,
    });
  },
  resetService: () => {
    set({
      helpType: '',
      startPlan: '',
      priority: '',
      budget: 0,
    });
  },
}));

export default useInquireServiceInfo;
