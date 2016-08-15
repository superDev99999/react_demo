# React 示例项目 · 简易留言板
[fork-from]: https://github.com/davezuko/react-redux-starter-kit
[universal]: https://github.com/erikras/react-redux-universal-hot-example
[code-splitting]: https://webpack.github.io/docs/code-splitting.html
[vue-demo]: https://github.com/kenberkeley/vue-demo
[vue-demo-difference]: https://github.com/kenberkeley/vue-demo#difference
[react-docs]: http://reactjs.cn/react/docs/getting-started.html
[redux-docs]: http://cn.redux.js.org/index.html
[redux-example]: https://github.com/reactjs/redux/tree/master/examples
[react-router-docs]: http://react-guide.github.io/react-router-cn/
[dynamic-routing]: http://react-guide.github.io/react-router-cn/docs/guides/advanced/DynamicRouting.html
[es6-tutorial]: http://es6.ruanyifeng.com/
[babel-repl]: http://babeljs.io/repl/ 
[eslint-auto-fix]: http://eslint.org/docs/user-guide/command-line-interface.html#fix
[decorator]: http://es6.ruanyifeng.com/#docs/decorator
[flux-action-pattern]: https://github.com/acdlite/flux-standard-action
[immutable]: https://github.com/facebook/immutable-js

> ###写在前面
> 本示例项目改自 [react-redux-starter-kit](fork-from)，主要是对项目源码架构进行了优雅的重构  
> 与 [Vue Demo](vue-demo) 高度一致，基本上就是把 React 当 Vue 使，大大提高生产力与可理解性
> 
> 值得注意的是，本类项目使用 Webpack 的 [Code Splitting](code-splitting) 实现按需加载  
> 与 [react-redux-universal-hot-example](universal) 这一类**前后端同构项目**有一定差异  
> 最大的差异在于路由的写法，详情请参考 React Router 文档 · [动态路由](dynamic-routing)
> 
> 

***

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.0.0
* React Router
* Redux
* Ajax 请求库（Superagent / jQuery-Ajax / ...）
* Webpack
* ES6 + Babel
* jQuery + BootStrap (UI)

***

## <a name="getting-started">&sect; 快速开始</a>
> 在开始前，您需要掌握 [Vue](http://cn.vuejs.org/)，以及理解 [Vue Demo](vue-demo)   
> 毕竟这是**面向 Vue 开发者的 React 教程**，通过**类比**来快速上手 React 技术栈开发  
> 其次，您需要对 React 技术栈有一定的认识    
> 更详细地，您需要通读 [React 文档](react-docs)、[Redux 文档](redux-docs)、[React Router 文档](react-router-docs)  
> 最好还把玩过 [Redux Example](redux-example) 的 Counter / Todo 这些简单的示例

> 同时您还需要熟悉 ES6 （[教程](es6-turtorial)）  
> 例如，请把 `const foo = ({ hello: { world: bar } }) => ({ bar })` 转译成 ES5  
> （答案可在 [Babel REPL](babel-repl) 自行验证）

### <a name="installation">⊙ 安装</a>
> 推荐升级到 node 5.x + npm 3.x 环境  
> 推荐使用 `cnpm` 或手动切换到淘宝 npm 源  
> `npm set registry https://registry.npm.taobao.org/`

本示例项目需要结合 [简易留言板 RESTful API](https://github.com/kenberkeley/msg-board-api)  
模拟前后端分离开发（还为了与 [Vue Demo](vue-demo) 共用）  
请分别 `git clone`，打开**两个**命令窗口（ Windows 下推荐使用 `Cygwin`）**分别**切换到两者的目录下  
分别敲下 `npm install` 安装依赖（为避免 Windows 下的 npm 软链接问题，可加上 `--no-bin-link` 完全解构所有依赖）

### <a name="start">⊙ 启动</a>
先后在 `msg-board-api`、`react-demo` 的命令窗口下，敲下 `npm start`  
然后请自行访问 `localhost:3000` 即可查看 demo    
> 开发过程中，通过 Webpack 处理的静态资源都由基于内存的 `webpack-dev-server` 提供

***

## <a name="architecture">&sect; 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├── bin/                    # 命令行执行文件
├── build/                  # Webpack 配置
├── config/                 # 基础配置（供 Webpack 使用）
│   ├── custom.js             # 自定义配置（用于覆盖默认配置）
│   ├── index.js/             # 默认配置
├── dist/                   # build 生成的生产环境下的项目
├── server/                 # 前端开发服务器
│   ├── public/               # 静态资源目录
│   ├── ...                   # （略）
├── src/                    # 源码目录（开发都在这里进行）
│   ├── components/           # 展示型组件/木偶组件（COMPONENT，全称 presentational/dumb components）
│   ├── containers/           # 容器型组件/智能组件（CONTAINER，全称 container/smart components）
│   ├── layouts/              # 路由布局基页（LAYOUT，对应 Vue Demo 中的 `views/`）
│   ├── redux/                # Redux 相关
│       ├── actions/            #
│       ├── reducers/           #
│       ├── createStore.js      #
│       ├── initState.js        # 初始化的 Store 定义
│       ├── rootReducer.js      #
│       ├── store.js            # 最终生成的 Store
│   ├── routes/               # 路由（ROUTE）
│   ├── services/             # 服务（SERVICE）
│   ├── utils/                # 工具库（UTIL）
│       ├── HOC/                # 高阶组件（HOC）
│       ├── mixins/             # （MIXIN）
│   ├── index.html            # 静态基页
│   ├── main.js               # 启动文件
├── .babelrc                # Babel 转码配置
├── .eslintignore           # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc               # ESLint 配置
├── .gitignore              # （配置）需被 Git 忽略的文件（夹）
├── package.json            # （这个就不用多解释了吧）
```

### <a name="difference">⊙ 与 [`react-redux-starter-kit`](fork-from) 的区别</a>
> 与 Vue Demo 中 “[与官方示例项目的区别](vue-demo-difference)” 基本一致  

[`react-redux-starter-kit`](fork-from) 本身的设计并不是让我特别满意  
因此我对源码目录 `src/` 进行了彻底的重构，并对内部开发逻辑进行了优化  

但除 `src/` 外，其余的配置基本都保留了，些许的改动如下：
* 将无需 Webpack 处理的静态资源目录移入`server/`，即 `server/public/`
* 重命名 `config/` 下 `environment.js => custom.js` 

兼容 [`react-redux-starter-kit`](fork-from) 的一整套 `npm script`

|`npm run <script>`|说明|
|------------------|-----------|
|`start`|在 `localhost:3000` 启动应用。开发过程中支持代码热更替（HMR）|
|`compile`|编译生产环境下的项目（默认生成到 `dist/`)|
|`dev`|跟 `start` 基本一样，但使用 `nodemon` 监听前端开发服务器 `server/` 自动重启|
|`dev:no-debug`|跟 `dev` 基本一样，但禁用了 Redux DevTools|
|`test`|通过 Karma 运行单元测试，生成覆盖率报告|
|`test:dev`|Karma 监听文件改动进行单元测试，但不生成覆盖率报告|
|`deploy`|运行代码检测（linters），单元测试（tests），若都通过则生成 `dist/`|
|`deploy:dev`|跟 `deploy` 基本一样，但重写 `NODE_ENV` 为 `development`|
|`deploy:prod`|跟 `deploy` 基本一样，但重写 `NODE_ENV` 为 `production`|
|`lint`|使用 ESLint 对所有 `*.js` 文件进行代码检测|
|`lint:fix`|比 `lint` 多了[自动修复](eslint-auto-fix)的功能|
