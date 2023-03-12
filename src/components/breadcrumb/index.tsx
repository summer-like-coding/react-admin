import React from "react";
import styled from "styled-components";
import { Breadcrumb } from "antd";
const Bread = styled.div`
  display: inline-block;
  margin-left: 15px;
`;
const BreadCrumb: React.FC = () => {
  return (
    <Bread>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "Application Center",
          },
        ]}
      />
    </Bread>
  );
};
export default BreadCrumb;
