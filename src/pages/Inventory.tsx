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

interface Inventory {
  key: string | number;
  status: string;
  name: string;
  startDate: string | number;
  endDate: string | number;
  comment: string;
}

const dataSource = [
  {
    key: "1",
    status: "success",
    name: "Инвентаризация №1",
    startDate: "25.09.2020",
    endDate: "25.09.2020",
    comment: "Началась инвентаризация",
  },
  {
    key: "2",
    status: "warning",
    name: "Инвентаризация №2",
    startDate: "25.09.2020",
    endDate: "25.09.2020",
    comment: "Были некоторые проблемы",
  },
  {
    key: "3",
    status: "error",
    name: "Инвентаризация №3",
    startDate: "25.09.2020",
    endDate: "25.09.2020",
    comment: "Какой то комментарий",
  },
];

const columns = [
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    width: 50,
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
    title: "Название инвентаризации",
    dataIndex: "name",
    key: "name",
    width: 250,
    render: (name: string) => name.toUpperCase(),
  },
  {
    title: "Начало",
    dataIndex: "startDate",
    key: "startDate",
    width: 120,
  },
  {
    title: "Конец",
    dataIndex: "endDate",
    key: "endDate",
    width: 120,
  },
  {
    title: "Комментарий",
    dataIndex: "comment",
    key: "comment",
  },

  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    width: 100,
    render: (_: any, { status }: Inventory) => (
      <div className='flex'>
        <IconBtn
          color='primary'
          title='Изменить'
          icon={EditOutlined}
          disabled={status !== "warning"}
        />
        <IconBtn
          color='yellow'
          title='Активировать'
          icon={ThunderboltOutlined}
          disabled={status !== "warning"}
        />
        <IconBtn
          color='green'
          title='Экспорт в Excel'
          icon={FileExcelOutlined}
          disabled={status !== "warning"}
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

export default function Inventory() {
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
        title='Новая инвентаризация'
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
          Новая инвентаризация
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
            onClick: () => history.push("/all-inventory-goods"),
          })}
          className='customized-table'
        />
        ;
      </div>
    </div>
  );
}
