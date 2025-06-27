"use client";

import React from "react";
import { Form as AntdForm } from "antd";
import type { FormItemProps } from "antd/es/form/FormItem";
import classNames from "classnames";
import styles from "./name.module.scss";

interface NameProps extends FormItemProps {
  containerClassName?: string;
  label: string;
}

export const Name: React.FC<React.PropsWithChildren<NameProps>> = ({
  containerClassName,
  className,
  label,
  ...props
}) => {
  return (
    <div className={classNames(styles["name-container"], containerClassName)}>
      <AntdForm.Item
        label={label}
        colon={false}
        className={className}
        {...props}
      ></AntdForm.Item>
    </div>
  );
};
