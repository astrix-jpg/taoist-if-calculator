import {  Col, Divider, Form, InputNumber, Popover, Row,  Typography } from "antd";
import { Fragment } from "react/jsx-runtime";

import allianceBonus from "../assets/helpimages/allianceBonus.png";
import { InfoCircleOutlined } from "@ant-design/icons";


const allianceBonusPopoverContent = (
  <div className="content-container">
    <p>Bonus value from Alliance Skill. Enter the +X% value, without the %. Not the level. </p>
    <img
      src={allianceBonus}
      alt="alliance skill bonus"
      className="content-img"
    />
  </div>
);

const AllianceSkillBonusSection = () => {

  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Alliance Skill Bonus
        </Typography.Title>
      </Divider>
        <Typography.Text>Enter the boost values from the Alliance Skills. Input the numbers as shown in game. No need to enter %</Typography.Text>
        {" "}
      <Popover
        content={allianceBonusPopoverContent}
        title="Alliance Skill %"
        trigger="hover"
        placement="right"
      >
        <InfoCircleOutlined style={{ color: "red" }} />
      </Popover>
         <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="allianceLEBoostPerc"
            label="Life Essence"
             tooltip={"Life Essence boost % from the alliance skill"}
            rules={[{ required: true, message: "alliance skill % for Life Essence is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="allianceVEBoostPerc"
            label="Vital Energy"
           tooltip={"Vital Energy boost % from the alliance skill"}
            rules={[{ required: true, message: "alliance skill % for Vital Energy is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }}  addonAfter="%"  />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="allianceSTRBoostPerc"
            label="Strength"
            tooltip={"Strength boost % from the alliance skill"}
            rules={[{ required: true, message: "alliance skill % for Str is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }}   addonAfter="%"  />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="allianceDEXBoost"
            label="Dexterity"
            tooltip={"Dexterity boost number from the alliance skill"}
            rules={[{ required: true, message: "alliance skill % for DEX is Required" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }}   addonAfter="%"  />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default AllianceSkillBonusSection;
