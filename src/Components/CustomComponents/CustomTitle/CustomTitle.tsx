import React from "react";
import { Typography } from "antd";
import classNames from "classnames";
import styles from "./customTitle.module.scss";
import { titleToken } from "../../../themeTokens";

const { Title } = Typography;

interface CustomTitleProps extends React.ComponentProps<typeof Title> {
  containerClassName?: string;
}

export const CustomTitle: React.FC<CustomTitleProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Title
        className={classNames(styles["title-container"], className)}
        style={{
          fontSize: titleToken.fontSizeHeading2,
          fontFamily: titleToken.fontFamily,
          fontWeight: titleToken.fontWeightStrong,
          lineHeight: titleToken.lineHeightHeading2,
        }}
        {...props}
      />
    </div>
  );
};
