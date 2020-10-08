import { Col, Row, List, Switch, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";

const accessSettings = [
  {
    title: "Активность",
    isActive: false,
  },
  {
    title: "Поступление товаров",
    isActive: false,
  },
  {
    title: "Брониирование",
    isActive: false,
  },
  {
    title: "Инвентаризация",
    isActive: true,
  },
  {
    title: "Переоценка",
    isActive: false,
  },
  {
    title: "Деффектура",
    isActive: false,
  },
];

const cashierDetails = [
  {
    label: "ID:",
    text: "00005365",
  },
  {
    label: "Телефон номер:",
    text: "998 91 934 34 87",
  },
  {
    label: "Электронная почта:",
    text: "bobur.mamedov@gmail.com",
  },
  {
    label: "Логин:",
    text: "bobur.mamedov@gmail.com",
  },
  {
    label: "Пароль:",
    text: "qawsed",
  },
  {
    label: "Дата создания:",
    text: "24.03.2019",
  },
];

export default function CashierDetails() {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <div className='shadow p-4 bg-white'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Avatar
                src='https://randomuser.me/api/portraits/men/44.jpg'
                size='large'
              />
              <div className='ml-4'>
                <p className='text-lg'>Бобур Мамедов</p>
                <p className='text-sm text-gray-500 font-light'>Кассир №2</p>
              </div>
            </div>
            <div>
              <Button shape='round' style={{ padding: "5px 8px" }}>
                <MoreOutlined />
              </Button>
            </div>
          </div>

          {/* Details */}

          <List itemLayout='vertical' split={false}>
            {cashierDetails.map(({ label, text }) => (
              <List.Item>
                <p className='font-light text-gray-500 text-sm mb-0'>{label}</p>
                <p>{text}</p>
              </List.Item>
            ))}
          </List>
        </div>
      </Col>
      <Col span={16}>
        <div className='shadow p-4 bg-white'>
          <p className='text-lg mb-4'>Настройки доступа</p>
          <List
            dataSource={accessSettings}
            renderItem={(item: any) => (
              <List.Item
                className='font-light text-lg'
                actions={[<Switch className='green-switch' />]}>
                {item.title}
              </List.Item>
            )}
          />
        </div>
      </Col>
    </Row>
  );
}
