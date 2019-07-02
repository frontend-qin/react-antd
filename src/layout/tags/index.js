import React, { PureComponent } from 'react'
import { Tabs } from 'antd'
import './index.less'
import AppContainer from './../container'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeKey, removeTag } from './../../store/actions'
import store from './../../store'
const { TabPane } = Tabs

class AppTags extends PureComponent {
  onEdit = targetKey => {
    let { path, panes, history } = this.props
    let lastIndex
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const newPanes = panes.filter(pane => pane.key !== targetKey)
    if (newPanes.length && path === targetKey) {
      if (lastIndex >= 0) {
        path = newPanes[lastIndex].key
      } else {
        path = newPanes[0].key
      }
    }
    // 提交到redux
    store.dispatch(removeTag({ path, newPanes }))
    history.push(path)
  }
  tabclick = e => {
    this.props.history.push(e)
  }
  render() {
    const { children, onChange, path, panes } = this.props
    return (
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={path}
        type="editable-card"
        onEdit={this.onEdit}
        tabBarGutter={0}
        onTabClick={this.tabclick}
      >
        {panes.map((pane, index) => (
          <TabPane tab={pane.title} key={pane.key} closable={index}>
            <AppContainer> {children}</AppContainer>
          </TabPane>
        ))}
      </Tabs>
    )
  }
}

const mapStateToProps = state => {
  return state.layout
}
const mapDispatchToProps = dispatch => {
  return {
    onChange(key) {
      dispatch(changeKey(key))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppTags))
