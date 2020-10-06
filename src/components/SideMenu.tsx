import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  PlusSquareOutlined,
  HomeOutlined,
  AppstoreOutlined,
  MehOutlined,
  StarOutlined,
  CreditCardOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  {
    label: "Главная",
    icon: <HomeOutlined />,
    to: "/",
  },
  {
    label: "Поступление",
    icon: <PlusSquareOutlined />,
    to: "/admission",
  },
  {
    label: "Бронирование",
    icon: <CalendarOutlined />,
    to: "/",
  },
  {
    label: "Инвентаризация",
    icon: <AppstoreOutlined />,
    to: "/",
  },
  {
    label: "Деффектура",
    icon: <MehOutlined />,
    to: "/",
  },
  {
    label: "Переоценка",
    icon: <StarOutlined />,
    to: "/",
  },
  {
    label: "Карта покупателей",
    icon: <CreditCardOutlined />,
    to: "/",
  },
  {
    label: "Списание товаров",
    icon: <MailOutlined />,
    to: "/",
  },
  {
    label: "Список должников",
    icon: <MailOutlined />,
    to: "/",
  },
  {
    label: "Отчеты",
    icon: <MailOutlined />,
    to: "/",
  },
  {
    label: "Справочные таблицы",
    icon: <MailOutlined />,
    to: "/",
  },
  {
    label: "Настройки",
    icon: <MailOutlined />,
    to: "/",
  },
  {
    label: "Помощь",
    icon: <MailOutlined />,
    to: "/",
  },
];

const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sider
      trigger={null}
      width={256}
      collapsible
      collapsed={isCollapsed}
      collapsedWidth={46}>
      <div className='bg-white shadow'>
        <div
          className={`p-4 h-12 flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}>
          <strong className={isCollapsed ? "hidden" : "block"}>
            OSONAPTEKA
          </strong>
          <MenuOutlined onClick={toggleMenu} />
        </div>

        <Menu style={{ width: isCollapsed ? 46 : 256 }} mode={"vertical"}>
          {menuItems.map(({ label, icon, to }, i) => (
            <Menu.Item key={i + 1} icon={icon}>
              <Link to={to}>{label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};

export default SideMenu;
