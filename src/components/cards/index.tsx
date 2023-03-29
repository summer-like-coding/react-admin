import { globalContext } from "@/config/globalconfig";
import { Card, Tag } from "antd";
import React, { useContext } from "react";
import { Cardcomponents, CardContainers } from "./content";

export interface Ioptions {
  Mname?: string[];
  iconList?: JSX.Element[];
}

interface Iprops {
  title?: string;
  extra?: string;
  options?: Ioptions;
}

const Lcards: React.FC<Iprops> = (props) => {
  const { title, extra } = props;
  const {
    value: { globalColor },
  } = useContext(globalContext)!;
  return (
    <Card
      title={title}
      style={{ flex: "1 1 auto", marginBottom: "10px", marginRight: "10px" }}
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

const Scards: React.FC<Iprops> = (props) => {
  const { title, options } = props;
  const { iconList, Mname } = options!;

  const iconStyle: React.CSSProperties = {
    fontSize: "32px",
    textAlign: "center",
  };
  const nameStyle: React.CSSProperties = {
    textAlign: "center",
  };
  return (
    <Card
      style={{ flex: "1 1 auto", marginBottom: "10px", marginRight: "10px" }}
      title={title}
    >
      {iconList?.map((item, index) => {
        return (
            <Card.Grid key={index}>
              <div style={iconStyle}>{item}</div>
              <div style={nameStyle}>{Mname![index]}</div>
            </Card.Grid>
        );
      })}
    </Card>
  );
};

export { Lcards, Scards };
