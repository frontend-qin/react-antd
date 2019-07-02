import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routeList, privateRoute } from './menuList'
import Layout from '@/layout'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
const loading = () => <Spin />

const Login = Loadable({
  loader: () => import('@/components/login'),
  loading
})
const NotFound = Loadable({
  loader: () => import('@/components/not_found'),
  loading
})

// 动态创建路由
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} keylength="/login" />
        <Route
          render={() => {
            return <Layout>{routeMap([...routeList, ...privateRoute])}</Layout>
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
// 递归路由数据
function routeMap(data) {
  return data.map((route, index) => {
    if (route.children) {
      return route.children.map(() => {
        return routeMap(route.children)
      })
    }
    return (
      <Switch key={index}>
        <Route
          path={route.path}
          component={route.component}
          keylength={route.path}
        />
      </Switch>
    )
  })
}
export default AppRouter
