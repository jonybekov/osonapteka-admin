import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import logo from "./logo.svg";
import { Tabs, Button, Layout } from "antd";

const { TabPane } = Tabs;
const { Header, Content, Footer, Sider } = Layout;

const paneList = [
  { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
];

interface Pane {
  title: string;
  content: string;
  key: string;
}

function App() {
  const [panes, setPanes] = useState<Array<Pane>>(paneList);
  const [activeKey, setActiveKey] = useState<string>(panes[0].key);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const onEdit = () => {};

  return (
    <div className='App'>
      <Layout>
        <div>
          <Layout>
            <Sider width={255}>
              <SideMenu />
            </Sider>
            <Layout>
              <Header className='bg-white'>Some header</Header>
              <Content>Content</Content>
            </Layout>
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
        </div>
      </Layout>
    </div>
  );
}

export default App;
