import React from 'react'
import { Table } from 'antd'
const columns = [
  {
    title: '比特币',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    align: 'center'
  },
  {
    title: '错误类型',
    dataIndex: 'age',
    key: 'age',
    width: 880,
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    align: 'center'
  }
]
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '3',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '4',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '5',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]
const Errors = () => (
  <Table
    bordered
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    size="small"
    scroll={{ y: 400 || true }}
  />
)

export default Errors
