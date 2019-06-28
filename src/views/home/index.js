import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'
import Bar from './components/Bar'
import LeiDa from './components/LeiDa'
import C from './components/C'

import './index.less'

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
              <Bar />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
              <LeiDa />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <C />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home
