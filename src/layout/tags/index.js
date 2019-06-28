import React, { PureComponent } from 'react'
import { Tabs } from 'antd'
import './index.less'
import AppContainer from './../container'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { changeKey, removeTag } from '@/store/actions'
import store from '@/store'
const { TabPane } = Tabs

class AppTags extends PureComponent {
  state = {
    panesList: []
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
      >
        {panes.map((pane, index) => (
          <TabPane
            tab={
              <Link to={pane.key} className="tabgsLink">
                <span className="circle" />
                {pane.title}
              </Link>
            }
            key={pane.key}
            closable={index ? true : false}
          >
            <AppContainer> {children}</AppContainer>
          </TabPane>
        ))}
      </Tabs>
    )
  }
  // 可进行编辑
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
