import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { routeList } from '@/router/menuList'
import { withRouter, NavLink } from 'react-router-dom'
import { changeRoute } from '@store/actions'
const { Sider } = Layout
const { SubMenu } = Menu

// 递归菜单数据
function renderMenu(data) {
  return data.map(item => {
    if (item.children) {
      return (
        <SubMenu
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }
          key={item.title}
        >
          {renderMenu(item.children)}
        </SubMenu>
      )
    }
    return (
      <Menu.Item title={item.title} key={item.path}>
        <NavLink to={item.path} className="link">
          {item.icon ? <Icon type={item.icon} /> : null}
          <span>{item.title}</span>
        </NavLink>
      </Menu.Item>
    )
  })
}

const SideBar = props => {
  const { collSpan, menuHandleClick, path } = props

  return (
    <div>
      {/* 顶部logo */}
      <div
        className="logo"
        style={collSpan ? { width: 55 } : { width: '100%' }}
      >
        {collSpan ? (
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="icon"
            />
          </div>
        ) : (
          <div>
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="icon"
            />
            <h1>SZHB-Admin</h1>
          </div>
        )}
      </div>
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
          {renderMenu(routeList)}
        </Menu>
      </Sider>
    </div>
  )
}
// 创建映射
const mapStateToProps = state => {
  return state.layout
}
const mapDispatchToProps = dispatch => {
  return {
    menuHandleClick({ key, domEvent }) {
      let title = domEvent.target.innerText
      // 存储数据(开发完后干掉) todo 。。。。
      localStorage.setItem('path', key)
      localStorage.setItem('title', title)
      dispatch(changeRoute({ title, key }))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar))
