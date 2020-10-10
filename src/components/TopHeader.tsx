import React from "react";
import { Layout, Dropdown, Avatar, Menu } from "antd";
import {
  DownOutlined,
  UserOutlined,
  LockOutlined,
  LeftOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

const { Header } = Layout;

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

interface TopHeaderProps {
  title: string;
  backButton?: boolean;
}

export default function TopHeader({ title, backButton }: TopHeaderProps) {
  const history = useHistory();

  const goBack = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Header className='bg-white px-4 h-12 flex justify-between items-center leading-none shadow'>
      <div>
        <div className='flex items-center'>
          {backButton && (
            <a href='#' onClick={goBack} className='pr-4'>
              <LeftOutlined />
            </a>
          )}
          <h2 className='font-bold'>{title}</h2>
        </div>
      </div>
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
  );
}
