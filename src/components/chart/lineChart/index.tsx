import React, { useEffect, useRef } from "react";
import * as eCharts from "echarts";
// import { IProps } from "./type";
const LineChart: React.FC = () => {
  // 拿到DOM容器
  const chartRef:any = useRef();
  useEffect(() => {
    const chart = eCharts.init(chartRef.current);
    let option = {
      //配置项(数据都来自于props)
    //   title: {
    //     text: props.title ? props.title : "暂无数据",
    //   },
      xAxis: {
        data: ["A", "B", "C", "D", "E"],
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: "line",
          stack: "x",
          smooth: true,
          areaStyle: {},
        },
          {
            // 高出5，4，3，5，10
          data: [5, 4, 3, 5, 10],
          type: "line",
          stack: "x",
          smooth: true,
          areaStyle: {},
        },
      ],
    };
    chart.setOption(option);
  }, []);
  return <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default LineChart;
