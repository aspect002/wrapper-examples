"use client";
import { CustomForm } from "../CustomComponents";
import styles from "./myForm.module.scss";
import {
  Name,
  CustomInput,
  CustomTitle,
  CustomParagraph,
  CustomTextArea,
  CustomButton,
} from "../CustomComponents";

const MyForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <CustomForm onFinish={onFinish}>
      <CustomTitle level={2}>GET IN TOUCH</CustomTitle>
      <CustomParagraph>
        We are here to answer any question you may have.
      </CustomParagraph>
      <div className={styles.nameInput}>
        <Name
          name="name"
          rules={[{ required: true }]}
          label="NAME"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <CustomInput placeholder="Enter your name" autoComplete="name" />
        </Name>

        <Name
          name="email"
          rules={[{ required: true }]}
          label="EMAIL ADDRESS"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <CustomInput placeholder="Enter your email" autoComplete="email" />
        </Name>
      </div>
      <Name
        name="subject"
        rules={[{ required: true }]}
        label="SUBJECT"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <CustomInput
          placeholder="Request for property information"
          autoComplete="off"
        />
      </Name>

      <Name
        name="message"
        rules={[{ required: true }]}
        label="MESSAGE"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <CustomTextArea
          placeholder="Please enter a detailed description of your inquiry..."
          autoComplete="off"
        />
      </Name>

      <CustomButton type="primary">Submit now</CustomButton>
    </CustomForm>
  );
};

export default MyForm;
