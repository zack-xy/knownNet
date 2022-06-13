const isObject = v => v !== null && typeof v === 'object'

// Proxy
function reactive(obj) {
  if (!isObject(obj))
    return obj

  return new Proxy(obj, {
    get(target, key, receiver) {
      const ret = Reflect.get(target, key, receiver)
      // eslint-disable-next-line no-console
      console.log('获取', key)
      track(target, key)
      return isObject(ret) ? reactive(ret) : ret
    },
    set(target, key, value, receiver) {
      const ret = Reflect.set(target, key, value, receiver)
      // eslint-disable-next-line no-console
      console.log('设置', key)
      trigger(target, key)
      return ret
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key)
      // eslint-disable-next-line no-console
      console.log('删除', key)
      trigger(target, key)
      return ret
    },
  })
}

// 声明一个响应函数，放入effectStack备用
const effectStack = []
function effect(fn) {
  const rxEffect = function () {
    // 1.捕获异常
    // 2.fn入栈出栈
    // 3.执行fn
    try {
      effectStack.push(rxEffect)
      return fn()
    }
    catch (error) {

    }
    finally {
      effectStack.pop()
    }
  }

  rxEffect()
  return rxEffect
}
// 响应函数触发某个响应式数据，开始依赖收集
const targetMap = new WeakMap()
function track(target, key) {
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      depsMap = new Map()
      targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(key)
    if (!deps) {
      deps = new Set()
      depsMap.set(key, deps)
    }
    deps.add(effect)
  }
}
// setter或者deleteProperty触发时，根据映射关系执行对应的cb
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (depsMap) {
    const deps = depsMap.get(key)
    if (deps) {
      deps.forEach((effect) => {
        effect()
      })
    }
  }
}

const state = reactive({ foo: 'foo' })

effect(() => {
  // eslint-disable-next-line no-console
  console.log('effect>>>', state.foo)
})

state.foo = 'fooooo'
