import {Form, Input, DatePicker} from "antd";

export default function (formItem: T_FormItemText) {
  return (
    <Form.Item
      label={formItem.label}
      name={formItem.name}
      rules={formItem.rules}>
      <DatePicker format={'YYYY-MM-DD'}/>
    </Form.Item>
  )
}
