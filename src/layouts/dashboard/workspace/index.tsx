import { Layouts } from "@/layouts/layout";
import React from "react";
import { Container, ContainerItem, ImgContainer, Messages, Tips, Todo } from "./workspace";

import { SampleCards, Scards } from "@/components/cards";
import Trend from "@/components/trends";
import { LargetList } from "@/components/list";
import img from '@/assets/Business.svg'
import { CardContainers } from "@/components/cards/content";
const Workspace: React.FC = () => {
  return (
    <Layouts>
      <Todo>
        <div className="title">工作台</div>
        <Tips>
          <Trend></Trend>
          <Messages>
            <div className="items">
              <div>项目数</div>
              <div className="num">16</div>
            </div>
            <div className="items">
              <div>代办</div>
              <div className="num">3/15</div>
            </div>
            <div className="items">
              <div>消息</div>
              <div className="num">35</div>
            </div>
          </Messages>
        </Tips>
      </Todo>
      <Container>
        <ContainerItem>
          <SampleCards title="项目"></SampleCards>
          <LargetList></LargetList>
        </ContainerItem>
        <ContainerItem>
          {/* <CardContainers>
            <Scards Mname={"用户"}></Scards>
            <Scards Mname={"分析"}></Scards>
            <Scards Mname={"商品"}></Scards>
            <Scards Mname={"订单"}></Scards>
            <Scards Mname={"票据"}></Scards>
            <Scards Mname={"消息"}></Scards>
            <Scards Mname={"标签"}></Scards>
            <Scards Mname={"配置"}></Scards>
          </CardContainers> */}
          <SampleCards title="快捷操作"></SampleCards>
          <ImgContainer>
           <img src={img} alt="" />
          </ImgContainer>
        </ContainerItem>
      </Container>
    </Layouts>
  );
};
export default Workspace;
