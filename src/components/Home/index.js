import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <div>
      <Layout>
        <Header theme = "light">Home</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
