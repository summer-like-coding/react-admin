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
    return arr.map(item => {
      return {
        key: item.id+'',
        children: item.children ? changeItem(item.children) : undefined,
        label: item.title,
      }
    });
  }
  // 获取slider数据
  const getSliderList = async () => {
    let data: IData[] = await getSliderLists();
    // 对数据进行处理
    setMenuList(changeItem(data));
  };

  // const getKeys = () => {
  //   return menuList.map((item)=>item?.key)
  // }
  useEffect(() => {
    getSliderList();
  }, []);

  // const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (arrKey.indexOf(latestOpenKey!) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };
  return (
    <Slide>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Logo></Logo>
        <Menu
          theme="dark"
          mode="inline"
          items={menuList}
          // onOpenChange={onOpenChange}//展开或者关闭的回调
        />
      </Sider>
    </Slide>
  );
};
export default slide;
