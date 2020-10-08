import React, { useState } from "react";
import {
  Button,
  Table,
  Avatar,
  Modal,
  Form,
  Input,
  Upload,
  message,
} from "antd";
import IconBtn from "../components/IconBtn";
import {
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

interface Cashier {
  id: string;
  avatar: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

const columns = [
  {
    title: "ФИО кассира",
    dataIndex: "fullName",
    key: "fullName",
    render: (name: string, record: Cashier) => (
      <>
        <Avatar src={record.avatar} />
        <span className='ml-4'>{name}</span>
      </>
    ),
  },
  {
    title: "Телефон",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Эл. почта",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Действие",
    dataIndex: "action",
    key: "action",
    render: (text: string, record: Cashier) => (
      <div className='flex'>
        <IconBtn color='primary' title='Изменить' icon={EditOutlined} />
        <IconBtn color='danger' title='Удалить' icon={DeleteOutlined} />
        <IconBtn color='black' icon={MoreOutlined} />
      </div>
    ),
  },
];
const data = [
  {
    id: "azimov-azizbek-c1",
    avatar: "https://randomuser.me/api/portraits/men/0.jpg",
    fullName: "Азимов Азизбек",
    phoneNumber: "998 93 594 99 09",
    email: "azimov.azizbek@gmail.com",
  },
  {
    id: "azimov-azizbek-c2",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    fullName: "Азимов Азизбек",
    phoneNumber: "998 93 594 99 09",
    email: "azimov.azizbek@gmail.com",
  },
  {
    id: "azimov-azizbek-c3",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    fullName: "Азимов Азизбек",
    phoneNumber: "998 93 594 99 09",
    email: "azimov.azizbek@gmail.com",
  },
  {
    id: "azimov-azizbek-c4",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    fullName: "Азимов Азизбек",
    phoneNumber: "998 93 594 99 09",
    email: "azimov.azizbek@gmail.com",
  },
];

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export default function CashiersManagement() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isAvatarUploading, setIsAvatarUploading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<any>();
  const history = useHistory();

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const uploadButton = (
    <div className='w-full'>
      {isAvatarUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Загрузите</div>
    </div>
  );

  const handleUpload = (info: any) => {
    if (info.file.status === "uploading") {
      setIsAvatarUploading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url: string) => {
        setImageUrl(url);
        setIsAvatarUploading(false);
      });
    }
  };

  return (
    <>
      <Modal
        visible={isModalVisible}
        title='Новый кассир'
        okText='Добавить'
        cancelText='Отмена'
        style={{ top: 20 }}
        onCancel={closeModal}>
        <Form
          {...layout}
          name='basic'
          initialValues={{ remember: true }}
          labelAlign='left'>
          <Form.Item label='Фамилия' name='last_name'>
            <Input />
          </Form.Item>

          <Form.Item label='Имя' name='first_name'>
            <Input />
          </Form.Item>
          <Form.Item label='Эл. почта' name='email'>
            <Input />
          </Form.Item>
          <Form.Item label='Номер телефона' name='phone_number'>
            <Input />
          </Form.Item>
          <Form.Item label='Фотография' name='photo'>
            <Upload
              name='avatar'
              listType='picture-card'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              beforeUpload={beforeUpload}
              onChange={handleUpload}>
              {imageUrl ? (
                <div>
                  <img src={imageUrl} alt='avatar' style={{ width: "100%" }} />
                </div>
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item label='Логин' name='login'>
            <Input />
          </Form.Item>
          <Form.Item label='Пароль' name='password'>
            <Input.Password />
          </Form.Item>
          <Form.Item label='Повтотрить пароль' name='repeat_password'>
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
      <div className='bg-white shadow p-4'>
        <div>
          <Button type='primary' onClick={openModal}>
            Новый кассир
          </Button>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          size='small'
          className='py-4'
          pagination={false}
          onRow={(record) => ({
            onClick: () => history.push("/cashier/" + record.id),
          })}
        />
      </div>
    </>
  );
}
