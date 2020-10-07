import React, { useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  ConfigProvider,
} from "antd";
import {
  CheckCircleTwoTone,
  WarningTwoTone,
  CloseCircleTwoTone,
  FilterOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ThunderboltOutlined,
  PrinterOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import "moment/locale/ru";
import locale from "antd/es/locale/ru_RU";
import IconBtn from "../components/IconBtn";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const dataSource = [
  {
    key: "1",
    status: "success",
    supplier: "Феруз-тарона",
    arrivalDate: "25.09.2020",
    waybillNum: "893489",
    amount: "220",
    price: "12 650 000",
  },
  {
    key: "2",
    status: "warning",
    supplier: "Дори-дармон",
    arrivalDate: "25.09.2020",
    waybillNum: "893489",
    amount: "220",
    price: "12 650 000",
  },
  {
    key: "3",
    status: "error",
    supplier: "MEROS FARM",
    arrivalDate: "25.09.2020",
    waybillNum: "893489",
    amount: "220",
    price: "12 650 000",
  },
];

const columns = [
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      switch (status) {
        case "success":
          return <CheckCircleTwoTone twoToneColor='#34C38F' />;
        case "warning":
          return <CloseCircleTwoTone twoToneColor='#F1B44C' />;
        case "error":
          return <WarningTwoTone twoToneColor='#F46A6A' />;
        default:
          return <CheckCircleTwoTone twoToneColor='#34C38F' />;
      }
    },
  },
  {
    title: "Поставщик",
    dataIndex: "supplier",
    key: "supplier",
    render: (supplier: string) => supplier.toUpperCase(),
  },
  {
    title: "Дата прихода",
    dataIndex: "arrivalDate",
    key: "arrivalDate",
  },
  {
    title: "№ накладного",
    dataIndex: "waybillNum",
    key: "waybillNum",
  },
  {
    title: "Кол-во",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Сумма",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    render: () => (
      <div className='flex'>
        <IconBtn color='primary' title='Изменить' icon={EditOutlined} />
        <IconBtn color='danger' title='Удалить' icon={DeleteOutlined} />
        <IconBtn
          color='yellow'
          title='Активировать'
          icon={ThunderboltOutlined}
        />
        <IconBtn color='blue' title='Печать' icon={PrinterOutlined} />
        <IconBtn
          color='green'
          title='Экспорт в Excel'
          icon={FileExcelOutlined}
        />
      </div>
    ),
  },
];

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Admission() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const history = useHistory();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <div>
      <Modal
        title='Новое поступление'
        visible={isModalVisible}
        okText='Добавить'
        onCancel={closeModal}>
        <Form
          {...layout}
          name='basic'
          labelAlign='left'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label='Дата поступления'
            name='receiptDate'
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <ConfigProvider locale={locale}>
              <DatePicker placeholder='' className='w-full py-1' />
            </ConfigProvider>
          </Form.Item>
          <Form.Item
            label='Накладная №'
            name='invoiceNum'
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label='Дистрибьютор'
            name='distributor'
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Select placeholder='' allowClear>
              <Option value='male'>male</Option>
              <Option value='female'>female</Option>
              <Option value='other'>other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Торговая точка'
            name='outlet'
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <div className='pb-4 flex justify-between items-center'>
        <Button type='primary' onClick={showModal}>
          <PlusOutlined />
          Новое поступлениие
        </Button>
        <Button type='text'>
          Фильтр
          <FilterOutlined />
        </Button>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          size='middle'
          onRow={() => ({
            onClick: () => history.push("/goods-arrival"),
          })}
          className='customized-table'
        />
        ;
      </div>
    </div>
  );
}
