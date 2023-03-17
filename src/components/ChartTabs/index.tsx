import { Tabs, TabsProps } from "antd";
import React from "react";
import BarChart from "../chart/barChart";
import LineChart from "../chart/lineChart";
import ChartTab from "./chartabs";
const ChartTabs: React.FC = () => {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `流量趋势`,
          children: <LineChart ></LineChart>,
        },
        {
          key: '2',
          label: `访问量`,
          children: <BarChart></BarChart>,
        }
    ];
    const onChange = (key: string) => {
        console.log(key);
      };
    return (
        <ChartTab>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </ChartTab>
    )
}

export default ChartTabs