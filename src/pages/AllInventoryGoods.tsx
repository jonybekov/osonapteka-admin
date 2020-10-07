import React from "react";
import { Layout, Table } from "antd";
import TopHeader from "../components/TopHeader";
import VirtualTable from "../components/VirtualTable";
import IconBtn from "../components/IconBtn";
import { EditOutlined } from "@ant-design/icons";
const { Content } = Layout;

const columns = [
  { title: "№", dataIndex: "key", width: 30 },
  { title: "Название товара", dataIndex: "name", width: 200 },
  { title: "Штрих код", dataIndex: "barcode", width: 130 },
  { title: "Базовая", dataIndex: "basePrice", width: 80 },
  { title: "Приход цена", dataIndex: "price", width: 120 },
  { title: "Наценка", dataIndex: "extraPrice", width: 80 },
  { title: "Кол-во", dataIndex: "amount", width: 60 },
  { title: "Прод цена", dataIndex: "salePrice", width: 90 },
  { title: "Срок годн", dataIndex: "expiringDate", width: 90 },
  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    width: 120,
    render: () => (
      <div className='flex'>
        <IconBtn color='primary' title='Изменить' icon={EditOutlined} />
      </div>
    ),
  },
];

const data = Array.from({ length: 100000 }, (_, key) => ({
  key,
  name: "Azizbek",
  barcode: Math.floor(Math.random() * 10000000 + 100000),
  basePrice: Math.floor(Math.random() * 10000000 + 100000),
  price: Math.floor(Math.random() * 10000000 + 100000),
  extraPrice: Math.round(Math.random() * 20),
  amount: Math.floor(Math.random() * 19 + 1) + " уп",
  salePrice: Math.floor(Math.random() * 10000000 + 100000),
  expiringDate:
    Math.floor(Math.random() * 30 + 1) +
    "." +
    Math.floor(Math.random() * 11 + 1) +
    ".2020",
}));

export default function AllInventoryGoods() {
  return (
    <div>
      <Layout>
        <TopHeader title='Приход товаров' backButton />
        <Content className='p-4'>
          <div className='p-4 bg-white shadow'>
            {/* <Table columns={columns} dataSource={data} size='small' /> */}
            <VirtualTable
              columns={columns}
              dataSource={data}
              scroll={{ y: 490, x: "100vw" }}
              size='small'
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
}
