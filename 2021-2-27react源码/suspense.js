Suspense 包裹下的一个或多个组件会throw promise，
在resolve之前都会显示falllback中的数据loading, 异步操作之后才显示请求来的数据，
不推荐在正式环境中使用。
import { Suspense, lazy } from 'react'
//实现异步加载必须结合Suspenses使用
const LazyComp = lazy(() => import('./lazy.js'))
    < Suspense fallback =” loading”>
//两个都resolve才会返回，任何一个处于pending都是fallback
    <SuspenseComp />
    <LazyComp />
</ >
    打开源码
Suspense 是一个常量 REACT_SUSPENSE_TYPE
lazy 是一个方法