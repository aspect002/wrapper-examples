import React from "react";
import { Typography } from "antd";
import classNames from "classnames";
import styles from "./customParagraph.module.scss";

const { Paragraph } = Typography;

interface CustomParagraphProps extends React.ComponentProps<typeof Paragraph> {
  containerClassName?: string;
}

export const CustomParagraph: React.FC<
  React.PropsWithChildren<CustomParagraphProps>
> = ({ containerClassName, className, ...props }) => {
  return (
    <div
      className={classNames(styles["paragraph-container"], containerClassName)}
    >
      <Paragraph className={className} {...props} />
    </div>
  );
};
