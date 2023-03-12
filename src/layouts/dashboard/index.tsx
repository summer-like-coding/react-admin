import React, { useState } from "react";

import { Layout } from "antd";
import Head from "@/components/head";
import Slide from "@/components/slide";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const DashBoard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{height:'100%'}}>
      <Slide collapsed={collapsed}></Slide>
      <Layout>
        <Head collapsed={collapsed} setCollapsed={setCollapsed}></Head>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
