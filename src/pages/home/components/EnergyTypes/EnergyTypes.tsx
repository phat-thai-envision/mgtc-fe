import React from "react";
import Item from "./EnergyTypes.item";
import { mockupEnergyData } from "./EnergyTypes.utils";

const EnergyTypes = () => (
  <>
    {mockupEnergyData.map((item) => (
      <Item {...item} key={item.id} />
    ))}
  </>
);

export default EnergyTypes;
