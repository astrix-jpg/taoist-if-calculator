import {
  Checkbox,
  Col,
  Divider,
  Form,
  InputNumber,
  Row,
  Select,
  type CheckboxChangeEvent,
} from "antd";
import { Fragment } from "react/jsx-runtime";
import { Typography } from "antd";
import { useState } from "react";
const { Text } = Typography;

const BeastSkillSection = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Beast Skills
        </Typography.Title>
      </Divider>
      <Text>
        Enter the stats from the Skills sections from the beast. The second tab
        of the beast screen.
      </Text>
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
       
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="isServantMounted"
            label="Is Mounted"
            tooltip={"Is the beast mounted by a servant."}
            valuePropName="checked"
          >
            <Checkbox
              onChange={(e: CheckboxChangeEvent) => {
                setIsMounted(e.target.checked);
              }}
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="mountedServantRegion"
            label="Servant Region"
            tooltip={"Region of the Mounted Servant"}
            rules={[
              {
                required: isMounted,
                message: "Mounted Servant Region is required",
              },
            ]}
          >
            <Select
              placeholder="Select Region"
              options={[
                {
                  label: "P",
                  value: "P",
                },
                {
                  label: "I",
                  value: "I",
                },
                {
                  label: "S",
                  value: "S",
                },
                {
                  label: "D",
                  value: "D",
                },
              ]}
              disabled={!isMounted}
            ></Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="mountedMight"
            label="Might"
            tooltip={"Beast mounted Might Value"}
            rules={[
              {
                required: isMounted,
                message: "Mounted Might value is required",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              disabled={!isMounted}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="mountedIntellect"
            label="Intellect"
            tooltip={"Beast mounted Intellect Value"}
            rules={[
              {
                required: isMounted,
                message: "Mounted Intellect value is required",
              },
            ]}
          >
            <InputNumber
              min={1}
              style={{ width: "100%" }}
              disabled={!isMounted}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="mountedCommand"
            label="Command"
            tooltip={"Beast mounted Command Value"}
            rules={[
              {
                required: isMounted,
                message: "Mounted Command value is required",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              disabled={!isMounted}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="mountedInsight"
            label="Insight"
            tooltip={"Beast mounted Insight Value"}
            rules={[
              {
                required: isMounted,
                message: "Mounted Insight value is required",
              },
            ]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              disabled={!isMounted}
            />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default BeastSkillSection;
