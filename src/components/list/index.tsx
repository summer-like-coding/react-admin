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
      header={<div style={{"padding":"0px 24px","minHeight":"36px","fontWeight":'600',"fontSize":"16px","lineHeight":"30px"}}>动态</div>}
      dataSource={data}
      style={{ marginTop: "20px", backgroundColor: "#fff",borderRadius:"8px 8px 0 0" }}
      renderItem={(item) => (
        <List.Item>
          <Trend></Trend>
        </List.Item>
      )}
    />
  );
};

export { LargetList };
