// App.tsx
import { Button, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import "./App.css";
import IFCalculator from "./pages/IFCalculator";

const FormScreen = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Content style={{ flex: 1, padding: "24px", overflow: "auto" }}>
        <IFCalculator></IFCalculator>
      </Content>

      <Footer>
        <span style={{ fontSize: "15px" }}>
          Get your game play automated with{" "}
          <a
            href="https://lazyassistant.tech"
            target="_"
            style={{ color: "White" }}
          >
            <Button type="link" style={{ color: "White" }}>
              lazyassistant.tech
            </Button>
          </a>
        </span>
        <br />
      </Footer>
    </Layout>
  );
};

export default function App() {
  return <FormScreen />;
}
