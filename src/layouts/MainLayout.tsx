import React from "react";
import SideMenu from "../components/SideMenu";
import { Dropdown, Layout, Menu } from "antd";
import {
  DownOutlined,
  UserOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { Route } from "react-router-dom";

const { Header, Content } = Layout;

const userMenu = [
  {
    text: "Мой профиль",
    icon: <UserOutlined />,
  },
  {
    text: "Блокировать",
    icon: <LockOutlined />,
  },
  {
    text: "Выйти",
    icon: <LogoutOutlined />,
  },
];

interface MainLayoutProps {
  title: string;
  children: any;
}

export const MainLayoutRoutes = ({
  title,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout title={title}>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default function MainLayout({ title, children }: MainLayoutProps) {
  const menu = (
    <Menu>
      {userMenu.map((item, i) => (
        <Menu.Item key={i} icon={item.icon}>
          <a className='text-sm'>
            {/* <span>{item.icon}</span> */}
            {item.text}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Header className='bg-white px-4 h-12 flex justify-between items-center leading-none shadow'>
          <h2>{title}</h2>
          <div>
            <Dropdown overlay={menu}>
              <div className='ant-dropdown-link flex items-center cursor-pointer text-sm'>
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                <span className='mr-2 ml-1'>Azizbek</span>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content className='p-4'>{children}</Content>
      </Layout>
      {/* <Tabs
            hideAdd
            onChange={onChange}
            activeKey={activeKey}
            type='editable-card'
            onEdit={onEdit}>
            {panes.map((pane) => (
              <TabPane tab={pane.title} key={pane.key}>
                <Layout>
                  <Sider width={255}>
                    <SideMenu />
                  </Sider>
                  <Layout>
                    <Header></Header>
                    <Content>{pane.content}</Content>
                  </Layout>
                </Layout>
              </TabPane>
            ))}
          </Tabs> */}
    </Layout>
  );
}
