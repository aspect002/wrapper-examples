
"use client";

import React from "react";
import { Form as AntdForm } from "antd";
import type { FormItemProps } from "antd/es/form/FormItem";
import classNames from "classnames";
import styles from "./name.module.scss";
import { nameToken } from "../../../themeTokens";

interface NameProps extends FormItemProps {
  containerClassName?: string;
}

export const Name: React.FC<React.PropsWithChildren<NameProps>> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <AntdForm.Item
        className={classNames(styles["name-container"], className)}
        style={{
          height: nameToken.labelHeight,
          fontSize: nameToken.labelFontSize,
        }}
        {...props}
      />
    </div>
  );
};
