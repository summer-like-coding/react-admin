// 封装通用chart
import React, { useEffect, useRef } from "react";
import * as eCharts from "echarts";
const Chart: React.FC<echarts.EChartsOption> = (props) => {
  let { option } = props;
  // 获取chart所需ref
  const chartRef: any = useRef(null);
  // 实例
  let chartInstance: any = null;
  // 渲染函数
  function renderChart() {
    try {
      // `echarts.getInstanceByDom` 可以从已经渲染成功的图表中获取实例，
      // 其目的就是在 options 发生改变的时候，不需要重新创建图表实例，提高性能
      const renderInstance = eCharts.getInstanceByDom(chartRef.current);
      if (renderInstance) {
        chartInstance = renderInstance;
      } else {
        chartInstance = eCharts.init(chartRef.current);
      }
      chartInstance.setOption(option);
    } catch (error) {
      chartInstance && chartInstance.dispose();
    }
  }
  // 视图发生变化，更新数据
  function resizehandle() {
    chartInstance.resize();
  }
  useEffect(() => {
    renderChart();
    // 组件销毁时，消除图表实例
    return () => {
      chartInstance && chartInstance.dispose();
    };
  }, [option]);
  useEffect(() => {
    // 设置监听器，让视图改变，echarts改变
    window.addEventListener("resize", resizehandle);
    // 当页面结束，销毁监听器
    return () => window.removeEventListener("resize", resizehandle);
  }, [option]);
  return <div ref={chartRef} style={{ height: "400px" }}></div>;
};
export default Chart;
