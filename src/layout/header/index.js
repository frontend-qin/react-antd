import React, { PureComponent } from 'react'
import { Layout, Icon, Menu, Dropdown, Avatar, Badge, Breadcrumb } from 'antd'
import { connect } from 'react-redux'
import './index.less'
import { collSpanAction } from './../../store/actions'
import { withRouter } from 'react-router-dom'
import { changeRoute, clearTags } from './../../store/actions'
import store from './../../store'
const { Header } = Layout

const avator = require('./../../images/1.jpg')

class AppHeader extends PureComponent {
  clickHandle = ({ key, domEvent }) => {
    let title = domEvent.target.innerText
    if (key !== '/login') {
      store.dispatch(changeRoute({ title, key }))
      this.props.history.push(key)
    } else {
      store.dispatch(clearTags())
      localStorage.removeItem('path')
      localStorage.removeItem('title')
      this.props.history.push('/login')
    }
  }

  menu = () => (
    <Menu onClick={this.clickHandle}>
      {this.props.authList.map(item => (
        <Menu.Item key={item.path}>{item.title}</Menu.Item>
      ))}
    </Menu>
  )
  render() {
    const { toggle, collSpan, title } = this.props
    return (
      <Header className="header">
        <div className="left-box">
          <Icon
            className="trigger"
            onClick={toggle}
            type={collSpan ? 'menu-unfold' : 'menu-fold'}
          />
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <Badge count={99} className="bandge">
            <Icon type="notification" style={{ fontSize: 26 }} theme="filled" />
          </Badge>
          {/* 下拉 */}
          <Dropdown overlay={this.menu}>
            <Avatar size={45} shape="circle" src={avator} />
          </Dropdown>
        </div>
      </Header>
    )
  }
}

// 创建props映射
const mapStateToProps = state => {
  return state.layout
}
// 创建 action 映射
const mapDispatchToProps = dispatch => {
  return {
    toggle() {
      dispatch(collSpanAction())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppHeader))
