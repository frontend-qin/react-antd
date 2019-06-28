import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import AppHeader from './header'
import AppSideBar from './side_bar'
import AppTags from './tags'
import { connect } from 'react-redux'
class AppLayout extends PureComponent {
  componentWillMount() {
    this.props.history.replace('/home')
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

export default connect()(withRouter(AppLayout))
