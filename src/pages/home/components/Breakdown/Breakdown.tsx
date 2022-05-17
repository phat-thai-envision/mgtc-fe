import React from "react";
import { homeStyles } from "pages/home";
import { useEnergyTypeSelected } from "pages/home/components/EnergyTypes";
import XYChart, {
  Bar,
  Grid,
  Stack,
  TimeAxis,
  YAxis,
} from "@citydev/ui-library/lib/components/XYChart";
import {
  useTimeScale,
  useYScale,
} from "@citydev/ui-library/lib/components/XYChart/hooks";
import useResizeObserver from "@citydev/ui-library/lib/hooks/useResizeObserver";
import {
  StackableChartProps,
  XYValue,
} from "@citydev/ui-library/lib/components/XYChart/utils";
import XScrollViewport from "@citydev/ui-library/lib/components/XYChart/components/XScrollViewport";
import {
  GradientColorCode,
  SolidColor,
} from "@citydev/ui-library/lib/components/GradientManager/preset";

const data: XYValue[] = [
  { x: 1643648400000, y: 0.3645859193305713 },
  { x: 1651338000000, y: 0 },
  { x: 1640970000000, y: 0.4069179064227433 },
  { x: 1646067600000, y: 0.40576014520087367 },
  { x: 1648746000000, y: 0.07807692288737168 },
  { x: 1643648400000, y: 1.650736070774402 },
  { x: 1651338000000, y: 0.002166831294712075 },
  { x: 1640970000000, y: 1.796869033918902 },
  { x: 1646067600000, y: 1.855116445277341 },
  { x: 1648746000000, y: 0.35401939769306423 },
  { x: 1643648400000, y: 4.046533397413218 },
  { x: 1651338000000, y: 0 },
  { x: 1640970000000, y: 4.396229185553541 },
  { x: 1646067600000, y: 4.378630771051088 },
  { x: 1648746000000, y: 0.8796922673776586 },
  { x: 1640970000000, y: 6.606436919540448 },
  { x: 1643648400000, y: 6.034767605738606 },
  { x: 1646067600000, y: 6.680871633921675 },
  { x: 1648746000000, y: 6.467646974587256 },
  { x: 1651338000000, y: 6.634382049162342 },
  { x: 1654016400000, y: 6.554062909809247 },
  { x: 1656608400000, y: 6.581196157511728 },
  { x: 1659286800000, y: 6.641482054515809 },
  { x: 1661965200000, y: 6.425928261392592 },
  { x: 1664557200000, y: 6.738107393392265 },
  { x: 1667235600000, y: 6.410170291582134 },
  { x: 1669827600000, y: 6.640689445379065 },
];

