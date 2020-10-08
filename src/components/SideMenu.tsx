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
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const menuItems = [
  {
    label: "Главная",
    icon: <HomeOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Поступление",
    icon: <PlusSquareOutlined />,
    to: "/admission",
    disabled: false,
  },
  {
    label: "Бронирование",
    icon: <CalendarOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Инвентаризация",
    icon: <AppstoreOutlined />,
    to: "/inventory",
    disabled: false,
  },
  {
    label: "Деффектура",
    icon: <MehOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Переоценка",
    icon: <StarOutlined />,
    to: "/revaluation",
    disabled: false,
  },
  {
    label: "Карта покупателей",
    icon: <CreditCardOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Списание товаров",
    icon: <MailOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Список должников",
    icon: <MailOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Отчеты",
    icon: <MailOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Справочные таблицы",
    icon: <MailOutlined />,
    to: "/",
    disabled: true,
  },
  {
    label: "Настройки",
    icon: <SettingOutlined />,
    to: "/settings",
    disabled: false,
  },
  {
    label: "Помощь",
    icon: <MailOutlined />,
    to: "/",
    disabled: true,
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
          {menuItems.map(({ label, icon, to, disabled }, i) => (
            <Menu.Item key={i + 1} icon={icon} disabled={disabled}>
              <Link to={to}>{label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};

export default SideMenu;
