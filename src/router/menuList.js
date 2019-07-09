// 定义路由

// 定义菜单数据
export const routeList = [
  {
    title: '首页',
    path: '/home',
    icon: 'home'
  },
  {
    title: '角色管理',
    icon: 'user',
    children: [
      {
        title: '用户管理',
        path: '/user/addUser'
      },
      {
        title: '交易权限',
        path: '/user/purview'
      },
      {
        title: '用户资源',
        path: '/user/source'
      }
    ]
  },
  {
    title: '虚拟货币管理',
    icon: 'slack',
    children: [
      {
        title: '数字货币',
        path: '/currency/create'
      },
      {
        title: '虚拟币权限',
        path: '/currency/authority'
      }
    ]
  },
  {
    title: '资源管理',
    icon: 'radar-chart',
    children: [
      {
        title: '比特币资源',
        path: '/source/btb'
      }
    ]
  },
  {
    title: '统计分析',
    icon: 'area-chart',
    children: [
      {
        title: '用户总收益',
        path: '/analyze/allAnalys'
      },
      {
        title: '虚拟货币收益',
        path: '/analyze/btIncome'
      },
      {
        title: '虚拟货币市值',
        path: '/analyze/marketValue'
      }
    ]
  },
  {
    title: '交易记录',
    icon: 'sketch',
    children: [
      {
        title: '昨日交易记录',
        path: '/record/yestodayTrande'
      }
    ]
  }
]
