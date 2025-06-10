// App.tsx
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";
import {
  Form,
  Select,
  InputNumber,
  Button,
  message,
  Spin,
  Row,
  Col,
  Card,
  Steps,
  Layout,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import BeastinfoSection from "./components/BeastinfoSection";
import "./App.css";
import BeastSkillSection from "./components/BeastSkillSection";
import HeavenArrayBonusSection from "./components/HeavenArrayBonusSection";
import AllianceSkillBonusSection from "./components/AllianceSkillBonusSection";
import AdditionalBonusesSection from "./components/AdditionalBonuses";

const { Option } = Select;
const queryClient = new QueryClient();

// GET: Fetch dropdown options
const fetchDropdownOptions = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  const data = await response.json();
  return data.map((user: any) => ({ label: user.name, value: user.id }));
};

// POST: Submit form data
const postFormData = async (formData: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error("Failed to submit");
  return await response.json();
};

const FormScreen = () => {
  const [form] = Form.useForm();

  const { data: options, isLoading } = useQuery({
    queryKey: ["dropdown-options"],
    queryFn: fetchDropdownOptions,
  });

  const mutation = useMutation({
    mutationFn: postFormData,
    onSuccess: () => {
      message.success("Form submitted successfully!");
      form.resetFields();
    },
    onError: () => {
      message.error("Submission failed");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Content style={{ flex: 1, padding: "24px", overflow: "auto" }}>
        <Spin spinning={isLoading}>
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
                    backgroundColor: "rgba(255, 255, 255, 0.75) !important;",
                    border: "1px solid rgba(0, 0, 0, 0.1);",
                    backdropFilter: "blur(6px);",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1);"
                  }}
                  title="Beast IF Calculator"
                >
                  <BeastinfoSection options={options} />
                  <BeastSkillSection />
                  <HeavenArrayBonusSection />
                  <AllianceSkillBonusSection />
                  <AdditionalBonusesSection />
                  <Row>
                    <Col span={24}>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={mutation.isLoading}
                          block
                        >
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
  return (
    <QueryClientProvider client={queryClient}>
      <FormScreen />
    </QueryClientProvider>
  );
}
