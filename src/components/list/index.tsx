import { List } from "antd";
import React from "react";
import Trend from "../trends";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const LargetList: React.FC = () => {
  return (
    <List
      size="large"
      header={<div>动态</div>}
      bordered
      dataSource={data}
      style={{ marginTop: "20px", backgroundColor: "#fff" }}
      renderItem={(item) => (
        <List.Item>
          <Trend></Trend>
        </List.Item>
      )}
    />
  );
};

export { LargetList };
