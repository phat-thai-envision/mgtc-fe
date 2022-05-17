import { sankey, SankeyLayout } from "d3-sankey";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { format } from "d3-format";

import { SankeyData, SankeyDataLink, SankeyDataNode } from "./data";
import { RectNode } from "./SankeyRect";
import { PathLink } from "./SankeyLink";

const d3Color = scaleOrdinal(schemeCategory10);

export const colorRectFunc = (dataPoint: RectNode) =>
  d3Color(dataPoint.category || dataPoint.name);

export const colorLinkFunc = (dataPoint: PathLink | any) => {
  const name =
    typeof dataPoint.target === "object"
      ? dataPoint.target.name
      : dataPoint.target;
  return d3Color(name);
};

const d3format = format(",.0f");

export const formatRectTitleFunc = (dataPoint: RectNode) => {
  if (!dataPoint.value) return dataPoint.name;

  return `${dataPoint.name}\n${d3format(dataPoint.value)} TWh`;
};

export const formatLinkTitleFunc = ({
  source,
  target,
  value,
}: PathLink | any): string => {
  const sourceName = typeof source === "object" ? source.name : source;
  const targetName = typeof target === "object" ? target.name : target;

  return `${sourceName} → ${targetName}\n${d3format(value)}`;
};

interface MakeSankeyInput {
  width: number;
  height: number;
}

export const makeSankeyFunc = ({
  width,
  height,
}: MakeSankeyInput): SankeyLayout<
  SankeyData,
  SankeyDataNode,
  SankeyDataLink
> => {
  const sankeyGen = sankey<SankeyDataNode, SankeyDataLink>()
    .nodeId((d) => d.name)
    .nodeWidth(15)
    .nodePadding(10)
    .extent([
      [1, 5],
      [width - 1, height - 5],
    ]);

  return sankeyGen;
};
