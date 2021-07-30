用更轻量级的 JS 对象来代替复杂的 DOM 节点，然后把对 DOM 的 diff 操作转移到 JS 对象，就可以避免大量对 DOM 的查询操作。这个更轻量级的 JS 对象就称为 Virtual DOM 。
现在的过程
维护一个使用 JS 对象表示的 Virtual DOM，与真实 DOM 一一对应
对前后两个 Virtual DOM 做 diff ，生成变更（Mutation）
把变更应用于真实 DOM，生成最新的真实 DOM

虚拟 DOM 和 Diff 算法的出现是为了解决由命令式编程转变为声明式编程、数据驱动后所带来的性能问题的。换句话说，直接操作 DOM 的性能并不会低于虚拟 DOM 和 Diff 算法，甚至还会优于
这么说的原因是因为 Diff 算法的比较过程，比较是为了找出不同从而有的放矢的更新页面。但是比较也是要消耗性能的。而直接操作 DOM 就是有的放矢，我们知道该更新什么不该更新什么，所以不需要有比较的过程。所以直接操作 DOM 效率可能更高。

命令式编程：命令“机器”如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
声明式编程：告诉“机器”你想要的是什么(what)，让机器想出如何去做(how)。
命令式编程
有时候对于某个业务逻辑没有任何可以归纳提取的通用实现，我们只能写命令式编程代码。
声明式编程
声明式编程让我们去描述我们想要的是什么，让底层的软件/计算机/等去解决如何去实现它们。
在很多情况中，就像我们看到的一样，声明式编程能给我们的编程带来真正的提升，通过站在更高层面写代码，我们可以更多的专注于what，而这正是我们开发软件真正的目标

React 厉害的地方并不是说它比 DOM 快，而是说不管你数据怎么变化，我都可以以最小的代价来进行更新 DOM。方法就是我在内存里面用新的数据刷新一个虚拟 DOM 树，然后新旧 DOM 进行比较，找出差异，再更新到 DOM 树上。

虚拟 DOM 的缺点
首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
虚拟 DOM 需要在内存中的维护一份 DOM 的副本(更上面一条其实也差不多，上面一条是从速度上，这条是空间上)。
如果虚拟 DOM 大量更改，这是合适的。但是单一的，频繁的更新的话，虚拟 DOM 将会花费更多的时间处理计算的工作。所以，如果你有一个 DOM 节点相对较少页面，用虚拟 DOM，它实际上有可能会更慢。但对于大多数单页面应用，这应该都会更快。

很多人认为虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI。

虚拟 DOM 到底是什么，说简单点，就是一个普通的 JavaScript 对象，包含了 tag、props、children 三个属性

虚拟 DOM 提升性能的点在于 DOM 发生变化的时候，通过 diff 算法比对 JavaScript 原生对象，计算出需要变更的 DOM，然后只对变化的 DOM 进行操作，而不是更新整个视图

渲染虚拟 DOM
function render(vdom) {
  // 如果是字符串或者数字，创建一个文本节点
  if (typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom)
  }
  const { tag, props, children } = vdom
  // 创建真实DOM
  const element = document.createElement(tag)
  // 设置属性
  setProps(element, props)
  // 遍历子节点，并获取创建真实DOM，插入到当前节点
  children
    .map(render)
    .forEach(element.appendChild.bind(element))

  // 虚拟 DOM 中缓存真实 DOM 节点
  vdom.dom = element

  // 返回 DOM 节点
  return element
}

function setProps (element, props) {
  Object.entries(props).forEach(([key, value]) => {
    setProp(element, key, value)
  })
}

function setProp (element, key, vlaue) {
  element.setAttribute(
    // className使用class代替
    key === 'className' ? 'class' : key,
    vlaue
  )
}

将虚拟 DOM 渲染成真实 DOM 后，只需要插入到对应的根节点即可。
const vdom = <div>hello world!!!</div> // h('div', {}, 'hello world!!!')
const app = document.getElementById('app')
const ele = render(vdom)
app.appendChild(ele)

当我们调用 setState 时，state 内部状态发生变动，再次调用 render 方法就会生成一个新的虚拟 DOM 树，这样我们就能使用 diff 方法计算出新老虚拟 DOM 发送变化的部分，最后使用 patch 方法，将变动渲染到视图中。

onst app = document.getElementById('app')
const component = new Component
createElement(app, component)

// 将文本更改为数字，每秒 +1
let count = 0
setInterval(() => {
  component.changeText(++count)
}, 1000);

virtual-dom 作为虚拟 DOM 开天辟地的作品，采用了对 DOM 树进行了深度优先的遍历的方法。
VDOM 节点的对比
上面代码只是对 VDOM 进行了简单的深度优先遍历，在遍历中，还需要对每个 VDOM 进行一些对比，具体分为以下几种情况：

旧节点不存在，插入新节点；新节点不存在，删除旧节点

新旧节点如果都是 VNode，且新旧节点 tag 相同

对比新旧节点的属性

对比新旧节点的子节点差异，通过 key 值进行重排序，key 值相同节点继续向下遍历

新旧节点如果都是 VText，判断两者文本是否发生变化

其他情况直接用新节点替代旧节点

为什么需要改进子节点的对比方式。如果我们直接按照深度优先遍历的方式，一个个去对比子节点，子节点的顺序发生改变，那么就会导致 diff 算法认为所有子节点都需要进行 replace，重新将所有子节点的虚拟 DOM 转换成真实 DOM，这种操作是十分消耗性能的。

如果我们能够找到新旧虚拟 DOM 对应的位置，然后进行移动，那么就能够尽量减少 DOM 的操作。

virtual-dom 在一开始就进行了这方面的尝试，对子节点添加 key 值，通过 key 值的对比，来判断子节点是否进行了移动。通过 key 值对比子节点是否移动的模式，被各个库沿用，这也就是为什么主流的视图库中，子节点如果缺失 key 值，会有 warning 的原因。