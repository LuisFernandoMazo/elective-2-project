import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "users",
      icon: <HomeOutlined />, 
      label: "Gestion de usuarios" 
    },
    {
      key: "products",
      icon: <TeamOutlined />,
      label: "Portafolio de servicios",
    },
    {
      key: "clients",
      icon: <AppstoreAddOutlined />,
      label: "Clientes",
      subMenu: [
        {
          key: "clients/list",
          icon: <TeamOutlined />,
          label: "Lista de clientes",
        },
        { key: "clients/new", 
          icon: <TeamOutlined />, 
          label: "Nuevo cliente" 
        },
      ],
    },
    {
      key: "services",
      icon: <AppstoreOutlined />,
      label: "Servicios",
      subMenu: [
        {
          key: "services/list",
          icon: <TeamOutlined />,
          label: "Lista de servicios",
        },
        { key: "services/new", 
          icon: <TeamOutlined />, 
          label: "Nuevo servicio" 
        },
      ],
    },

    {
      key: "news",
      icon: <PartitionOutlined />,
      label: "Gestion de noticias",
    },
  ];

  const navigateTo = (e) => {
    const path = e.key;
    console.log(path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label, subMenu } = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon" })}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };

  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems
          .filter((item) => item.subMenu)
          .map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
