import React from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import BreadCrumb from "../breadcrumb";
import CustormColor from "../customColors";
import { Theme } from "./head";
import Language from "../language";
const { Header } = Layout;

interface Iprops {
  collapsed: boolean;
  setCollapsed: Function;
}

const Head: React.FC<Iprops> = (props) => {
  return (
    <Header style={{ background: "white" }}>
      {React.createElement(
        props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          onClick: () => props.setCollapsed(!props.collapsed),
        }
      )}
      <BreadCrumb></BreadCrumb>
      <Theme>
        {/* 进行国际化 */}
        <Language></Language>
        <CustormColor></CustormColor>

      </Theme>
    </Header>
  );
};
export default Head;
