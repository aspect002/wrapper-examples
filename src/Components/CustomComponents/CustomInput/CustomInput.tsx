"use client";

import React from "react";
import { Input as AntdInput } from "antd";
import type { InputProps } from "antd/es/input";
import classNames from "classnames";
import styles from "./customInput.module.scss";

interface CustomInputProps extends InputProps {
  containerClassName?: string;
  className?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles["input-container"], containerClassName)}>
      <AntdInput className={className} {...props} />
    </div>
  );
};
