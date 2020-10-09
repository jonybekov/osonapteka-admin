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
    date: "25.09.2020",
    revalNum: "00003452",
    count: "123",
  },
  {
    key: "2",
    status: "warning",
    date: "25.09.2020",
    revalNum: "00003452",
    count: "123",
  },
  {
    key: "3",
    status: "success",
    date: "25.09.2020",
    revalNum: "00003452",
    count: "123",
  },
];

const columns = [
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    width: 30,
    render: (status: string) => {
      switch (status) {
        case "success":
          return <CheckCircleTwoTone twoToneColor='#34C38F' />;
        case "warning":
          return <WarningTwoTone twoToneColor='#F1B44C' />;
        case "error":
          return <CloseCircleTwoTone twoToneColor='#F46A6A' />;
        default:
          return <CheckCircleTwoTone twoToneColor='#34C38F' />;
      }
    },
  },
  {
    title: "Дата переоценки",
    dataIndex: "date",
    key: "date",
    width: 250,
    render: (name: string) => name.toUpperCase(),
  },
  {
    title: "Номер переоценки",
    dataIndex: "revalNum",
    key: "revalNum",
    width: 120,
  },
  {
    title: "Кол-во товаров",
    dataIndex: "count",
    key: "count",
    width: 120,
  },

  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (_: any, record: any) => (
      <div className='flex'>
        <IconBtn
          color='primary'
          title='Изменить'
          icon={EditOutlined}
          disabled={record.status !== "warning"}
        />
        <IconBtn
          color='yellow'
          title='Активировать'
          disabled={record.status !== "warning"}
          icon={ThunderboltOutlined}
        />
        <IconBtn
          color='green'
          title='Экспорт в Excel'
          disabled={record.status !== "warning"}
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

export default function Revaluation() {
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
        title='Новая переоценка'
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
          Новая переоценка
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
            onClick: () => history.push("/revaluation/3"),
          })}
          className='customized-table'
        />
        ;
      </div>
    </div>
  );
}
