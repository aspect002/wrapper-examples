"use client";

import React from "react";
import { Input as AntdInput } from "antd";
import type { InputProps } from "antd/es/input";
import classNames from "classnames";
import styles from "./customInput.module.scss";
import { inputToken } from "../../../themeTokens";

interface CustomInputProps extends InputProps {
  containerClassName?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <AntdInput
        className={classNames(styles["input-container"], className)}
        style={{
          paddingBlock: inputToken.paddingBlock,
          paddingInline: inputToken.paddingInline,
          borderColor: inputToken.borderColor,
          boxShadow: inputToken.activeShadow,
        }}
        {...props}
      />
    </div>
  );
};
