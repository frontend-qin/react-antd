import React from 'react'
import { Icon } from 'antd'
const list = [
  {
    icon: 'money-collect',
    title: '总交易额',
    color: '#3F51B5',
    total: 124578.124
  },
  {
    icon: 'sketch',
    title: '总收益',
    color: '#447ED9',
    total: 124578.124
  },
  {
    icon: 'area-chart',
    title: '今日交易额',
    color: '#f00',
    total: 124578.124
  },
  {
    icon: 'skype',
    title: '今日收益',
    color: '#FF9800',
    total: 124578.124
  }
]
const Amodule = props => (
  <div className="Amodule">
    {list.map(item => (
      <div className="gutter-box" key={item.title}>
        <Icon
          type={item.icon}
          style={{ fontSize: 45, color: `${item.color}` }}
        />
        <div className="right-panel">
          <p>{item.title}</p>
          <p style={{ color: `${item.color}`, fontSize: 16 }}>{item.total}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Amodule
