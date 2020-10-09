import React, { useState } from "react";
import { Button, Col, Input, Layout, Modal, Row, Table } from "antd";
import TopHeader from "../components/TopHeader";
import VirtualTable from "../components/VirtualTable";

const { Content } = Layout;

const columns1 = [
  {
    title: "Название товара",
    dataIndex: "productName",
    ellipsis: true,
  },
  {
    title: "Производитель",
    dataIndex: "manufacturer",
    width: 120,
  },
  { title: "Штрих код", dataIndex: "barcode", width: 125 },
  { title: "Страна", dataIndex: "country", width: 125 },
  { title: "Ед. изм", dataIndex: "type", width: 125 },
  { title: "Остаток", dataIndex: "remainder", width: 125 },
  { title: "Приход цена", dataIndex: "initialPrice", width: 100 },
  { title: "Наценка", dataIndex: "extraCharge", width: 125 },
  { title: "Цена", dataIndex: "price", width: 125 },
];

const manufacturers = ["Лекфарм", "Промед", "Ферон"];
const country = ["Россия", "Чехия", "Узбекистан", "Беларусь"];
const type = ["Таб", "Супп"];
const remainder = ["3 уп", "3 уп, 5 шт"];

function randomValue(arr: any[]) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

export default function RevaluationDetails() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedRows, setSelectedRows] = useState<any>([]);

  const [rows] = useState(
    Array.from({ length: 10 }, (_, key) => ({
      key,
      productName: "Азимакс mr сусп. 200мг/5мл 30мл",
      manufacturer: randomValue(manufacturers),
      barcode: Math.floor(Math.random() * 99999999 + 10000000),
      country: randomValue(country),
      type: randomValue(type),
      remainder: randomValue(remainder),
      initialPrice: Math.floor(Math.random() * 99999999 + 10000000),
      extraCharge: Math.floor(Math.random() * 99999 + 10000),
      price: Math.floor(Math.random() * 99999999 + 10000000),
    }))
  );

  const rowSelection = {
    selectedRowKeys: selectedRows,

    onChange: (selectedRowKeys: any) => {
      console.log(selectedRowKeys);
      setSelectedRows(selectedRowKeys);
    },
  };

  const closeModal = () => setIsModalVisible(false);
  const openModal = () => setIsModalVisible(true);

  const ModalContent = (data: any) => (
    <div>
      <Row>
        <Col span={10} className='mb-4 font-light'>
          Изменение на %
        </Col>
        <Col span={14} className='mb-4'>
          <Input />
        </Col>

        <Col span={10} className='mb-4 font-light'>
          Новая цена
        </Col>
        <Col span={14} className='mb-4'>
          <Input />
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      <Modal
        title='Переоценка товаров'
        visible={isModalVisible}
        centered
        // style={{ top: 20 }}
        onOk={closeModal}
        okText='Выполнить'
        cancelText='Отмена'
        onCancel={closeModal}>
        <ModalContent />
      </Modal>
      <Layout>
        <TopHeader title='Переоценкза за 25.09.2020' backButton />
        <Content className='p-4'>
          <div className='p-4 bg-white shadow'>
            <div className='mb-4'>
              <Button
                type='primary'
                disabled={selectedRows.length <= 0}
                onClick={openModal}>
                Переоценка
              </Button>
            </div>
            <Table
              size='small'
              className='big-table column-text-bold-2'
              rowSelection={rowSelection}
              dataSource={rows}
              columns={columns1}
              //   scroll={{ y: 510, x: "100vw" }}
              pagination={false}
            />
            {/* <VirtualTable
              
              scroll={{ y: 510, x: "100vw" }}
            /> */}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
