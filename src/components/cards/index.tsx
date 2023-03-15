import { globalContext } from "@/config/globalconfig";
import { Button, Card, Tag } from "antd";
import React, { useContext } from "react";

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
      extra={<Tag color={globalColor} style={{ width: '2rem', height: '2rem',textAlign:'center',lineHeight:'2rem' }}> {extra}</Tag>}
      style={{ width: 300,margin:'25px' }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};
export default Cards;
