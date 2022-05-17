import React from "react";
import cx from "classnames";
import { IEnergy } from "./EnergyTypes.utils";
import { useIsEnergyTypeSelected } from "./EnergyTypes.hook";
import { useEnergyTypeStore } from "./EnergyTypes.zustand";
import styles from "./EnergyTypes.styles.module.scss";

const Item: React.FC<IEnergy> = (props: IEnergy) => {
  const { id, value, valueIntensity } = props;
  const { setEnergyTypeId } = useEnergyTypeStore();
  const isSelected = useIsEnergyTypeSelected(id);
  return (
    <button
      className={cx(styles.energyType, isSelected && styles.energyTypeSelected)}
      type="button"
      onClick={() => setEnergyTypeId(id)}
    >
      <div className={styles.energyTypeId}>{id}</div>
      <div className={styles.energyTypeValue}>{value}</div>
      <div className={styles.energyTypeIntensity}>{valueIntensity}</div>
    </button>
  );
};

export default Item;
