import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '@/layout'
import { Login, routerList, NotFound } from './dynamicRouter'
// 便利路由
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" exact component={Login} keylength="/login" />
        <Route
          render={() => (
            <Layout>
              <Switch>
                {routerList.map((item, index) => (
                  <Route
                    path={item.path}
                    component={item.component}
                    key={index}
                  />
                ))}
              </Switch>
            </Layout>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
