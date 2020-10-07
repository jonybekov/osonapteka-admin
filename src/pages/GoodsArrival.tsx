import React from "react";
import { Layout, Form, Input, Select, Button, Row, Col } from "antd";
import TopHeader from "../components/TopHeader";
import VirtualTable from "../components/VirtualTable";
import { Scrollbars } from "react-custom-scrollbars";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Content, Sider } = Layout;
const { Option } = Select;

export default function GoodsArrival() {
  const history = useHistory();

  // Usage
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
    { title: "Действие", dataIndex: "action", width: 120 },
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

  return (
    <Layout>
      <Scrollbars
        style={{ width: 300, height: "100vh", position: "fixed" }}
        autoHide
        className='shadow'>
        <Sider width={"300"} className='bg-white  px-4 pb-4'>
          <div style={{ height: 48 }} className='flex items-center'>
            <LeftOutlined onClick={() => history.goBack()} />
            <span className='pl-4'>Добавление товара</span>
          </div>
          <Form layout='vertical' className='compact-form'>
            <Form.Item label='Штрих код' name='username'>
              <Input />
            </Form.Item>

            <Form.Item label='Наименование товара' name='password'>
              <Input />
            </Form.Item>

            <Form.Item label='Укажите количество'>
              <Form.Item
                name='package'
                className='inline-block'
                style={{ width: "calc(50% - 8px)" }}>
                <Input addonAfter='уп' />
              </Form.Item>
              <Form.Item
                name='amount'
                className='inline-block'
                style={{ width: "calc(50% - 8px)", marginLeft: 16 }}>
                <Input addonAfter='шт' />
              </Form.Item>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label='Базовая цена' name='base_price'>
                  <Input />
                </Form.Item>
                <Form.Item label='Наценка' name='extra_charge'>
                  <Input />
                </Form.Item>
                <Form.Item label='Цена за штуку' name='single_price'>
                  <Input />
                </Form.Item>
                <Form.Item label='Хранение' name='storage'>
                  <Select placeholder=''>
                    <Option value='shkaf'>Шкаф</Option>
                    <Option value='shkaf'>Шкаф</Option>
                  </Select>
                </Form.Item>
                <Form.Item label='Срок годности' name='expiration_date'>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='Приходная цена' name='purchase_price'>
                  <Input />
                </Form.Item>
                <Form.Item label='Продажная цена' name='sale_price'>
                  <Input />
                </Form.Item>
                <Form.Item label='НДС' name='NDS'>
                  <Input />
                </Form.Item>
                <Form.Item label='Бонус' name='bonus'>
                  <Input />
                </Form.Item>
                <Form.Item label='Серия препарата' name='drug_series'>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label='Изготовитель'>
              <Select placeholder=''>
                <Option value='shkaf'>Шкаф</Option>
                <Option value='shkaf'>Шкаф</Option>
              </Select>
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label='Форма выпуска'>
                  <Select placeholder=''>
                    <Option value='tabletka'>Таблетка</Option>
                    <Option value='kapsula'>Капсула</Option>
                  </Select>
                </Form.Item>
                <Form.Item className='pt-4'>
                  <Button type='ghost' block htmlType='submit'>
                    Сбросить
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='В пачке штук' name='drug_series'>
                  <Input addonAfter='шт' />
                </Form.Item>
                <Form.Item className='pt-4'>
                  <Button type='primary' block htmlType='submit'>
                    Добавить
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Sider>
      </Scrollbars>
      <Layout style={{ marginLeft: 300 }}>
        <TopHeader title='Приход товаров' />
        <Content className='p-4'>
          <div className='p-4 bg-white shadow'>
            <VirtualTable
              columns={columns}
              dataSource={data}
              scroll={{ y: 490, x: "100vw" }}
              size='small'
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
