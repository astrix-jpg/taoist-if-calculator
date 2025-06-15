// App.tsx
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import "./App.css";
import IFCalculator from "./pages/IFCalculator";
import "./firebase"; // just importing initializes it

const FormScreen = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Content style={{ flex: 1, padding: "24px", overflow: "auto" }}>
        <IFCalculator></IFCalculator>
      </Content>

      {/* <Footer>
        <span style={{ fontSize: "12px" }}>
          Taoist Calculator By astrix.jpg
        </span>
        <br />
      </Footer> */}
    </Layout>
  );
};

export default function App() {
  return <FormScreen />;
}
