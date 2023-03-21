import { getChartData } from "@/api/reqHome";
import { Tabs, TabsProps } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Chart from "./chart/chart";
import ChartTab from "./chartab";
import { globalContext } from "@/config/globalconfig";
interface chartData {
  flowControl: any;
  visits: any;
}
const ChartTabs: React.FC = () => {
  const [chart, setChart] = useState({} as chartData);
  const {
    value: { globalColor },
  } = useContext(globalContext)!;
  // 获取数据
  const getData = async () => {
    let data: chartData = await getChartData();
    setChart(data);
  };
  let barOptions: echarts.EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: chart.visits,
    },
    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
    xAxis: { type: "category" },
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
      {
        type: "bar",
        barWidth: "40%",
        itemStyle: {
          // barBorderRadius: 5,
          borderWidth: 1,
          borderType: "solid",
          color: globalColor,
        },
      },
    ],
  };
  let lineOptions: echarts.EChartsOption = {
    dataset: {
      source: chart.flowControl,
    },
    xAxis: {
      type: "category",
    },
    yAxis: { gridIndex: 0 },
    series: [
      {
        type: "line",
        // stack: "x",拥有同样 stack 值的系列将堆叠在一组。
        smooth: true,
        seriesLayoutBy: "row",
        emphasis: { focus: "series" },
        areaStyle: {
          color: globalColor,
          opacity: 0.3,
        },
        lineStyle: {
          color: globalColor,
          width: 4,
        },
      },
      {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",
        emphasis: { focus: "series" },
        areaStyle: {},
        lineStyle: {
          width: 4,
        },
      },
    ],
  };
  
  useEffect(() => {
    getData();
  }, []);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `流量趋势`,
      children: <Chart option={lineOptions}></Chart>,
    },
    {
      key: "2",
      label: `访问量`,
      children: <Chart option={barOptions}></Chart>,
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <ChartTab>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ChartTab>
  );
};

export default ChartTabs;
