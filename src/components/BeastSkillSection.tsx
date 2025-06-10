import { Checkbox, Col, Divider, Form, InputNumber, Row } from "antd";
import { Fragment } from "react/jsx-runtime";
import { Typography } from "antd";
const { Text } = Typography;

const BeastSkillSection = () => {
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Beast Skills
        </Typography.Title>
      </Divider>
      <Text>Enter the stats from the Skills sections from the beast. The second tab of the beast screen.</Text>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="beastSkillLE"
            label="Life Essence"
            tooltip={"Beast Skill Life essence Energy Value"}
            rules={[{ required: true, message: "Beast Skill LE is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="beastSkillVE"
            label="Vital Energy"
            tooltip={"Beast Skill Vital Energy Value"}
            rules={[{ required: true, message: "Beast Skill VE is Required" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="beastSkillSTR"
            label="Strength"
            tooltip={"Beast Skill Strength Value"}
            rules={[{ required: true, message: "Beast Skill Str is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="beastSkillDEX"
            label="Dexterity"
            tooltip={"Beast Skill Dexterity Value"}
            rules={[{ required: true, message: "Beast Skill DEX is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="isServantMounted"
            label="Is Mounted"
            tooltip={"Is the beast mounted by a servant."}
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <p>Element Damage skill WIP...</p>
        </Col>
      </Row>
    </Fragment>
  );
};
export default BeastSkillSection;
