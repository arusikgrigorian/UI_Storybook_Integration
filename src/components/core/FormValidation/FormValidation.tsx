import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import getValidationRules from "./ValidationRules";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const usernameRules = getValidationRules(
  ["required-username", "minimum-5", "maximum-10", "type-email", "whitespace"],
  "Please input your username"
);
const passwordRules = getValidationRules(
  ["required-password", "minimum-8", "maximum-15", "whitespace"],
  "Please input your password"
);

const FormValidation: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item label="Username" name="username" rules={usernameRules} hasFeedback>
      <Input />
    </Form.Item>

    <Form.Item label="Password" name="password" rules={passwordRules} hasFeedback>
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default FormValidation;

// const rules = [
//   {
//     required: { required: true, message: "Please input your username!" },
//     min: { min: 5, message: "Value should be minimum 5 character" },
//     max: { max: 10, message: "Value should be less than 10 character" },
//     type: { type: "email", message: "Username should be type email" },
//     whitespace: { whitespace: true },
//     desc: { required: true, message: "Please input activity form", trigger: "blur" },
//   },
// ];

// const getValidationRules = (rules) => {
//   let rules = [{ min: 5, msg: "sdvgds" }, { max: 5, msg: "sdvgds" }, {}];
//   return rules.map((rule) => {});
//   return rules;
// };

// case "minimum 5":
//   arr.push({
//     min: 5,
//     message: `Value should be ${rule} character`,
//     //"Value should be minimum `${fnc()}` character"
//   });
//   break;
