import React, { PureComponent } from 'react'
import { Form, Button, Input, Select, Card } from 'antd'
import './index.less'
const { Option } = Select
class purviewForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const children = []
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
      )
    }
    return (
      <div className="common">
        <Card title="创建虚拟数字货币" bordered={false} style={{ width: 500 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item
              label={<span>数字货币</span>}
              className="form_row form_one"
            >
              {getFieldDecorator('user_name', {
                rules: [{ required: true, message: '请选择一个币种' }]
              })(
                <Select style={{ width: 300 }} placeholder="请选择一个币种">
                  {children}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="禁止融资买入" className="form_row">
              {getFieldDecorator('bizhong', {
                rules: [{ required: true, message: '请选择一种' }]
              })(
                <Select
                  mode="multiple"
                  style={{ width: 300 }}
                  placeholder="全部"
                >
                  <Option value="1">是</Option>
                  <Option value="0">否</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="禁止现金买入" className="form_row">
              {getFieldDecorator('start_source', {
                rules: [{ required: true, message: '是否禁止现金买入' }]
              })(
                <Select
                  mode="multiple"
                  style={{ width: 300 }}
                  placeholder="全部"
                >
                  <Option value="1">是</Option>
                  <Option value="0">否</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="禁止卖币还款" className="form_row">
              {getFieldDecorator('sell_money', {
                rules: [{ required: true, message: '是否禁止卖币还款' }]
              })(
                <Select
                  mode="multiple"
                  style={{ width: 300 }}
                  placeholder="全部"
                >
                  <Option value="1">是</Option>
                  <Option value="0">否</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                确定
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
const createCurrency = Form.create({ name: 'normal_login' })(purviewForm)
export default createCurrency
