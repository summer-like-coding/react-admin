import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Slide, Logo } from "./slide";
import { getSliderLists } from "../../api/reqHome";
import { IData } from "../../api";
const { Sider } = Layout;

interface Iprops {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

const slide: React.FC<Iprops> = (props) => {
  // 列表数据
  const [menuList, setMenuList] = useState([] as MenuItem[]);
  // 展开key
  // const [openKeys, setOpenKeys] = useState(['1']);
  // 数据处理
  function changeItem(arr: IData[]): MenuItem[] {
    return arr.map((item) => {
      return {
        key: item.id + "",
        children: item.children ? changeItem(item.children) : undefined,
        label: item.title,
      };
    });
  }
  // 获取slider数据
  const getSliderList = async () => {
    let data: IData[] = await getSliderLists();
    // 对数据进行处理
    setMenuList(changeItem(data));
  };

  useEffect(() => {
    getSliderList();
  }, []);

  return (
    <Slide>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Logo></Logo>
        <Menu mode="inline" items={menuList} />
      </Sider>
    </Slide>
  );
};
export default slide;
