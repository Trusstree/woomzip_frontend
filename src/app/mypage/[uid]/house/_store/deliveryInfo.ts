import { create } from 'zustand';

interface DeliveryInfoState {
  deliveryInfo: Array<string>;
}

interface DeliveryInfoActions {
  setDeliveryInfo: (deliveryInfo: Array<string>) => void;
}

const useDeliveryInfo = create<DeliveryInfoState & DeliveryInfoActions>((set) => ({
  deliveryInfo: [],
  setDeliveryInfo: (deliveryInfo: Array<string>) => set({ deliveryInfo }),
}));

export default useDeliveryInfo;
