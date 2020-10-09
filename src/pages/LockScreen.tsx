import { Col, Row, Form, Input, Button, Checkbox } from "antd";
import React from "react";
import bg from "../assets/bg.jpg";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function LockScreen() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className='h-screen'>
      <Row className='h-full'>
        <Col span={10}>
          <div className='flex flex-col justify-center items-center  h-full'>
            <Form
              name='normal_login'
              className='login-form w-1/2'
              initialValues={{ remember: true }}
              onFinish={onFinish}>
              <Form.Item noStyle>
                <h1 className='text-4xl mb-4 w-full'>Заблокирован</h1>
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}>
                <Input.Password
                  prefix={
                    <LockOutlined className='site-form-item-icon text-gray-600' />
                  }
                  type='password'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  block
                  htmlType='submit'
                  className='login-form-button'>
                  Разблокировать
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={14} className='w-full h-full'>
          <img src={bg} alt='' className='object-cover w-full h-full' />
        </Col>
      </Row>
    </div>
  );
}
