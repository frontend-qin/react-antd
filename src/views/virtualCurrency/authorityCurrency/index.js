import React from 'react'
import { Input, Button, Table } from 'antd'
const columns = [
  {
    title: '编号',
    dataIndex: 'key',
    align: 'center'
  },
  {
    title: '虚拟币名字',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '禁止融资买入',
    dataIndex: 'account',
    align: 'center'
  },
  {
    title: '禁止现金买入',
    dataIndex: 'roles',
    align: 'center'
  },
  {
    title: '禁止卖币还款',
    dataIndex: 'trading',
    align: 'center'
  },
  {
    title: '操作',
    align: 'center',
    width: 180,
    render: () => (
      <div className="btn-box">
        <Button size="small">删除</Button>
        <Button type="primary " size="small">
          编辑
        </Button>
      </div>
    )
  }
]
const data = []
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: `HTC ${i}`,
    account: `是`,
    roles: i === 1 ? '是' : '否',
    trading: i / 2 === 2 ? '是' : '否'
  })
}
const authorityCurrency = () => (
  <div className="common">
    <div className="two_row">
      <div className="input_box">
        <div className="label">数字货币：</div>
        <Input placeholder="请输入数字货币名" className="input_text" />
      </div>
      <div className="input_box">
        <Button type="primary" icon="search" className="btn_search">
          搜索
        </Button>
      </div>
    </div>
    <Table columns={columns} dataSource={data} bordered size="default" />
  </div>
)
export default authorityCurrency
