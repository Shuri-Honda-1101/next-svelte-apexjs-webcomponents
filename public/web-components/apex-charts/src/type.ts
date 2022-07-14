export interface ChartLegend {
  show?: boolean;
  position?: string;
  horizontalAlign?: string;
  verticalAlign?: string;
  floating?: boolean;
  fontSize?: string;
  offsetX?: number;
  offsetY?: number;
  formatter?: any;
  textAnchor?: string;
  labels?: {
    foreColor?: string;
    useSeriesColors?: boolean;
    colors?: string[];
  };
  markers?: {
    size?: number;
    strokeColor?: string;
    strokeWidth?: number;
    offsetX?: number;
    offsetY?: number;
    radius?: number;
    shape?: string;
    fillColors?: string[];
  };
  itemMargin?: {
    horizontal?: number;
    vertical?: number;
  };
  containerMargin?: {
    left?: number;
    top?: number;
  };
  onItemClick?: {
    toggleDataSeries?: boolean;
  };
  onItemHover?: {
    highlightDataSeries?: boolean;
  };
}

export interface ChartConfig {
  height?: number;
  width?: number;
  type?: string;
  shadow?: {
    enabled?: boolean;
    color?: string;
    top?: number;
    left?: number;
    blur?: number;
    opacity?: number;
  };
  zoom?: {
    enabled?: boolean;
  };
  stacked?: boolean;
  stackType?: string;
  animations?: {
    enabled?: boolean;
  };
  toolbar?: {
    show?: boolean;
    tools?: {
      download?: boolean;
      selection?: boolean;
      zoom?: boolean;
      zoomin?: boolean;
      zoomout?: boolean;
      pan?: boolean;
      reset?: boolean;
    };
  };
  selection?: {
    enabled?: boolean;
  };
}

export interface ChartSeries {
  name?: string;
  data?: number[];
  type?: string;
}

export interface ChartRow {
  colors?: string[];
  opacity?: number;
}

export interface Yaxis {
  opposite?: boolean;
  axisTicks?: {
    show: boolean;
  };
  axisBorder?: {
    show?: boolean;
    color?: string;
  };
  labels?: {
    style?: {
      colors?: string;
    };
  };
  title?: {
    text?: string;
    style?: {
      color?: string;
    };
  };
}

export interface Chart {
  chart?: ChartConfig;
  colors?: string[];
  stroke?: {
    width?: number[];
    curve?: string;
  };
  series?: ChartSeries[];
  title?: {
    text?: string;
    align?: string;
  };
  grid?: {
    borderColor?: string;
    row?: ChartRow;
  };
  markers?: {
    size?: number;
    colors?: string[];
    strokeColor?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    fillOpacity?: number;
    shape?: string;
    radius?: number;
    offsetX?: number;
    offsetY?: number;
    hover?: {
      size?: number;
    };
  };
  xaxis?: {
    categories?: string[] | number[];
    title?: {
      text?: string;
    };
    type?: string;
    tickPlacement?: string;
    position?: string;
    tooltip?: {
      enabled?: boolean;
    };
  };
  yaxis?: Yaxis[];
  legend?: ChartLegend;
  plotOptions?: {
    bar?: {
      horizontal?: boolean;
      borderRadius?: number;
      columnWidth?: string;
    };
    line?: {
      color: string;
    };
  };
  dataLabels?: {
    enabled?: boolean;
    dropShadow?: {
      enabled?: boolean;
    };
    formatter?: (val: number) => number;
    style?: {
      colors?: string[];
    };
    background?: {
      enabled?: boolean;
      foreColor?: string;
      padding?: number;
      borderRadius?: number;
      borderWidth?: number;
      borderColor?: string;
      opacity?: number;
    };
  };
}
