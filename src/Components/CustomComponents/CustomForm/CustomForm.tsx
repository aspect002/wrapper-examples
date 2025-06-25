"use client";
import styles from "./customForm.module.scss";
import React from "react";
import { Form as AntdForm, FormProps } from "antd";
import classNames from "classnames";

interface CustomFormProps extends FormProps {
  containerClassName?: string;
  children?: React.ReactNode;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  containerClassName,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles["form-container"], containerClassName)}>
      <AntdForm {...props}>{children}</AntdForm>
    </div>
  );
};
