ConcurrentMode
优先执行优先级高的任务，在空闲时执行优先级低的任务
Import { unstable_ConcurrentMode as ConcurrentMode } from ‘react’//降低包裹下的优先级 react 16.6版本，之后的版本不再需要unstable_ConcurrentMode,直接引用即可{ConcurrentMode} from ‘react’,用ConcurrentMode 包裹下的组件更新就是第一优先级的组件的更新。
Import { flushSync } from ‘react - dom’ //提高优先级
ConcurrentMode是一个hasSymbol标志
flushSync(() => {
    this.setState({ num: setNum }) //立刻执行
})