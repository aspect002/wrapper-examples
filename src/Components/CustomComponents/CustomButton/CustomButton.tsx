"use client";

import React from "react";
import { Button, ButtonProps } from "antd";
import classNames from "classnames";
import styles from "./customButton.module.scss";
import { buttonToken } from "../../../themeTokens";

interface CustomButtonProps extends ButtonProps {
  containerClassName?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Button
        className={classNames(styles["button-container"], className)}
        style={{
          paddingInline: buttonToken.paddingInline,
          borderRadius: buttonToken.borderRadius,
          color: buttonToken.primaryColor,
          backgroundColor: buttonToken.primaryBg,
          borderColor: buttonToken.borderColor,
        }}
        {...props}
      />
    </div>
  );
};
