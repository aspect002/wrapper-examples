"use client";

import React from "react";
import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input";
import classNames from "classnames";
import styles from "./customTextArea.module.scss";

interface CustomTextAreaProps extends TextAreaProps {
  containerClassName?: string;
}

export const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}>
      <Input.TextArea className={classNames(styles["text-area-container"], className)}
        {...props}/>
    </div>
  );
};
