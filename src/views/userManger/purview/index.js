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
        <Card title="配置虚拟货币权限" bordered={false} style={{ width: 500 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="用户姓名" className="form_row">
              {getFieldDecorator('user_name', {
                rules: [{ required: true, message: '请选择一个用户' }]
              })(
                <Select style={{ width: 300 }} placeholder="请选择一个用户">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="虚拟货币" className="form_row">
              {getFieldDecorator('bizhong', {
                rules: [{ required: true, message: '请选择币种' }]
              })(
                <Select
                  mode="multiple"
                  style={{ width: 300 }}
                  placeholder="请选择币种"
                >
                  {children}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="初始资源" className="form_row">
              {getFieldDecorator('start_source', {
                rules: [{ required: true, message: '输入初始分配资源' }]
              })(
                <Input
                  mode="multiple"
                  style={{ width: 300 }}
                  placeholder="输入初始分配资源"
                />
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
const Purview = Form.create({ name: 'normal_login' })(purviewForm)
export default Purview
