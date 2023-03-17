import { Button, Dropdown, MenuProps, message, Space, Switch } from "antd";
import React from "react";
const Language: React.FC = () => {
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "中文",
      key: "ch",
    },
    {
      label: "英文",
      key: "en",
    }
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <Button onClick={(e) => e.preventDefault()}>
        <Space>
          语言
        </Space>
      </Button>
    </Dropdown>
  );
};
export default Language;
