import { ConfigProvider } from "antd";
import Content from "@/Components/Content/Content";
import { titleToken } from "../themeTokens";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          ...titleToken,
        },
      }}
    >
      <Content />
    </ConfigProvider>
  );
}
