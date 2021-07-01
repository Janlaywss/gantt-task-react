import React, { useEffect, useContext } from "react";
import { Form, Select, Button } from "antd";
import styles from "./index.module.css";
import { OptionContext } from "../../contsxt";
const { Option } = Select;

interface RelationProps {
  currentTab: string;
}

const Relation: React.FC<RelationProps> = ({ currentTab }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(123);
    if (currentTab === "relation") {
      form.resetFields();
      // form.setFieldsValue({
      //   FS: "1",
      // });
    }
  }, [currentTab]);
  const { itemRelationData } = useContext(OptionContext);
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <h4 className={styles.mb20}>
        为了让甘特图正确显示，您需要在这里设置甘特图中时间区块的起止时间对应卡片的哪个时间字段
      </h4>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 12 }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="完成到开始关系（FS）"
          name="FS"
          rules={[{ required: true, message: "请选择完成到开始关系（FS）" }]}
        >
          <Select placeholder="请选择">
            {itemRelationData.map((ele: any) => {
              return (
                <Option value={ele.value} key={ele.value}>
                  {ele.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="完成到完成关系（FF）"
          name="FF"
          rules={[{ required: true, message: "请选择完成到完成关系（FF）" }]}
        >
          <Select placeholder="请选择">
            {itemRelationData.map((ele: any) => {
              return (
                <Option value={ele.value} key={ele.value}>
                  {ele.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="开始到开始关系（SS）"
          name="SS"
          rules={[{ required: true, message: "请选择开始到开始关系（SS）" }]}
        >
          <Select placeholder="请选择">
            {itemRelationData.map((ele: any) => {
              return (
                <Option value={ele.value} key={ele.value}>
                  {ele.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="开始到完成关系（SF）"
          name="SF"
          rules={[{ required: true, message: "请选择开始到完成关系（SF）" }]}
        >
          <Select placeholder="请选择">
            {itemRelationData.map((ele: any) => {
              return (
                <Option value={ele.value} key={ele.value}>
                  {ele.label}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            更新
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Relation;
