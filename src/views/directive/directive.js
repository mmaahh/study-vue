export default {
  bind (el, binding, vNode) {
    console.log(vNode)
    console.log(binding.name)
    // 获取所有元素
    const tabItem = el.getElementsByClassName(binding.value.className)
    // 给当前选中项添加active 【注意样式前加空格，否则会连在一起导致样式失效】
    tabItem[
      binding.value.curIndex
    ].className += ` ${binding.value.activeClass}`
  },
  update (el, binding, vNode) {
    console.log(vNode)
    // 获取所有元素
    const tabItem = el.getElementsByClassName(binding.value.className)
    // 还原指令绑定的前一个值的样式
    tabItem[binding.oldValue.curIndex].className = binding.oldValue.className
    // 给当前选中项添加active
    tabItem[
      binding.value.curIndex
    ].className += ` ${binding.value.activeClass}`
    console.log(binding.value.activeClass)
  }
}
