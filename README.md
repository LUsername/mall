# mall

> WebApp线上商城


#### 核心功能
`首页`：顶部Navbar组件、幻灯片组件、loading和滚动条组件、热卖推荐、下拉刷新、上拉加载、返回顶部组件和Header动画<br/>
`分类页`：Header和侧栏、数据获取和显示、客户端缓存<br/>
`搜索页`:搜索框组件、热门搜索、历史搜素、搜索结果页


#### 核心技术栈
`框架`：Vue<br/>
`网页布局`：flex布局，结合定位实现布局<br/>
`轮播插件`：Swiper高效开发轮播特效<br/>
`数据传递`：template模板化编程/ES6<br/>
`打包工具`：webpack

#### 项目所使用第三方插件安装命令：
幻灯片:
```
cnpm install --save vue-awesome-swiper
```
异步请求：
```
cnpm install --save axios
cnpm install --save jsonp
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
