import { Col, Divider, Form, InputNumber, Row,  Select,  Typography } from "antd";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const elementTalismanLookup:Record<string, string> = {
  Gold: 'Thunder Order Health Boost',
  Wood: 'Bracelet Health Boost',
  Fire: 'Boot Health Boost',
  Water: 'Ring Health Boost',
  Earth: 'Necklace Health Boost',
};

const ElementalSection = () => {
 const [skillType,setSkillType] = useState<string>("");
  return (
    <Fragment>
      <Divider dashed orientation="left" size="small">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Elemental Data [Optional]
        </Typography.Title>
      </Divider>
        <Typography.Text>Enter the element data from Beast skill , Personal attribtue page and respective talisman boost.</Typography.Text>
         <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="elementType"
            label="Beast Element Skill Type"
            tooltip={"Specify the element that gives beast has skill % boost for"}
          >
            <Select
              options={
                ["Gold","Wood","Water","Earth","Fire"].map((i:string) => ({
                label: i,
                value: i,
              }))
              }
              onChange={(value:string)=>{
                setSkillType(value);
              }}
            ></Select>
            {/* <InputNumber min={0} style={{ width: "100%" }} /> */}
          </Form.Item>
        </Col>
         <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="beastSkillElemental"
            label={`Beast ${skillType} Skill`}
            tooltip={"Beast Elemental skill % Value, No need to enter % just the value"}
            initialValue={0}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%"  />
          </Form.Item>
        </Col>

         <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Form.Item
            name="personalElementalValue"
            label={`${skillType?`${skillType} Damage`:"Element Stats"}`}
            tooltip={"Personal elemental stats for the associating beast elemental skill"}
            initialValue={0}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

         <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Form.Item
             name="talismanElementBoostPerc"
            label={elementTalismanLookup[skillType]??"Element Health Boost"}
            tooltip={"Associating Element Health Bonus from Talisman"}
           initialValue={0}
          >
            <InputNumber min={0} style={{ width: "100%" }} addonAfter="%" />
          </Form.Item>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ElementalSection;
