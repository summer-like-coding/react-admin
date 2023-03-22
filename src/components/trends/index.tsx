import { Avatar } from "antd";
import React from "react";
import { Greet } from "./trends";
import schoolboy from "@/assets/schoolboy.png";
const Trend: React.FC = () => {
  return (
    <Greet>
      <Avatar
        size={64}
        src={
          <img
            src={schoolboy}
            alt="avatar"
            width={"100%"}
            height={"100%"}
          ></img>
        }
      />
      <div className="greeting">
        <div className="top">早安,开始您一天的工作吧</div>
        <div className="bottom">今天天气如何</div>
      </div>
    </Greet>
  );
};

export default Trend;
