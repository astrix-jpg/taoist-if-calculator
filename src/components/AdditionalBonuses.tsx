import {
  
  Col,
  Divider,
  Form,
  InputNumber,
  Row,
  
  Typography,
} from "antd";
import { Fragment } from "react/jsx-runtime";

const AdditionalBonusesSection = () => {
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Additinal Skill Bonus <br />
          [Xuan Body level & Talisman Health boost]
        </Typography.Title>
      </Divider>
      <Typography.Text>
        Enter the boost values from the Xuan body and talisman health boost.
        Input the numbers as shown in game. No need to enter %
      </Typography.Text>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="xuanBoostPerc"
            label="Xuan Body Boost"
            tooltip={"boost % from Xuan Body Level"}
            rules={[
              {
                required: true,
                message: "Xuan Body Boost is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="xuanBoostPerc"
            label="Xuan Body Boost"
            tooltip={"boost % from Xuan Body Level"}
            rules={[
              {
                required: true,
                message: "Xuan Body Boost is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="healthBoostSwordPerc"
            label="Vital Energy"
            tooltip={"Vital Energy boost % from the alliance skill"}
            rules={[
              {
                required: true,
                message: "alliance skill % for Vital Energy is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="healthBoostRobePerc"
            label="Strength"
            tooltip={"Strength boost % from the alliance skill"}
            rules={[
              {
                required: true,
                message: "alliance skill % for Str is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="healthBoostHatPerc"
            label="Dexterity"
            tooltip={"Dexterity boost number from the alliance skill"}
            rules={[
              {
                required: true,
                message: "alliance skill % for DEX is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default AdditionalBonusesSection;
