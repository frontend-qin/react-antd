import React from 'react'
import { Input, Button, Table } from 'antd'
// 编号	币种	总市值	已分配市值	剩余市值
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
    title: '总市值',
    dataIndex: 'account',
    align: 'center'
  },
  {
    title: '已分配市值',
    dataIndex: 'roles',
    align: 'center'
  },
  {
    title: '剩余市值',
    dataIndex: 'trading',
    align: 'center'
  }
]
const data = []
for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: `HTC ${i}`,
    account: 8500,
    roles: i === 1 ? '1200' : '5214.012',
    trading: i / 2 === 2 ? '124587.02' : '458726.214'
  })
}
const MarketValue = () => (
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

export default MarketValue
