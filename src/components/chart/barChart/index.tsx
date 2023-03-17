import React, { useContext, useEffect, useRef } from "react";
//  导入charts
import * as eCharts from "echarts";
import { globalContext } from "@/config/globalconfig";
const BarChart: React.FC = () => {
  // 拿到DOM容器
  const {
    value: { globalColor },
  } = useContext(globalContext)!;
  const chartRef: any = useRef();
  useEffect(() => {
    const chart = eCharts.init(chartRef.current);
    let options = {
      xAxis: {
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [
            3000, 2000, 3333, 2500, 2700, 2800, 2500, 3200, 2500, 5100, 2500,
            3200,
          ],
          barWidth: "40%",
          itemStyle: {
            barBorderRadius: 5,
            borderWidth: 1,
            borderType: "solid",
            color:globalColor
          },
        },
      ],
    };
    chart.setOption(options);
  }, [globalColor]);
  return <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>;
};
export default BarChart;
