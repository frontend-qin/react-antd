## 简化版 react-admin-antd

<p align="center">
  <img width="900" src="./src/images/demo.jpg">
</p>

## 项目目录

```
├── .vscode
├── config                            webpack配置文件
├── node_modules
├── public
│ ├── favicon.ico
│ └── index.html
├── scripts                           启动和打包环境配置
│ ├── build.js                        打正式包配置
│ ├── devbuild.js                     测试包配置
│ ├── start.js                        启动开发服务配置
│ └── test.js                         启动和打包环境配置
├── src
│ ├── api                             接口调用
│    ├── login.js                     接口调用示例
│ ├── components                      公共组件
│    ├── login                        登录
│    ├── not_found                    404
│ ├── images                          图片
│ ├── layout                          layout布局
│ ├── router                          动态路由配置
│ ├── store                           redux
│ ├── theme                           配置皮肤，需要的自己搞
│ ├── utils                           公共方法
│ │  ├── request.js                           公共方法
│ │  ├── token.js                             公共方法
│ ├── views                          单页应用
│ ├── App.js
│ └── index.js
├── .env.development                 开发接口地址
├── .env.production                  生产接口地址
├── package.json
├── README.md
└── yarn.lock

```

## Getting started

```bash
# clone the project
git clone https://github.com/frontend-qin/react-antd-admin.git

# enter the project directory
cd react-antd-admin

# install dependency
yarn install

# develop
yarn start
```

This will automatically open http://localhost:9527

## 根据环境的不同, 自动化配置接口

```bash
# 如果你想配置自己的接口地址, 再.env 后缀的文件中, 修改 REACT_APP_URL 的值

# 具体使用参考 api 文件下的调用

# 再单页面中使用请参考 views 文件下的 tables 文件

# 如果调用打印不出值，请自己 utils 文件下的 request.js 文件的 axios 的 响应拦截的判断

# 配合 redux 使用的，同上方式调用
```

## Build

```bash

# build for production environment(正式服务器包)
# 正式打包后的包名是build，如需要更改，请在config文件下的 paths.js 中修改 appBuild 属性的值
npm run build

# build for test environment(打测试服务器包)
# 测试打包后的包名是devbuild
npm run devbuild

# 测试 test todo....
npm run test
```

## Eslint todo...

```bash

## 需要配置eslint的

```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

## License

[MIT](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)

Copyright (c) 2017-present PanJiaChen
