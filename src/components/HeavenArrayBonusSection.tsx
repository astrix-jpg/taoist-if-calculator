import { Checkbox, Col, Divider, Form, InputNumber, Row, Select, Typography } from "antd";
import { Fragment } from "react/jsx-runtime";
import type { BeastType } from "../types/BeastDataSelectType";

const HeavenArrayBonusSection = (props) => {
  const { options } = props;

  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Heaven Array Bonus
        </Typography.Title>
      </Divider>
        <Typography.Text>Enter the boost values from the heaven array. Input the numbers as shown in game. No need to enter %</Typography.Text>
         <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillLEBoostPerc"
            label="Life Essence"
             tooltip={"Life Essence boost % from the heaven sect array"}
            rules={[{ required: true, message: "Heaven Boost % for Life Essence is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillVEBoostPerc"
            label="Vital Energy"
           tooltip={"Vital Energy boost % from the heaven sect array"}
            rules={[{ required: true, message: "Heaven Boost % for Vital Energy is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }}  addonAfter="%"  />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillSTRBoostPerc"
            label="Strength"
            tooltip={"Strength boost % from the heaven sect array"}
            rules={[{ required: true, message: "Heaven Boost % for Str is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }}   addonAfter="%"  />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillDEXBoost"
            label="Dexterity"
            tooltip={"Dexterity boost number from the heaven sect array"}
            rules={[{ required: true, message: "Heaven Boost value for DEX is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default HeavenArrayBonusSection;
