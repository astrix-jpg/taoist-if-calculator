import {
  Col,
  Divider,
  Form,
  InputNumber,
  Row,
  Typography,
} from "antd";
import { Fragment } from "react/jsx-runtime";

const AdditionalTalismanBonuses = () => {
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Talisman Health Bonus <br />
        </Typography.Title>
      </Divider>
      <Typography.Text>
        Enter the boost values from the talisman health boost.
        Input the numbers as shown in game. No need to enter %
      </Typography.Text>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Form.Item
            name="fallenSwordBoostPerc"
            label="Sword Health Boost"
            tooltip={"Health Boost % from Fallen Sword Talisman"}
            rules={[
              {
                required: true,
                message: "Sword Health Boost is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Form.Item
             name="guardingHatBoostPerc"
            label="Hat Health Boost"
            tooltip={"Health Boost % from Hat Talisman"}
            rules={[
              {
                required: true,
                message: "Hat Health Boost is Required",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Form.Item
             name="robeBoostPerc"
            label="Robe Health Boost"
            tooltip={"Health Boost % from Robe Talisman"}
            rules={[
              {
                required: true,
                message: "Robe Health Boost is Required",
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
export default AdditionalTalismanBonuses;
