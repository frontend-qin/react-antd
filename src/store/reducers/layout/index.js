import {
  COLLSPAN,
  ACTIVEDROUTER,
  CHANGEKEY,
  REMOVETAG,
  CLEARTAGS
} from '@store/constant'

const initState = {
  collSpan: false,
  path: '/home',
  title: '首页',
  panes: [{ title: '首页', key: '/home' }],
  authList: [
    {
      title: '个人中心',
      path: '/auth'
    },
    {
      title: '设置中心',
      path: '/setting'
    },
    {
      title: '退出',
      path: '/login'
    }
  ]
}

const toggle = (state = initState, action) => {
  switch (action.type) {
    case COLLSPAN:
      return { ...state, ...{ collSpan: !state.collSpan } }
    case ACTIVEDROUTER:
      const { title, key } = action.payload
      let s = state.panes.filter(k => k.title === title)
      if (s.length < 1) {
        state.panes.push(action.payload)
      }
      return {
        ...state,
        ...{
          path: key,
          title,
          panes: state.panes
        }
      }
    case CHANGEKEY:
      return { ...state, ...{ path: action.payload } }

    case REMOVETAG:
      const { newPanes, path } = action.payload
      return { ...state, ...{ panes: newPanes, path } }
    case CLEARTAGS:
      return {
        ...state,
        ...{
          panes: [{ title: '首页', key: '/home' }],
          path: '/home',
          title: '首页'
        }
      }
    default:
      return state
  }
}

export default toggle
