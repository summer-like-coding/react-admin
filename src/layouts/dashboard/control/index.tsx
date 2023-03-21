import { Lcards, Scards } from "@/components/cards";
import { CardContainers } from "@/components/cards/content";
import ChartTabs from "@/components/chartTabs";
import { UserAddOutlined } from "@ant-design/icons";
import React from "react";
import { Controls } from "./control";
const Control: React.FC = () => {
  return (
    <Controls>
      <UserAddOutlined></UserAddOutlined>
        <CardContainers>
          <Lcards title={"访问量"} extra={"日"}></Lcards>
          <Lcards title={"销售额"} extra={"周"}></Lcards>
          <Lcards title={"订单量"} extra={"周"}></Lcards>
          <Lcards title={"成交额"} extra={"月"}></Lcards>
      </CardContainers>
      <CardContainers>
        <Scards Mname={"用户"}></Scards>
        <Scards Mname={"分析"}></Scards>
        <Scards Mname={"商品"}></Scards>
        <Scards Mname={"订单"}></Scards>
        <Scards Mname={"票据"}></Scards>
        <Scards Mname={"消息"}></Scards>
        <Scards Mname={"标签"}></Scards>
        <Scards Mname={"配置"}></Scards>
      </CardContainers>
        <ChartTabs></ChartTabs>
      </Controls>
  );
};
export default Control;
