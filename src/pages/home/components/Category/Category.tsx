import React from "react";
import cx from "classnames";
import BarGroup, {
  BarGroupItem,
  BarGroupProps,
} from "@citydev/ui-library/lib/components/BarGroup";
import { homeStyles } from "pages/home";
import { useEnergyTypeSelected } from "pages/home/components/EnergyTypes";
import styles from "./Category.styles.module.scss";

interface IBarGroupCustom extends BarGroupProps {
  children: React.ReactNode | React.ReactElement | any;
}

export interface ICategory {
  label: string;
  value: number;
  unit: string;
}

export const mockupCategoryDate: ICategory[] = [
  {
    label: "HJ5#JH03NB02",
    unit: "kWh",
  },
  {
    label: "HJ4#JH03NB02",
    unit: "kWh",
  },

  {
    label: "HJ3#JH03NB02",
    unit: "kWh",
  },
  {
    label: "HJ2#JH03NB02",
    unit: "kWh",
  },
  {
    label: "HJ1#JH03NB02",
    unit: "kWh",
  },
].map((item, index, arr) => ({
  ...item,
  value: 1e4 * (1 - index / arr.length),
}));

export const BarGroupCustom: React.FC<IBarGroupCustom> = (
  props: IBarGroupCustom
) => <BarGroup {...props} />;

const Category = () => {
  const energyType = useEnergyTypeSelected();
  if (!energyType) {
    return null;
  }
  const { id } = energyType;
  return (
    <div className={homeStyles.rightColHook}>
      <div className={homeStyles.rightColTitle}>{`${id} Categories`}</div>
      <div className={homeStyles.rightColSub}>
        <BarGroupCustom truncationLength={25} truncation="end" toFixed={1}>
          {mockupCategoryDate.map(({ label, value, unit }) => (
            <BarGroupItem
              title={label}
              titleClassName={cx(styles.barGroupLabel)}
              value={value}
              key={label}
              unit={unit}
              className={cx(styles.barGroupItemYellow)}
            />
          ))}
        </BarGroupCustom>
      </div>
    </div>
  );
};

export default Category;
