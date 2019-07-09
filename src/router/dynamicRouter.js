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
  // 角色管理模块
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
    path: '/user/source',
    component: Loadable({
      loader: () => import('../views/userManger/userSource'),
      loading
    })
  },
  // 资源管理
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
    path: '/record/yestodayTrande',
    component: Loadable({
      loader: () => import('../views/recording/yestodayTrand'),
      loading
    })
  },
  {
    path: '/currency/create',
    component: Loadable({
      loader: () => import('../views/virtualCurrency/createCurrency'),
      loading
    })
  },
  {
    path: '/currency/authority',
    component: Loadable({
      loader: () => import('../views/virtualCurrency/authorityCurrency'),
      loading
    })
  },
  //统计分析--- start
  {
    path: '/analyze/btIncome',
    component: Loadable({
      loader: () => import('../views/analysis/btIncome'),
      loading
    })
  },
  {
    path: '/analyze/marketValue',
    component: Loadable({
      loader: () => import('../views/analysis/market_value'),
      loading
    })
  }
]
