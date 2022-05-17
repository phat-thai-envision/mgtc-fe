import { createStore } from "zustand-store";

interface EnergyTypeState {
  id: string;
}

interface EnergyTypeActions {
  setEnergyTypeId: (id: string) => void;
}

const initialState: EnergyTypeState = {
  id: "Carbon Emission",
};

export const [useEnergyTypeStore] = createStore<
  EnergyTypeState & EnergyTypeActions
>(
  (set) => ({
    ...initialState,
    setEnergyTypeId: (id) => set({ id }),
  }),
  "useEnergyTypeStore"
);
