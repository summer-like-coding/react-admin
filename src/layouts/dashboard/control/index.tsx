import Cards from "@/components/cards";
import React from "react";
import Controls from "./control";
const Control: React.FC = () => {
  return (
    <Controls>
      <Cards title={'访问量'} extra={'日'}></Cards>
      <Cards title={'销售额'} extra={'周'}></Cards>
      <Cards title={'订单量'} extra={'周'}></Cards>
      <Cards title={'成交额'} extra={'月'}></Cards>
    </Controls>
  );
};
export default Control;
