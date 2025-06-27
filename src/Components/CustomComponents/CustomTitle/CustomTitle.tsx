import React from "react";
import { Typography } from "antd";
import classNames from "classnames";
import styles from "./customTitle.module.scss";

const { Title } = Typography;

interface CustomTitleProps extends React.ComponentProps<typeof Title> {
  containerClassName?: string;
}

export const CustomTitle: React.FC<
  React.PropsWithChildren<CustomTitleProps>
> = ({ containerClassName, className, ...props }) => {
  return (
    <div className={classNames(styles["title-container"], containerClassName)}>
      <Title className={className} {...props} />
    </div>
  );
};
