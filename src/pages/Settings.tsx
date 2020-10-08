import React from "react";
import {
  TranslationOutlined,
  DesktopOutlined,
  CloudServerOutlined,
  ShopOutlined,
  GroupOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const settings = [
  {
    title: "Язык",
    icon: <TranslationOutlined />,
    href: "/",
  },
  {
    title: "Подключениие устройства",
    icon: <DesktopOutlined />,
    href: "/",
  },
  {
    title: "Системные настройки",
    icon: <CloudServerOutlined />,
    href: "/",
  },
  {
    title: "Параметры аптеки",
    icon: <ShopOutlined />,
    href: "/",
  },
  {
    title: "Управление кассирами",
    icon: <GroupOutlined />,
    href: "/settings/manage-cashiers",
  },
  {
    title: "Удаленное управление",
    icon: <CompassOutlined />,
    href: "/",
  },
];

export default function Settings() {
  return (
    <>
      {settings.map((setting) => (
        <Link to={setting.href}>
          <div className='bg-white p-4 hover:shadow transition-shadow duration-200 ease-in-out mb-4'>
            <>{setting.icon}</>
            <span className='ml-4'>{setting.title}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
