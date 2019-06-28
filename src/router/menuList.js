import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

const loading = () => <Spin />
// 定义菜单数据  （动态路由）
export const routeList = [
  {
    title: '首页',
    path: '/home',
    component: Loadable({
      loader: () => import('@/views/home'),
      loading
    })
  },
  {
    title: '练习生',
    path: '/soice',
    component: Loadable({
      loader: () => import('@/views/tables'),
      loading
    })
  },
  {
    title: '表单',
    path: 'form',
    children: [
      {
        title: '表单1',
        path: '/form/tables',
        component: Loadable({
          loader: () => import('@/views/form'),
          loading
        })
      }
    ]
  }
]
// 静态路由
export const privateRoute = [
  {
    title: '个人中心',
    path: '/auth',
    component: Loadable({
      loader: () => import('@/views/auth'),
      loading
    })
  },
  {
    title: '设置中心',
    path: '/setting',
    component: Loadable({
      loader: () => import('@/views/setting'),
      loading
    })
  }
]
