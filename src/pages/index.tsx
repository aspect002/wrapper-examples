import { ConfigProvider } from "antd";
import Content from "@/Components/Content/Content";

export default function Home() {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <Content />
    </ConfigProvider>
  );
}
