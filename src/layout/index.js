import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from './header'
import AppSideBar from './side_bar'
import AppTags from './tags'
import { connect } from 'react-redux'
import { changeRoute } from '@store/actions'
class AppLayout extends PureComponent {
  componentWillMount() {
    // 开发完 后干掉(只是为了在开发时，刷新页面后，路由又回到首页的状态)
    // 你也 可以使用环境变量判断，要不要它
    let path = localStorage.getItem('path')
    let title = localStorage.getItem('title')
    if (path && title) {
      this.props.goPage(path, title)
    } else {
      this.props.history.replace('/home')
    }
  }
  render() {
    return (
      <Layout>
        <AppSideBar />
        <Layout>
          <AppHeader />
          <AppTags>{this.props.children}</AppTags>
        </Layout>
      </Layout>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    goPage(key, title) {
      dispatch(changeRoute({ title, key }))
    }
  }
}
export default connect(
  '',
  mapDispatchToProps
)(withRouter(AppLayout))
