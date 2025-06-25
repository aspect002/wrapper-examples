"use client";
import { Form as AntdForm, Button, Input } from "antd";
import { CustomForm } from "../CustomComponents";
import styles from "./myForm.module.scss";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const MyForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <CustomForm onFinish={onFinish}>
      <Title level={2}>GET IN TOUCH </Title>
      <Paragraph>We are here to answer any question you may have.</Paragraph>

      <div className={styles.nameEmail}>
        <AntdForm.Item
          label="NAME"
          name="name"
          rules={[{ required: true }]}
          colon={false}
        >
          <Input placeholder="Enter your name" />
        </AntdForm.Item>
        <AntdForm.Item
          label="EMAIL ADDRESS"
          name="email"
          rules={[{ required: true }]}
          colon={false}
        >
          <Input placeholder="Enter your email" />
        </AntdForm.Item>
      </div>

      <AntdForm.Item
        label="SUBJECT"
        name="Subject"
        rules={[{ required: true }]}
        colon={false}
      >
        <Input placeholder="Request for property information" />
      </AntdForm.Item>

      <AntdForm.Item
        label="MESSAGE"
        name="message"
        rules={[{ required: true }]}
        colon={false}
      >
        <Input.TextArea placeholder="Please enter a detailed description of your inquiry..." />
      </AntdForm.Item>
      <AntdForm.Item>
        <Button type="primary">Submit now</Button>
      </AntdForm.Item>
    </CustomForm>
  );
};

export default MyForm;
