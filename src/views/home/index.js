import React, { PureComponent } from 'react'
import { Row, Col } from 'antd'

import { AModule, Erroes, Line } from './components'

import './index.less'

class Home extends PureComponent {
  render() {
    return (
      <div className="common">
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <AModule />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <Line />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <Erroes />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Home
