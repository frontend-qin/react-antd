import React from 'react'
import { Button, Input, Table } from 'antd'
const columns = [
  {
    title: '编号',
    dataIndex: 'key',
    align: 'center'
  },
  {
    title: '用户',
    dataIndex: 'name',
    align: 'center'
  },
  {
    title: '姓名',
    dataIndex: 'account',
    align: 'center'
  },
  {
    title: '所属角色',
    dataIndex: 'roles',
    align: 'center'
  },
  {
    title: '交易权限',
    dataIndex: 'trading',
    align: 'center'
  },
  {
    title: '状态',
    align: 'center',
    render: obj => (
      <span
        style={
          `${obj.status}` === '激活' ? { color: '#4caf50' } : { color: 'red' }
        }
      >
        {obj.status}
      </span>
    )
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
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `EASY Hou ${i}`,
    account: `user ${i}`,
    roles: i === 1 ? '管理员' : '交易员',
    trading: i / 2 === 2 ? '比特币， 火币， IBTC币' : '火币，UTC币',
    status: i / 2 === 1 ? '激活' : '未激活',
    address: `London, Park Lane no. ${i}`
  })
}
const AddUser = () => (
  <div className="common">
    <div className="one_row">
      <Button type="primary">创建用户</Button>
    </div>
    <div className="two_row">
      <div className="input_box">
        <div className="label">姓名：</div>
        <Input placeholder="请输入用户名" className="input_text" />
      </div>
      <div className="input_box">
        <Button type="primary" icon="search" className="btn_search">
          搜索
        </Button>
      </div>
    </div>
    {/* 表格的数据 */}
    <Table columns={columns} dataSource={data} bordered size="default" />
  </div>
)

export default AddUser
