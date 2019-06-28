import {
  COLLSPAN,
  ACTIVEDROUTER,
  CHANGEKEY,
  REMOVETAG,
  CLEARTAGS
} from '@/store/constant'

export const collSpanAction = () => ({ type: COLLSPAN })

// 改变路由
export const changeRoute = payload => ({
  type: ACTIVEDROUTER,
  payload
})
// 改变标签的选中
export const changeKey = payload => ({
  type: CHANGEKEY,
  payload
})
// 删除一个标签
export const removeTag = payload => ({
  type: REMOVETAG,
  payload
})

// 恢复 标签选项卡数据
export const clearTags = () => ({
  type: CLEARTAGS
})
