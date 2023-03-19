import { Button, Dropdown, MenuProps, message, Space, Switch } from "antd";
import React from "react";
// 引入国际化
import { useTranslation } from 'react-i18next'
const Language: React.FC = () => {
  const {t,i18n} = useTranslation()
  const onClick: MenuProps["onClick"] = ({ key }) => {
    i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en')
    message.info(`Click on item ${key}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "中文",
      key: "ch",
    },
    {
      label: "english",
      key: "en",
    }
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <Button onClick={(e) => e.preventDefault()}>
        <Space>
          {i18n.language == 'en' ? '英文' : '中文'}
        </Space>
      </Button>
    </Dropdown>
  );
};
export default Language;
