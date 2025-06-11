import { Fragment } from "react/jsx-runtime";
import { Form, Button, Spin, Row, Col, Card, Modal, message } from "antd";
import BeastinfoSection from "./../components/BeastinfoSection";
import BeastSkillSection from "./../components/BeastSkillSection";
import HeavenArrayBonusSection from "./../components/HeavenArrayBonusSection";
import AllianceSkillBonusSection from "./../components/AllianceSkillBonusSection";
import AdditionalBonusesSection from "./../components/AdditionalTalismanBonuses";
import { beastData, beastLookupData } from "./../types/beastdata";
import type { BeastDataLookup } from "./../types/beastDataType";
import type { DefaultOptionType } from "antd/es/select";
import { StarFilled } from "@ant-design/icons";
import type { UserIfInput } from "./../types/userIfInput";
import { calculateIf } from "./../utils/ifcalcutil";
import AdditionalXuanBodyBonus from "./../components/AdditionalXuanBodyBonus";
import { useEffect, useState } from "react";
const IFCalculator = () => {
  const [form] = Form.useForm<UserIfInput>();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<{
    beastTotalIf: number;
    unmountTotalIfloss: number;
  }>();

  const onFinish = (values: UserIfInput) => {
    setLoading(true);
    const selectedbeastData = beastData.find(
      (x) => x.BeastId == values.beastId
    );
    if (!selectedbeastData) {
      messageApi.error(
        "There was problem getting data for the selected beast."
      );
      return;
    }
    const result = calculateIf(values, selectedbeastData);
    setResult(result);
    // setLoading(false)
  };

  useEffect(() => {
    if (result) {
      showResultModal();
    }
  }, [result]);

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
    //setLoading(false);
  };
  const handleResultModalOk = () => {
    setOpenResultModal(false);
    setLoading(false);
  };

  const handleResultModalCancel = () => {
    setOpenResultModal(false);
    setLoading(false);
  };

  return (
    <Fragment>
      {contextHolder}

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
                    <Spin spinning={loading}>
                      <Button type="primary" htmlType="submit" block>
                        Calculate
                      </Button>
                    </Spin>
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
        <div className="ifresultdisplay">
          <p>Total Beast IF : {result?.beastTotalIf ?? 0}</p>
          <p>Unmount IF Loss : {result?.unmountTotalIfloss ?? 0}</p>
        </div>
        <div className="assistantadvmodal">
          <p>
            Looking for service to automate your gameplay? <br /> Checkout
            <span> </span>
            <a href="https://lazyassistant.tech" target="_">
              lazyassistant.tech
            </a>
            . Cheap and efficient way to get your activities done.
          </p>
          <span>
            <a href="https://lazyassistant.tech" target="_">
              <Button type="dashed">Visit Site</Button>
            </a>
          </span>
        </div>
      </Modal>
    </Fragment>
  );
};

export default IFCalculator;
