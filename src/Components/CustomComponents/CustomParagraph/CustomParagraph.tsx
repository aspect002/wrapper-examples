import React from "react";
import { Typography } from "antd";
import classNames from "classnames";
import styles from "./customParagraph.module.scss";
import { paragraphToken } from "../../../themeTokens";

const { Paragraph } = Typography;

interface CustomParagraphProps extends React.ComponentProps<typeof Paragraph> {
  containerClassName?: string;
}

export const CustomParagraph: React.FC<
  React.PropsWithChildren<CustomParagraphProps>
> = ({ containerClassName, className, ...props }) => {
  return (
    <div
      className={classNames(styles["wrapper-container"], containerClassName)}
    >
      <Paragraph
        className={classNames(styles["paragraph-container"], className)}
        style={{
          fontSize: paragraphToken.fontSize,
          fontFamily: paragraphToken.fontFamily,
          fontWeight: paragraphToken.fontWeightStrong,
          lineHeight: paragraphToken.lineHeight,
        }}
        {...props}
      />
    </div>
  );
};
