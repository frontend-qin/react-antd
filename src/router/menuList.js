import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

const loading = () => <Spin />
// 定义菜单数据  （动态路由）
export const routeList = [
  {
    title: '首页',
    path: '/home',
    icon: 'home',
    component: Loadable({
      loader: () => import('@/views/home'),
      loading
    })
  },
  {
    title: '用户管理',
    path: 'user',
    icon: 'user',
    children: [
      {
        title: '添加用户',
        path: '/user/addUser',
        component: Loadable({
          loader: () => import('@/views/userManger/users'),
          loading
        })
      }
    ]
  },
  {
    title: '资源管理',
    path: 'source',
    icon: 'radar-chart',
    children: [
      {
        title: '比特币资源',
        path: '/source/btb',
        component: Loadable({
          loader: () => import('@/views/userManger/users'),
          loading
        })
      }
    ]
  },
  {
    title: '统计分析',
    path: 'analyze',
    icon: 'area-chart',
    children: [
      {
        title: '比特币资源',
        path: '/analyze/btb',
        component: Loadable({
          loader: () => import('@/views/userManger/users'),
          loading
        })
      }
    ]
  },
  {
    title: '交易记录',
    path: 'hostory',
    icon: 'sketch',
    children: [
      {
        title: '昨日交易记录',
        path: '/hostory/btb',
        component: Loadable({
          loader: () => import('@/views/userManger/users'),
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
