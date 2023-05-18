import React, { useState } from "react";
import { Layout } from "antd";
import { MenuSider } from "../../components/MenuComponents/MenuSider/MenuSider";
import { MenuTop } from "../../components/MenuComponents/MenuTop/MenuTop";
import "./GeneralLayout.scss";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import { Button, Space } from "antd";
import { Logout } from "../../components/MenuComponents/Logout/Logout";

export const GeneralLayout = (props) => {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="general-layout">
        <Header className="general-layout__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        <Logout className="general-layout-header-logout"></Logout>
        </Header>        
        <Content className="general-layout__Content">{children}</Content>
        <Footer className="general-layout__footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};

//<Logout className="general-layout__header__logout"></Logout>
