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
  reset: () => {
    set({
      helpType: 'SIMPLE_INQUIRY',
      startPlan: 'ASAP',
      priority: 'COST_EFFICIENCY',
      budget: 40_000_000,
    });
  },
}));

export default useInquireServiceInfo;