export const energyUsageDataSets = [
  {
    label: "HVAC",
    color: "#0a6efa" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 25,
      },
      {
        x: 1605549600000,
        y: 25,
      },
      {
        x: 1605553200000,
        y: 25,
      },
      {
        x: 1605556800000,
        y: 25,
      },
      {
        x: 1605560400000,
        y: 25,
      },
      {
        x: 1605564000000,
        y: 25,
      },
      {
        x: 1605567600000,
        y: 25,
      },
      {
        x: 1605571200000,
        y: 25,
      },
      {
        x: 1605574800000,
        y: 600,
      },
      {
        x: 1605578400000,
        y: 550,
      },
      {
        x: 1605582000000,
        y: 600,
      },
      {
        x: 1605585600000,
        y: 550,
      },
      {
        x: 1605589200000,
        y: 600,
      },
      {
        x: 1605592800000,
        y: 500,
      },
      {
        x: 1605596400000,
        y: 600,
      },
      {
        x: 1605600000000,
        y: 600,
      },
    ],
  },
  {
    label: "Tenant",
    color: "#0cce6b" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 100,
      },
      {
        x: 1605549600000,
        y: 40,
      },
      {
        x: 1605553200000,
        y: 100,
      },
      {
        x: 1605556800000,
        y: 100,
      },
      {
        x: 1605560400000,
        y: 100,
      },
      {
        x: 1605564000000,
        y: 100,
      },
      {
        x: 1605567600000,
        y: 175,
      },
      {
        x: 1605571200000,
        y: 375,
      },
      {
        x: 1605574800000,
        y: 375,
      },
      {
        x: 1605578400000,
        y: 390,
      },
      {
        x: 1605582000000,
        y: 375,
      },
      {
        x: 1605585600000,
        y: 390,
      },
      {
        x: 1605589200000,
        y: 375,
      },
      {
        x: 1605592800000,
        y: 375,
      },
      {
        x: 1605596400000,
        y: 390,
      },
      {
        x: 1605600000000,
        y: 390,
      },
    ],
  },
  {
    label: "Lift",
    color: "#faae0a" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 0,
      },
      {
        x: 1605549600000,
        y: 0,
      },
      {
        x: 1605553200000,
        y: 0,
      },
      {
        x: 1605556800000,
        y: 0,
      },
      {
        x: 1605560400000,
        y: 0,
      },
      {
        x: 1605564000000,
        y: 0,
      },
      {
        x: 1605567600000,
        y: 0,
      },
      {
        x: 1605571200000,
        y: 0,
      },
      {
        x: 1605574800000,
        y: 30,
      },
      {
        x: 1605578400000,
        y: 30,
      },
      {
        x: 1605582000000,
        y: 30,
      },
      {
        x: 1605585600000,
        y: 30,
      },
      {
        x: 1605589200000,
        y: 30,
      },
      {
        x: 1605592800000,
        y: 30,
      },
      {
        x: 1605596400000,
        y: 30,
      },
      {
        x: 1605600000000,
        y: 30,
      },
    ],
  },
  {
    label: "Escalator",
    color: "#d7263d" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 30,
      },
      {
        x: 1605549600000,
        y: 30,
      },
      {
        x: 1605553200000,
        y: 30,
      },
      {
        x: 1605556800000,
        y: 30,
      },
      {
        x: 1605560400000,
        y: 30,
      },
      {
        x: 1605564000000,
        y: 30,
      },
      {
        x: 1605567600000,
        y: 30,
      },
      {
        x: 1605571200000,
        y: 30,
      },
      {
        x: 1605574800000,
        y: 30,
      },
      {
        x: 1605578400000,
        y: 30,
      },
      {
        x: 1605582000000,
        y: 30,
      },
      {
        x: 1605585600000,
        y: 30,
      },
      {
        x: 1605589200000,
        y: 30,
      },
      {
        x: 1605592800000,
        y: 30,
      },
      {
        x: 1605596400000,
        y: 30,
      },
      {
        x: 1605600000000,
        y: 30,
      },
    ],
  },
  {
    label: "Lighting",
    color: "#8432ff" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 30,
      },
      {
        x: 1605549600000,
        y: 30,
      },
      {
        x: 1605553200000,
        y: 30,
      },
      {
        x: 1605556800000,
        y: 30,
      },
      {
        x: 1605560400000,
        y: 30,
      },
      {
        x: 1605564000000,
        y: 30,
      },
      {
        x: 1605567600000,
        y: 30,
      },
      {
        x: 1605571200000,
        y: 30,
      },
      {
        x: 1605574800000,
        y: 30,
      },
      {
        x: 1605578400000,
        y: 30,
      },
      {
        x: 1605582000000,
        y: 30,
      },
      {
        x: 1605585600000,
        y: 30,
      },
      {
        x: 1605589200000,
        y: 30,
      },
      {
        x: 1605592800000,
        y: 30,
      },
      {
        x: 1605596400000,
        y: 30,
      },
      {
        x: 1605600000000,
        y: 30,
      },
    ],
  },
  {
    label: "Common L&P",
    color: "#63a2fb" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 0,
      },
      {
        x: 1605549600000,
        y: 0,
      },
      {
        x: 1605553200000,
        y: 0,
      },
      {
        x: 1605556800000,
        y: 0,
      },
      {
        x: 1605560400000,
        y: 0,
      },
      {
        x: 1605564000000,
        y: 0,
      },
      {
        x: 1605567600000,
        y: 0,
      },
      {
        x: 1605571200000,
        y: 0,
      },
      {
        x: 1605574800000,
        y: 0,
      },
      {
        x: 1605578400000,
        y: 30,
      },
      {
        x: 1605582000000,
        y: 30,
      },
      {
        x: 1605585600000,
        y: 30,
      },
      {
        x: 1605589200000,
        y: 30,
      },
      {
        x: 1605592800000,
        y: 0,
      },
      {
        x: 1605596400000,
        y: 0,
      },
      {
        x: 1605600000000,
        y: 0,
      },
    ],
  },
  {
    label: "Others",
    color: "#df6c23" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 0,
      },
      {
        x: 1605549600000,
        y: 0,
      },
      {
        x: 1605553200000,
        y: 0,
      },
      {
        x: 1605556800000,
        y: 0,
      },
      {
        x: 1605560400000,
        y: 0,
      },
      {
        x: 1605564000000,
        y: 0,
      },
      {
        x: 1605567600000,
        y: 0,
      },
      {
        x: 1605571200000,
        y: 0,
      },
      {
        x: 1605574800000,
        y: 0,
      },
      {
        x: 1605578400000,
        y: 30,
      },
      {
        x: 1605582000000,
        y: 30,
      },
      {
        x: 1605585600000,
        y: 30,
      },
      {
        x: 1605589200000,
        y: 30,
      },
      {
        x: 1605592800000,
        y: 0,
      },
      {
        x: 1605596400000,
        y: 0,
      },
      {
        x: 1605600000000,
        y: 0,
      },
    ],
  },
  {
    label: "Un-metered",
    color: "#3e3e47" as SolidColor,
    data: [
      {
        x: 1605546000000,
        y: 0,
      },
      {
        x: 1605549600000,
        y: 0,
      },
      {
        x: 1605553200000,
        y: 0,
      },
      {
        x: 1605556800000,
        y: 0,
      },
      {
        x: 1605560400000,
        y: 0,
      },
      {
        x: 1605564000000,
        y: 0,
      },
      {
        x: 1605567600000,
        y: 0,
      },
      {
        x: 1605571200000,
        y: 0,
      },
      {
        x: 1605574800000,
        y: 0,
      },
      {
        x: 1605578400000,
        y: 0,
      },
      {
        x: 1605582000000,
        y: 0,
      },
      {
        x: 1605585600000,
        y: 0,
      },
      {
        x: 1605589200000,
        y: 0,
      },
      {
        x: 1605592800000,
        y: 0,
      },
      {
        x: 1605596400000,
        y: 0,
      },
      {
        x: 1605600000000,
        y: 0,
      },
    ],
  },
];
export const legendLabelOrder = [
  "HVAC",
  "Tenant",
  "Lift",
  "Escalator",
  "Lighting",
  "Common L&P",
  "Others",
  "Un-metered",
  "Prediction",
  "Comparison",
];

const tickCount = 8;

const unit = "kWh";

export const timeAxisFrequency = "Per hour";

export const XYChartCustom: React.FC<any> = (props: any) => (
  <XYChart {...props} />
);
const Breakdown = () => {
  const energyType = useEnergyTypeSelected();
  const { width, setElementRef } = useResizeObserver();
  const chartXScale = useTimeScale(data);
  const chartYScale = useYScale({
    data,
    minY: 0,
  });
  if (!energyType) {
    return null;
  }
  const { id } = energyType;
  return (
    <div className={homeStyles.rightColHook}>
      <div className={homeStyles.rightColTitle}>{`${id} Breakdown`}</div>
    </div>
  );
};

export default React.memo(Breakdown);
