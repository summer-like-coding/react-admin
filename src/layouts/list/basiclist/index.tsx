import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { useTranslation } from "react-i18next";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const Basiclist: React.FC = () => {
  // 使用i18next
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "forms",
  });
  const columns: ColumnsType<DataType> = [
    {
      title: t("id"),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("名称"),
      dataIndex: "age",
      key: "age",
    },
    {
      title: t("头像"),
      dataIndex: "address",
      key: "address",
    },
    {
      title: t("地址"),
      dataIndex: "address",
      key: "address",
    },
    {
      title: t("开始时间"),
      key: "tags",
      dataIndex: "tags"
    },
    {
      title: t("结束时间"),
      key: "tags",
      dataIndex: "tags"
    },
    {
      title: t("创建时间"),
      key: "tags",
      dataIndex: "tags"
    },
    {
      title: t("操作"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
export default Basiclist;
