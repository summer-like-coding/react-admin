import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  UnorderedListOutlined,
  ExclamationCircleOutlined,
  FormOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Slide, Logo } from "./slide";
import { getSliderLists } from "../../api/reqHome";
import { IData } from "../../api";
import { MenuInfo } from "rc-menu/lib/interface";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

interface Iprops {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

const slide: React.FC<Iprops> = (props) => {
  // 路由跳转
  const navigate = useNavigate();
  // 列表数据
  const [menuList, setMenuList] = useState([] as MenuItem[]);
  const [iconList, setIconList] = useState([
    <HomeOutlined />,
    <UnorderedListOutlined />,
    <ExclamationCircleOutlined />,
    <FormOutlined />,
    <CheckCircleOutlined />,
    <SettingOutlined />,
    <WalletOutlined />,
  ]);
  // 展开key
  // const [openKeys, setOpenKeys] = useState(['1']);
  // 数据处理
  function changeItem(arr: IData[]): MenuItem[] {
    return arr.map((item) => {
      return {
        key: item.id,
        children: item.children ? changeItem(item.children) : undefined,
        label: item.title,
      };
    });
  }
  // 增加Icon
  function addIconItem(arr: any[]): MenuItem[] {
    return arr.map((item, index) => {
      return {
        ...item,
        icon: iconList[index],
      };
    });
  }
  // 获取slider数据
  const getSliderList = async () => {
    let data: IData[] = await getSliderLists();
    // 对数据进行处理
    
    setMenuList(addIconItem(changeItem(data)));
  };
  // 处理点击事件
  const handleClick = ({ keyPath }: MenuInfo) => {
    let path = keyPath.reverse().join("/");
    navigate(path);
  };
  useEffect(() => {
    getSliderList();
  }, []);

  return (
    <Slide>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Logo></Logo>
        <Menu mode="inline" items={menuList} onClick={handleClick} />
      </Sider>
    </Slide>
  );
};
export default slide;
