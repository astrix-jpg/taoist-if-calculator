import { Col, Divider, Form, InputNumber, Row, Select, Typography } from "antd";
import { Fragment } from "react/jsx-runtime";
import type { BeastType } from "../types/beastType";

const BeastinfoSection = (props) => {
  const { options } = props;

  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Beast Section
        </Typography.Title>
      </Divider>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={16}>
          <Form.Item
            name="beastId"
            label="Beast"
            rules={[{ required: true }]}
            tooltip={
              "Select the beast that you want to calculate your Immortal Force For"
            }
          >
            <Select placeholder="Select Beast">
              {options?.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            name="numberOfBeast"
            label="Number of Beasts"
            tooltip={"Specify the number of total beasts in the beast garden."}
            rules={[{ required: true }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            name="beastLevel"
            label="Beast Level"
            tooltip={"Current Level of the beast"}
            rules={[
              { required: true, message: "Beast Level is Required" },
              {
                type: "number",
                max: 520,
                min: 1,
                message: "Level must be 1 to 520",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            name="beastRank"
            label="Beast Rank"
            tooltip={"Current Rank of the beast"}
            rules={[
              { required: true },
              {
                type: "number",
                max: 21,
                message: "Beast Rank must be ≤ 21",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Form.Item
            name="beastBloodLineLevel"
            label="Bloodline Level"
            tooltip={"Current Bloodline level of the beast"}
            rules={[
              { required: true },
              {
                type: "number",
                max: 6,
                min: 0,
                message: "Beast Rank must be ≤ 6",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default BeastinfoSection;
