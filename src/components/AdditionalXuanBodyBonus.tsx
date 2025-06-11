import { Col, Divider, Form, InputNumber, Row, Typography } from "antd";
import { Fragment } from "react/jsx-runtime";

const AdditionalXuanBodyBonus = () => {
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Xuan Body Bonus <br />
        </Typography.Title>
      </Divider>
      <Typography.Text>
        Enter the boost values from the Xuan body. Input the numbers as shown in
        game. No need to enter %
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
    </Fragment>
  );
};
export default AdditionalXuanBodyBonus;
