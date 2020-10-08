import React, { useState } from "react";
import {
  Button,
  Col,
  Descriptions,
  Input,
  Layout,
  Modal,
  Row,
  Table,
} from "antd";
import TopHeader from "../components/TopHeader";
import VirtualTable from "../components/VirtualTable";
import IconBtn from "../components/IconBtn";
import { EditOutlined } from "@ant-design/icons";
const { Content } = Layout;

interface Product {
  key: string | number;
  name: string;
  manufacturer: string;
  barcode: number;
  arrivalDate: number | string;
  salePrice: number;
  expiringDate: string | number;
  packVolume: number;
  amount: number;
}

const columns = [
  {
    title: "№",
    dataIndex: "key",
    width: 30,
  },
  { title: "Название товара", dataIndex: "name", width: 200 },
  { title: "Производитель", dataIndex: "manufacturer", width: 200 },
  { title: "Штрих код", dataIndex: "barcode", width: 130 },
  { title: "Дата приход", dataIndex: "arrivalDate", width: 80 },
  { title: "Прод цена", dataIndex: "salePrice", width: 90 },
  { title: "Срок годности", dataIndex: "expiringDate", width: 90 },
  { title: "В пачке", dataIndex: "packVolumne", width: 120 },
  { title: "Кол-во", dataIndex: "amount", width: 60 },
  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    width: 120,
  },
];

const data = Array.from({ length: 100000 }, (_, key) => ({
  key,
  name: "Азимакс mr сусп. 200мг/5мл 30мл",
  manufacturer: "Uz-Korea Mediacal",
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

const columns2 = [
  { title: "Сколько", dataIndex: "howMuch" },
  { title: "Когда", dataIndex: "when" },
  { title: "Сколько", dataIndex: "who" },
];
const data2 = [
  {
    howMuch: "+5 уп",
    when: "18.09.2020 09:41",
    who: "Фармацефт №3",
  },
  {
    howMuch: "-2 уп",
    when: "16.09.2020   10:01",
    who: "Фармацефт №2",
  },
  {
    howMuch: "+3 уп",
    when: "15.09.2020   20:32",
    who: "Фармацефт №1",
  },
];

const ModalContent = (data: any) => (
  <div>
    <Row>
      <Col span={10} className='mb-4 font-light'>
        Наименование
      </Col>
      <Col span={14} className='mb-4'>
        Азимакс mr сусп. 200мг/5мл 30мл
      </Col>

      <Col span={10} className='mb-4 font-light'>
        Цена
      </Col>
      <Col span={14} className='mb-4'>
        261,00
      </Col>

      <Col span={10} className='mb-4 font-light'>
        Годен до
      </Col>
      <Col span={14} className='mb-4'>
        20.12.2020
      </Col>

      <Col span={10} className='mb-4 font-light'>
        Производитель
      </Col>
      <Col span={14} className='mb-4'>
        Uz-Korea Mediacal
      </Col>

      <Col span={10} className='mb-4 font-light'>
        Количество
      </Col>

      <Col span={14} className='mb-4'>
        <Row gutter={16}>
          <Col span={12}>
            <Input addonAfter='уп' />
          </Col>
          <Col span={12}>
            <Input addonAfter='шт' />
          </Col>
        </Row>
      </Col>
    </Row>

    <div className='flex justify-between items-center p-4 border-solid border rounded border-gray-600'>
      <span>Текущее кол-во</span>
      <span>20 уп</span>
    </div>

    <Table
      dataSource={data2}
      columns={columns2}
      size='small'
      className='mt-4 mb-2'
      pagination={false}
    />
  </div>
);

export default function AllInventoryGoods() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editableRow, setEditableRow] = useState<Product | null>(null);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const onEdit = (row: Product) => {
    openModal();
    setEditableRow(row);
  };

  return (
    <div>
      <Modal
        title='Ввод реального товара'
        visible={isModalVisible}
        centered
        // style={{ top: 20 }}
        onOk={closeModal}
        okText='Выполнить'
        cancelText='Отмена'
        onCancel={closeModal}>
        {editableRow ? <ModalContent data={editableRow} /> : "Loading"}
      </Modal>
      <Layout>
        <TopHeader title='Приход товаров' backButton />
        <Content className='p-4'>
          <div className='p-4 bg-white shadow'>
            <VirtualTable
              columns={columns}
              dataSource={data}
              scroll={{ y: 510, x: "100vw" }}
              size='small'
              actions={{
                render: (row: Product) => (
                  <div>
                    <IconBtn
                      color='primary'
                      icon={EditOutlined}
                      clickHandler={() => onEdit(row)}
                    />
                  </div>
                ),
              }}
            />
          </div>
        </Content>
      </Layout>
    </div>
  );
}
