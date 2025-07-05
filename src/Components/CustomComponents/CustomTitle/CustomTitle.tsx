import React from "react";
import { Typography, theme } from "antd";
import classNames from "classnames";
import styles from "./customTitle.module.scss";

const { Title } = Typography;
const { useToken } = theme;

interface CustomTitleProps extends React.ComponentProps<typeof Title> {
  containerClassName?: string;
}

export const CustomTitle: React.FC<CustomTitleProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  const { token } = useToken();

  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Title
        className={classNames(styles["title-container"], className)}
        style={{
          fontSize: token.fontSizeHeading2,
          fontFamily: token.fontFamily,
          fontWeight: token.fontWeightStrong,
          lineHeight: token.lineHeightHeading2,
        }}
        {...props}
      />
    </div>
  );
};
