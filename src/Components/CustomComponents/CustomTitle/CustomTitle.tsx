import React from "react";
import { Typography } from "antd";
import classNames from "classnames";
import styles from "./customTitle.module.scss";
const { Title } = Typography;
import { themeTokens } from "../../../themeTokens"; 
interface CustomTitleProps extends React.ComponentProps<typeof Title> {
  containerClassName?: string;
}

export const CustomTitle: React.FC<
  React.PropsWithChildren<CustomTitleProps>
> = ({ containerClassName, className, ...props }) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Title
        className={classNames(styles["title-container"], className)}
        style={{
          fontSize: themeTokens.fontSizeHeading2,
          fontFamily: themeTokens.fontFamily,
          fontWeight: themeTokens.fontWeightStrong,
          lineHeight: themeTokens.lineHeightHeading2,
        }}
        {...props}
      />
    </div>
  );
};
