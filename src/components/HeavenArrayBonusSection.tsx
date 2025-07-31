import { Col, Divider, Form, InputNumber, Popover, Row, Typography } from "antd";
import { Fragment } from "react/jsx-runtime";

import heavenSectBonus from "../assets/helpimages/heavensectBonus.png";
import { InfoCircleOutlined } from "@ant-design/icons";

const heavenSectBonusPopoverContent = (
  <div className="content-container">
    <p>Array bonus from Heaven Sect Array. Max is 20% </p>
    <img
      src={heavenSectBonus}
      alt="Heaven Sect Bonus"
      className="content-img"
    />
  </div>
);

const HeavenArrayBonusSection = () => {
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Heaven Array Bonus
        </Typography.Title>
      </Divider>
      <Typography.Text>
        Enter the boost values from the heaven array. Input the numbers as shown
        in game. No need to enter %
      </Typography.Text>
      {" "}
      <Popover
        content={heavenSectBonusPopoverContent}
        title="Heaven Sect Bonuses"
        trigger="hover"
        placement="right"
      >
        <InfoCircleOutlined style={{ color: "red" }} />
      </Popover>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillLEBoostPerc"
            label="Life Essence"
            tooltip={"Life Essence boost % from the heaven sect array"}
            rules={[
              {
                required: true,
                message: "Heaven Boost % for Life Essence is Required",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={20}
              style={{ width: "100%" }}
              addonAfter="%"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillVEBoostPerc"
            label="Vital Energy"
            tooltip={"Vital Energy boost % from the heaven sect array"}
            rules={[
              {
                required: true,
                message: "Heaven Boost % for Vital Energy is Required",
              },
            ]}
          >
            <InputNumber
              max={20}
              min={0}
              style={{ width: "100%" }}
              addonAfter="%"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="heavenSkillSTRBoostPerc"
            label="Strength"
            tooltip={"Strength boost % from the heaven sect array"}
            rules={[
              { required: true, message: "Heaven Boost % for Str is Required" },
            ]}
          >
            <InputNumber
              min={0}
              max={20}
              style={{ width: "100%" }}
              addonAfter="%"
            />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default HeavenArrayBonusSection;
