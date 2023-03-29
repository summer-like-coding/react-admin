import { Layouts } from "@/layouts/layout";
import React from "react";
import {
  Container,
  ContainerItem,
  ImgContainer,
  Messages,
  Tips,
  Todo,
} from "./workspace";
import {
  ControlOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  ApartmentOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Scards } from "@/components/cards";
import Trend from "@/components/trends";
import { LargetList } from "@/components/list";
import img from "@/assets/Business.svg";
const Workspace: React.FC = () => {
  let iconList = [
    <ControlOutlined />,
    <UnorderedListOutlined />,
    <FormOutlined />,
    <ApartmentOutlined />,
    <SettingOutlined />,
  ];
  let nameList = ["主控台", "列表", "表单", "权限管理", "系统管理"];

  let optionsList = {
    iconList: iconList,
    Mname: nameList,
  };

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
          <Scards title="项目" options={optionsList}></Scards>
          <LargetList></LargetList>
        </ContainerItem>
        <ContainerItem>
          <Scards title="快捷操作" options={optionsList}></Scards>
          <ImgContainer>
            <img src={img} alt="" />
          </ImgContainer>
        </ContainerItem>
      </Container>
    </Layouts>
  );
};
export default Workspace;
