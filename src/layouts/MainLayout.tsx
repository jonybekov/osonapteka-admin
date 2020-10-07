import React from "react";
import SideMenu from "../components/SideMenu";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import TopHeader from "../components/TopHeader";

const { Content } = Layout;

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
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <TopHeader title={title} />
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
