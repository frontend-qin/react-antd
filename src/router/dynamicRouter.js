import React from 'react'

import Loadable from 'react-loadable'
import { Spin } from 'antd'
const loading = () => <Spin />

// 登录
export const Login = Loadable({
  loader: () => import('@/components/login'),
  loading
})
// 404
export const NotFound = Loadable({
  loader: () => import('@/components/not_found'),
  loading
})

// 创建路由菜单
export const routerList = [
  {
    path: '/home',
    component: Loadable({
      loader: () => import('@/views/home'),
      loading
    })
  },
  {
    path: '/user/addUser',
    component: Loadable({
      loader: () => import('@/views/userManger/users'),
      loading
    })
  },
  {
    path: '/user/purview',
    component: Loadable({
      loader: () => import('@/views/userManger/purview'),
      loading
    })
  },
  {
    path: '/source/btb',
    component: Loadable({
      loader: () => import('../views/sourceManager/bitebi'),
      loading
    })
  },
  {
    path: '/analyze/allAnalys',
    component: Loadable({
      loader: () => import('../views/analysis/income'),
      loading
    })
  },
  {
    path: '/analyze/btIncome',
    component: Loadable({
      loader: () => import('../views/analysis/btIncome'),
      loading
    })
  },
  {
    path: '/record/yestodayTrande',
    component: Loadable({
      loader: () => import('../views/recording/yestodayTrand'),
      loading
    })
  }
]
