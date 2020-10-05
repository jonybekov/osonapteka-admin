import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  PlusSquareOutlined,
  HomeOutlined,
  AppstoreOutlined,
  MehOutlined,
  StarOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    label: "Главная",
    icon: <HomeOutlined />,
  },
  {
    label: "Поступление",
    icon: <PlusSquareOutlined />,
  },
  {
    label: "Бронирование",
    icon: <CalendarOutlined />,
  },
  {
    label: "Инвентаризация",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Деффектура",
    icon: <MehOutlined />,
  },
  {
    label: "Переоценка",
    icon: <StarOutlined />,
  },
  {
    label: "Карта покупателей",
    icon: <CreditCardOutlined />,
  },
  {
    label: "Списание товаров",
    icon: <MailOutlined />,
  },
  {
    label: "Список должников",
    icon: <MailOutlined />,
  },
  {
    label: "Отчеты",
    icon: <MailOutlined />,
  },
  {
    label: "Справочные таблицы",
    icon: <MailOutlined />,
  },
  {
    label: "Настройки",
    icon: <MailOutlined />,
  },
  {
    label: "Помощь",
    icon: <MailOutlined />,
  },
];

const SideMenu = () => {
  return (
    <div className='bg-white'>
      <div className='p-4'>OSONAPTEKA</div>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"vertical-left"}
        theme={"light"}>
        {menuItems.map(({ label, icon }, i) => (
          <Menu.Item key={i + 1} icon={icon}>
            {label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SideMenu;
