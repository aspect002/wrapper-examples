"use client";

import React from "react";
import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input";
import classNames from "classnames";
import styles from "./customTextArea.module.scss";
import { textAreaToken } from "../../../themeTokens";

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
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Input.TextArea
        className={classNames(styles["text-area-container"], className)}
        style={{
          height: textAreaToken.height,
          borderColor: textAreaToken.borderColor,
          boxShadow: textAreaToken.boxShadow,
          resize: "none",
        }}
        {...props}
      />
    </div>
  );
};
