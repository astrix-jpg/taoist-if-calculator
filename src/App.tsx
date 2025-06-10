// App.tsx
import { Form, Button, Spin, Row, Col, Card, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import BeastinfoSection from "./components/BeastinfoSection";
import "./App.css";
import BeastSkillSection from "./components/BeastSkillSection";
import HeavenArrayBonusSection from "./components/HeavenArrayBonusSection";
import AllianceSkillBonusSection from "./components/AllianceSkillBonusSection";
import AdditionalBonusesSection from "./components/AdditionalBonuses";
import { beastData } from "./types/beastdata";
import type { BeastDataType } from "./types/beastDataType";
import type { DefaultOptionType } from "antd/es/select";
import { StarOutlined } from "@ant-design/icons";

const FormScreen = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const beastDataSelect = beastData.map(
    (data: BeastDataType): DefaultOptionType => {
      // const stars = [];
      // for (let i = 0; i < data.Star; i++) {
      //   stars.push(<StarOutlined style={{ color: "gold" }} />);
      // }
      return {
        label: (
          <span>
            {data.Name}-[{data.Star} <StarOutlined style={{ color: "gold" }} />]
          </span>
        ),
        searchParam: data.Name,
        value: data.BeastId,
      };
    }
  );
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Content style={{ flex: 1, padding: "24px", overflow: "auto" }}>
        <Spin spinning={false}>
          <Row gutter={[16, 16]} justify="center">
            {/* Left Card */}
            <Col
              xs={24}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            ></Col>

            {/* Center Form Card */}
            <Col
              xs={24}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ width: "100%" }}
              >
                <Card
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.75)", // soft white with 75% opacity
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)", // nice subtle background blur
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                  title="Beast IF Calculator"
                >
                  <BeastinfoSection options={beastDataSelect} />
                  <BeastSkillSection />
                  <HeavenArrayBonusSection />
                  <AllianceSkillBonusSection />
                  <AdditionalBonusesSection />
                  <Row>
                    <Col span={24}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Form>
            </Col>

            {/* Right Empty Card */}
            <Col
              xs={24}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            ></Col>
          </Row>
        </Spin>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {/* Always at bottom */}
        My Footer ©2025
      </Footer>
    </Layout>
  );
};

export default function App() {
  return <FormScreen />;
}
