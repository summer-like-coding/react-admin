import { Lcards, Scards } from "@/components/cards";
import { CardContainers } from "@/components/cards/content";
import ChartTabs from "@/components/chartTabs";
import { Layouts } from "@/layouts/layout";
import {
  ControlOutlined,
  BarChartOutlined,
  ShoppingCartOutlined,
  PayCircleOutlined,
  MessageOutlined,
  TagsOutlined,
  SettingOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import React from "react";
const Control: React.FC = () => {
  let iconList = [
    <ControlOutlined />,
    <BarChartOutlined />,
    <ShoppingCartOutlined />,
    <PayCircleOutlined />,
    <CreditCardOutlined />,
    <MessageOutlined />,
    <TagsOutlined />,
    <SettingOutlined />,
  ];
  let nameList = [
    "用户",
    "分析",
    "商品",
    "订单",
    "票据",
    "消息",
    "标签",
    "配置",
  ];
  let optionsList = {
    iconList: iconList,
    Mname: nameList,
  };
  return (
    <Layouts>
      <CardContainers>
        <Lcards title={"访问量"} extra={"日"}></Lcards>
        <Lcards title={"销售额"} extra={"周"}></Lcards>
        <Lcards title={"订单量"} extra={"周"}></Lcards>
        <Lcards title={"成交额"} extra={"月"}></Lcards>
      </CardContainers>
      <Scards options={optionsList}></Scards>
      <ChartTabs></ChartTabs>
    </Layouts>
  );
};
export default Control;
