import { create } from 'zustand';

type OptionInfoType = {
  option_type: string;
  option_product_name: string;
  option_product_price: number;
};

interface OptionInfoState {
  optionInfo: Array<OptionInfoType>;
}

interface OptionInfoActions {
  setOptionInfo: (optionInfo: Array<OptionInfoType>) => void;
}

const useOptionInfo = create<OptionInfoState & OptionInfoActions>((set) => ({
  optionInfo: [],
  setOptionInfo: (optionInfo: Array<OptionInfoType>) => set({ optionInfo }),
}));

export default useOptionInfo;
