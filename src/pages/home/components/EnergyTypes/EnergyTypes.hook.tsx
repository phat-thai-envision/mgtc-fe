import { mockupEnergyData } from "./EnergyTypes.utils";
import { useEnergyTypeStore } from "./EnergyTypes.zustand";

export const useEnergyTypeSelected = () => {
  const { id } = useEnergyTypeStore();
  return mockupEnergyData.find((energyType) => energyType.id === id);
};
export const useIsEnergyTypeSelected = (energyTypeId: string) => {
  const { id } = useEnergyTypeStore();
  return energyTypeId === id;
};
