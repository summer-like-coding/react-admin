import CardContainer from "@/components/cardContiner/Cardcontainer";
import Cards from "@/components/cards";
import ChartTabs from "@/components/ChartTabs";
import React from "react";
import { Controls } from "./control";
const Control: React.FC = () => {
  return (
      <Controls>
        <CardContainer>
          <Cards title={"访问量"} extra={"日"}></Cards>
          <Cards title={"销售额"} extra={"周"}></Cards>
          <Cards title={"订单量"} extra={"周"}></Cards>
          <Cards title={"成交额"} extra={"月"}></Cards>
        </CardContainer>
        <ChartTabs></ChartTabs>
      </Controls>
  );
};
export default Control;
