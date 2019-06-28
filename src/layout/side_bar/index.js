import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { routeList } from '@/router/menuList'
import { withRouter, NavLink } from 'react-router-dom'
import { changeRoute } from '@/store/actions'
const { Sider } = Layout
const { SubMenu } = Menu

export class SideBar extends PureComponent {
  // 菜单渲染
  renderMenu = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type="mail" />
                <span>{item.title}</span>
              </span>
            }
            key={item.path}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.path}>
          <NavLink to={item.path} className="link">
            <Icon type="inbox" />
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }
  // 点击跳转导航
  render() {
    const { collSpan, menuHandleClick, path } = this.props
    return (
      <div>
        <Sider
          className="sidebar"
          collapsed={collSpan}
          collapsible
          trigger={null}
        >
          <Menu
            onSelect={menuHandleClick}
            theme="light"
            mode="inline"
            defaultSelectedKeys={[path]}
          >
            {this.renderMenu(routeList)}
          </Menu>
        </Sider>
      </div>
    )
  }
}
// 创建映射
const mapStateToProps = state => {
  return state.layout
}
const mapDispatchToProps = dispatch => {
  return {
    menuHandleClick({ key, domEvent }) {
      let title = domEvent.target.innerText
      dispatch(changeRoute({ title, key }))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar))
