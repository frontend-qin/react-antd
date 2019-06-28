import React from 'react'
import './index.less'
import { Layout } from 'antd'
const { Content } = Layout

const AppContainer = props => (
  <Content className="container">{props.children}</Content>
)
export default AppContainer
