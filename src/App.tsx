// App.tsx
import {
  Form,
  Button,
  Spin,
  Row,
  Col,
  Card,
  Layout,
  Modal,
  message,
} from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import BeastinfoSection from "./components/BeastinfoSection";
import "./App.css";
import BeastSkillSection from "./components/BeastSkillSection";
import HeavenArrayBonusSection from "./components/HeavenArrayBonusSection";
import AllianceSkillBonusSection from "./components/AllianceSkillBonusSection";
import AdditionalBonusesSection from "./components/AdditionalTalismanBonuses";
import { beastData, beastLookupData } from "./types/beastdata";
import type { BeastDataLookup } from "./types/beastDataType";
import type { DefaultOptionType } from "antd/es/select";
import { HeartFilled, StarFilled } from "@ant-design/icons";
import type { UserIfInput } from "./types/userIfInput";
import { calculateIf } from "./utils/ifcalcutil";
import AdditionalXuanBodyBonus from "./components/AdditionalXuanBodyBonus";
import { useState } from "react";

const FormScreen = () => {
  const [form] = Form.useForm<UserIfInput>();
  const [messageApi, contextHolder] = message.useMessage();
  //  const [loading,setLoading] = useState<boolean>(false);

  const onFinish = (values: UserIfInput) => {
    //setLoading(true)
    const selectedbeastData = beastData.find(
      (x) => x.BeastId == values.beastId
    );
    if (!selectedbeastData) {
      messageApi.error(
        "There was problem getting data for the selected beast."
      );
      return;
    }
    const { beastTotalIf, unmountTotalIfloss } = calculateIf(
      values,
      selectedbeastData
    );
    showResultModal();
    // setLoading(false)
  };

  const beastDataSelect = beastLookupData.map(
    (data: BeastDataLookup): DefaultOptionType => {
      // const stars = [];
      // for (let i = 0; i < data.Star; i++) {
      //   stars.push(<StarOutlined style={{ color: "gold" }} />);
      // }
      return {
        label: (
          <span>
            {data.Name}-[{data.Star} <StarFilled style={{ color: "gold" }} />]
          </span>
        ),
        searchParam: data.Name,
        value: data.BeastId,
      };
    }
  );

  /* Result Modal  */
  const [openResultModal, setOpenResultModal] = useState(false);

  const showResultModal = () => {
    setOpenResultModal(true);
  };
  const handleResultModalOk = () => {
    setOpenResultModal(false);
  };

  const handleResultModalCancel = () => {
    setOpenResultModal(false);
  };

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {contextHolder}
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
                  <AdditionalXuanBodyBonus />
                  <Row>
                    <Col span={24}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                          Calculate
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
      <Modal
        open={openResultModal}
        title="IF Calculator Result"
        onOk={handleResultModalOk}
        onCancel={handleResultModalCancel}
        destroyOnHidden={false} // Don't destroy the DOM on close
        forceRender
        footer={(_, { OkBtn }) => (
          <>
            <OkBtn />
          </>
        )}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>
          If you are looking for some help with your game, Checkout
          Lazyassistant.tech. Cheap and efficient way to get your activities
          done.
        </p>
      </Modal>
      <Footer>
        <span>
          Made with <HeartFilled style={{ color: "red" }} />
        </span>
        <br />
        <a href="https://lazytaoist.tech" style={{ color: "black" }}>
          Try lazytaoist
        </a>
      </Footer>
    </Layout>
  );
};

export default function App() {
  return <FormScreen />;
}
