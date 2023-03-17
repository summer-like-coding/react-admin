import { globalContext } from "@/config/globalconfig";
import { Card, Tag } from "antd";
import React, { useContext } from "react";
import { Cardcomponents } from "./content";

interface Iprops {
  title?: string;
  extra?: string;
}
const Cards: React.FC<Iprops> = (props) => {
  const { title, extra } = props;
  const {
    value: { globalColor },
  } = useContext(globalContext)!;
  return (
    <Card
      title={title}
      style={{ flex: '1 1 auto' }}
      extra={
        <Tag
          color={globalColor}
          style={{
            width: "2rem",
            height: "2rem",
            textAlign: "center",
            lineHeight: "2rem",
          }}
        >
          {extra}
        </Tag>
      }
    >
      <Cardcomponents>
        <div className="data">31262</div>
        <div className="rate">
          <div className="left">日同比22%</div>
          <div className="right">日同比22%</div>
        </div>
        <div className="footer">
          <div className="lef">总访问量:</div>
          <div className="right">886436</div>
        </div>
      </Cardcomponents>
    </Card>
  );
};
export default Cards;
