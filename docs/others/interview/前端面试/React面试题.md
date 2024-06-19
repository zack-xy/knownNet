---
title: React面试题
author: Zack Zheng
date: 1999/01/01 00:00
categories:
 - 面试题
tags:
 - 面试
 - React
---

#### react组件如何通讯


#### 描述Redux单向数据流



#### 什么是JSX及其背后的原理

JSX（JavaScript XML）是一种JavaScript的语法扩展，它允许我们在JavaScript代码中写类似HTML的标签结构

##### JSX 的背后原理
JSX 本质上是语法糖，它在编译时会被转换成标准的JavaScript对象。这个转换过程通常是由一个编译工具（如Babel）来完成的。

JSX 代码：

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

转换后的 JavaScript 代码：


```jsx
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

JSX 的优点
可读性和可维护性: 使用JSX可以让代码更接近UI的结构和布局，增强了可读性。
强大的组合能力: JSX可以方便地与JavaScript代码混合使用，使得组件的组合和复用更加容易。
静态类型检查: 使用Flow或TypeScript等工具可以对JSX进行类型检查，提高代码的健壮性。

##### React.createElement返回的是虚拟DOM

React.createElement 返回的虚拟DOM对象的结构如下：

```javascript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// 返回的对象类似于：
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

###### 虚拟DOM的工作原理
1. 创建虚拟DOM: 初次渲染时，React通过React.createElement创建虚拟DOM对象。   
2. 更新虚拟DOM: 当状态或属性变化时，React会创建新的虚拟DOM对象。   
3. 比较虚拟DOM: React使用diffing算法（又称为调和算法）比较新旧虚拟DOM对象，找出变化的部分。  
4. 更新真实DOM: React根据diffing算法的结果，最小化真实DOM的变更，提高性能。   
###### 虚拟DOM的优势
性能优化: 虚拟DOM减少了直接操作真实DOM的次数，提高了性能。   
跨平台性: 由于虚拟DOM是平台无关的JavaScript对象，可以方便地在不同平台（如Web、移动端）上使用。   
简化编程模型: 使用虚拟DOM可以让开发者专注于描述UI的状态和结构，而不用关心具体的DOM操作。   


##### Diffing算法的原理


React的diffing算法遵循以下几个核心原则：

1. 树的分层比较
2. 同层节点的比较
3. 节点的类型判断
  

###### 树的分层比较
React会逐层比较新旧虚拟DOM树的节点，而不会跨层比较。也就是说，React假设同一层级的节点结构相对稳定，跨层的移动会很少发生。因此，React的算法复杂度从O(n^3)降低到了O(n)，大大提高了性能。


###### 同层节点的比较
在同一层级，React会通过以下规则来比较节点：

1. 类型相同的节点
2. 类型不同的节点
3. 唯一键（key）优化

###### 类型相同的节点
如果新旧虚拟DOM中的节点类型相同（如同为`<div>`或同一个组件），React会复用旧的DOM节点，并更新其属性和子节点。

```jsx
// 旧虚拟DOM
const oldElement = <div className="old">Old</div>;

// 新虚拟DOM
const newElement = <div className="new">New</div>;
```

React会保留`<div>`节点，只更新其className和内容。

###### 类型不同的节点
如果新旧节点的类型不同，React会销毁旧节点及其子节点，并创建新节点及其子节点。

```jsx
// 旧虚拟DOM
const oldElement = <div>Old</div>;

// 新虚拟DOM
const newElement = <span>New</span>;
```

React会删除旧的`<div>`节点，创建新的`<span>`节点。


##### 唯一键（key）优化
在列表中，为每个列表项分配唯一的key属性，React可以更高效地进行节点比较和复用。当React检测到有key属性的节点时，会优先比较key，以确保节点在更新时不会被错误地移动或重排。


```jsx
// 旧虚拟DOM
const oldList = [
  <li key="1">Item 1</li>,
  <li key="2">Item 2</li>,
];

// 新虚拟DOM
const newList = [
  <li key="2">Item 2</li>,
  <li key="1">Item 1</li>,
];
```

React会识别出两个节点只是位置交换，而不会销毁和重新创建节点。


#### React 组件的概念

组件的类型
React 组件主要有两种类型：

1. 函数组件（Functional Component）
2. 类组件（Class Component）

函数组件是定义为 JavaScript 函数的组件。它们接收一个 props 对象并返回一个 React 元素。函数组件是无状态的（直到 React 16.8 引入了 Hooks）。


```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

类组件
类组件是使用 ES6 类语法定义的组件。它们可以拥有自己的状态和生命周期方法。

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

###### Props 和 State

`props（properties）`是传递给组件的数据。它们是只读的，即组件不能修改自己的 props。props 用于在组件之间传递数据和配置。

`state`是组件内部管理的数据。类组件通过 this.state 访问和修改状态，函数组件通过 Hooks（如 useState）管理状态。状态的变化会触发组件的重新渲染。


###### 生命周期方法

类组件有一系列生命周期方法，用于在组件的不同阶段执行特定的操作：

+ 挂载（Mounting）：componentDidMount 等方法在组件挂载到 DOM 后调用。
+ 更新（Updating）：componentDidUpdate 等方法在组件更新后调用。
+ 卸载（Unmounting）：componentWillUnmount 方法在组件从 DOM 中移除前调用。

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log('Tick');
  }

  render() {
    return <div>Check the console for ticks</div>;
  }
}
```

函数组件通过 useEffect Hook 实现类似的生命周期功能

```jsx
import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    // 这里的代码相当于 componentDidMount 和 componentDidUpdate
    const timerID = setInterval(() => console.log('Tick'), 1000);
    return () => {
      // 这里的代码相当于 componentWillUnmount
      clearInterval(timerID); // Cleanup function
    }
  }, []);

  return <div>Check the console for ticks</div>;
}
```

#### 什么是Hook，为什么需要Hook

Hook是React 16.8引入的一项特性，它们允许你在函数组件中使用状态和其他React特性，而无需编写类组件。Hook的出现大大简化了组件的逻辑和重用，提高了代码的可读性和可维护性。

常见的Hook包括：

`useState`：在函数组件中添加状态。
`useEffect`：在函数组件中执行副作用。
`useContext`：在函数组件中访问上下文。
`useReducer`：在函数组件中使用Reducer函数进行状态管理。
`useCallback`：在函数组件中缓存函数。
`useMemo`：在函数组件中缓存计算值。
`useRef`：在函数组件中访问DOM元素或缓存变量。
`useLayoutEffect`：在所有DOM变更之后同步执行的副作用。

为什么需要Hook？
在Hook引入之前，React主要通过类组件来管理状态和生命周期方法。然而，类组件存在一些缺陷和复杂性，特别是在代码复用、逻辑分离以及组件的状态管理方面。Hook的出现解决了这些问题。

1. 逻辑复用和代码分离
类组件中，复用逻辑通常通过高阶组件（HOC）和Render Props实现，但这些模式会导致“嵌套地狱”，使代码难以阅读和维护。Hook通过自定义Hook的方式，允许你将组件逻辑提取到可重用的函数中，避免了这种复杂性。

示例：自定义Hook

```jsx

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 在useEffect中定义异步代码需要这样写
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, [url]);

  return data;
}

function MyComponent() {
  const data = useFetch('https://api.example.com/data');
  
  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

```

2. 状态逻辑更简洁
类组件中，状态管理和生命周期方法常常分散在不同的方法中，这使得逻辑难以跟踪。Hook可以将相关的逻辑聚合在一起，使代码更加简洁和易读。

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 只有当 count 发生变化时才重新运行这个 effect

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

3. 无需理解 this
在类组件中，开发者需要理解和正确使用 this，这对于一些初学者来说是一个常见的难题。函数组件和Hook通过闭包的方式管理状态和副作用，避免了 this 带来的复杂性。

4. 更好的性能优化
Hook如 useCallback 和 useMemo 提供了性能优化的工具，可以在依赖未发生变化时缓存函数或计算值，减少不必要的重新渲染和计算。



#### 什么是State，如何定义，有什么用

State 是React组件中的一种特殊数据，用于描述组件的状态或数据。State决定了一个组件在任何特定时间点的外观和行为。在React中，State是可变的，当State发生变化时，React会重新渲染组件，以确保界面和数据保持同步。

##### 如何定义State

使用 `useState` Hook 定义State（函数组件）

```jsx
import React, { useState } from 'react';

function Counter() {
  // 定义一个名为 count 的State变量，初始值为 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 点击按钮时，调用 setCount 更新 count 的值 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

##### 在类组件中定义State

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  // 使用类属性语法定义State
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        {/* 点击按钮时，通过 this.setState 更新 count 的值 */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    );
  }
}
```

#### 需要注意的点

1. 直接修改State：
问题：直接修改State的值可能不会触发组件重新渲染，因为React无法检测到State的变化。
```jsx
// 错误示例：直接修改 State
const [count, setCount] = useState(0);

function increment() {
  count++; // 直接修改 count 的值
  setCount(count); // 这种方式不会触发组件重新渲染
}
```
解决方案：使用 setState 或 useState 的更新函数来更新State的值。React会根据新的State值进行比较，并在必要时触发重新渲染。
```jsx
// 正确示例：使用 setState 或 useState 的更新函数
const [count, setCount] = useState(0);

function increment() {
  setCount(prevCount => prevCount + 1); // 使用更新函数
}
```
2. 异步更新State：
问题：State的更新是异步的，因此多个 setState 调用可能会合并，导致意外的行为。
```jsx
// 错误示例：多次调用 setState
const [count, setCount] = useState(0);

function handleAsyncUpdate() {
  setCount(count + 1); // 这里的 count 可能是旧值
  setCount(count + 1); // 这里的 count 也可能是旧值
}
```
解决方案：如果需要基于先前的State更新State，应该使用函数形式的更新，而不是直接传递新的值。
```jsx
// 正确示例：使用函数形式的更新
const [count, setCount] = useState(0);

function handleAsyncUpdate() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```
3. State的初始化：
问题：State的初始值应该是稳定的，不依赖于props或其他动态值，否则可能导致渲染问题或不一致的状态。
```jsx
// 错误示例：State 初始值依赖于 props
const [count, setCount] = useState(props.initialCount);

// 正确示例：State 初始值使用静态值
const [count, setCount] = useState(0);
```

4. 多个State变量：
问题：多个State变量的更新可能会导致性能问题或组件难以维护。

解决方案：考虑合并相关的State变量，或使用Reducer来管理复杂的State逻辑。
```jsx
// 错误示例：多个 State 变量
const [name, setName] = useState('');
const [age, setAge] = useState(0);

// 正确示例：合并相关的 State 变量
const [person, setPerson] = useState({ name: '', age: 0 });

// 或者使用 useReducer 来管理复杂的 State 逻辑
```

5. 性能优化：

问题：频繁更新State可能会导致不必要的重新渲染，影响性能。

解决方案：使用 useMemo、useCallback 等优化Hook来避免不必要的渲染，或者考虑使用React.memo来优化函数组件的性能。

```jsx
// 使用 useMemo 避免不必要的计算
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// 使用 useCallback 缓存回调函数
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// 使用 React.memo 优化函数组件的性能
const MemoizedComponent = React.memo(MyComponent);
```
6. 组件拆分：
问题：State变得复杂或组件变得庞大时，可能导致代码难以维护和理解。

解决方案：考虑将State拆分成更小的部分，使用组合或者自定义Hook来提高代码的可维护性。

```jsx
// 示例：使用自定义 Hook 将 State 拆分和复用
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
```

#### 常见Hook的使用

##### 1. useEffect
参数和执行时机
useEffect 接受两个参数：一个是回调函数，另一个是依赖数组（可选）。

+ 回调函数：在组件渲染或更新时执行。它类似于类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 的组合。

+ 依赖数组：这是一个可选的参数。它允许我们指定需要监视变化的依赖项。当依赖项中的任何一个发生变化时，React 将重新运行 useEffect 中的回调函数。

```jsx
useEffect(() => {
  // 在组件挂载时和每次 count 变化时执行这里的代码
  document.title = `You clicked ${count} times`;

  // 清除副作用的例子
  return () => {
    document.title = 'React App'; // 在组件卸载时执行清理操作
  };
}, [count]); // 仅在 count 发生变化时重新运行效果
```

###### 注意事项
1. 依赖数组的使用：

+ 如果省略依赖数组，回调函数将在每次组件渲染后都执行。这可能导致不必要的性能开销，尤其是副作用可能会频繁触发的情况。
+ 如果依赖数组为空，回调函数只在组件挂载和卸载时执行。

2. 异步操作：
useEffect 内部可以执行异步操作，但必须在回调函数内部进行。
如果需要在 useEffect 中进行数据获取或异步操作，可以使用 async 函数或者 Promise。

```jsx
useEffect(() => {
  // 异步操作1
  const fetchData = async () => {
    const response = await fetch('api/data');
    const data = await response.json();
    // 处理数据...
  };

  fetchData();
}, []); // 空依赖数组表示仅在组件挂载时执行

useEffect(() => {
  // 异步操作2
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      // 处理获取的数据
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []); // 依赖数组为空表示仅在组件挂载时执行
```

3. 性能优化：
+ 使用依赖数组可以避免不必要的副作用执行，从而提高性能。
+ 对于数据订阅或事件监听等，确保在清理函数中正确取消订阅或移除监听，以防止内存泄漏。

##### 2. useContext

`useContext` 是 React 中的一个 Hook，用于在函数组件中读取 React 的上下文（Context）。Context 提供了一种在组件树中传递数据的方法，而不必一级一级手动传递 props。

使用 useContext 的基本步骤：

1. 创建上下文（Context）
首先，需要创建一个 React 上下文。上下文可以包含全局的数据，并通过 Provider 提供给组件树中的所有组件。
```jsx
// 创建上下文
const MyContext = React.createContext(defaultValue);
```
其中，defaultValue 是可选的默认值，仅在未找到匹配的 Provider 时使用。
2. 在顶层或需要的地方使用 Provider
在组件树的某个位置，使用 MyContext.Provider 提供上下文的值。
```jsx
function App() {
  return (
    <MyContext.Provider value={/* 上下文提供的值 */}>
      <div>
        <ComponentA />
      </div>
    </MyContext.Provider>
  );
}
```
在上面的示例中，MyContext.Provider 包裹了 ComponentA，使得 ComponentA 及其子孙组件可以访问到 MyContext 提供的值。
3. 在组件中使用 useContext
在任何需要访问上下文数据的组件中，可以使用 useContext(MyContext) 来获取上下文的值。
```jsx
function ComponentA() {
  // 使用 useContext 获取 MyContext 的值
  const contextValue = useContext(MyContext);

  // 现在可以使用 contextValue 中的数据了
  return <div>{contextValue}</div>;
}
```
在 ComponentA 中，useContext(MyContext) 返回 MyContext.Provider 提供的值。

##### 3. useReducer
useReducer 是 React 中的一个 Hook，用于管理组件的状态逻辑，尤其是当状态变得复杂且包含多个子值时。它可以替代 useState，在某些情况下能更清晰和方便地管理状态。

useReducer 的工作原理类似于 Redux 中的 reducer。它接收一个 reducer 函数和初始状态，并返回当前状态和 dispatch 方法。Reducer 函数接收当前的状态和一个 action 对象，根据 action 的类型来更新状态。

```jsx
import React, { useReducer } from 'react';

// 定义 reducer 函数
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // 使用 useReducer 定义状态和 dispatch 方法
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
```

##### 4. useCallback

在 React 中，每次组件重新渲染时，其内部的所有函数（如事件处理函数、回调函数等）都会被重新创建。这可能会导致一些性能问题，尤其是在子组件中，如果不适当地处理这些函数，可能会触发不必要的重渲染。

`useCallback` 的作用是返回一个记忆化的函数引用，这意味着只有当依赖项发生变化时，才会重新创建该函数。这有助于减少函数的创建次数，从而提升性能。  

```jsx
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 记忆化回调函数
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 依赖数组，只有 count 变化时才重新创建 increment 函数

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

注意事项：
+ 依赖数组：在 useCallback 的第二个参数中，指定依赖项是非常重要的。只有在依赖项发生变化时，才会重新创建记忆化的函数。如果依赖数组为空，则意味着该函数永远不会更新。

+ 性能优化：useCallback 主要用于优化性能，特别是在子组件中，可以避免不必要的函数重建和影响性能的问题。

+ 与 memo 结合：useCallback 通常与 React.memo 一起使用，用于优化函数组件的性能，减少不必要的重渲染。


##### 5. useMemo

在 React 中，渲染过程中可能会存在一些昂贵的计算操作，例如复杂的计算、数据处理或者是从 props 计算出的派生数据。如果这些计算没有必要在每次渲染时都重新执行，就可以使用 useMemo 来缓存计算结果

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  // 使用 useMemo 记忆化计算结果
  const result = useMemo(() => {
    // 进行昂贵的计算操作，返回计算结果
    console.log('Calculating result...');
    return a * b;
  }, [a, b]); // 依赖数组，只有 a 或者 b 发生变化时才重新计算 result

  return <p>Result: {result}</p>;
}

function ParentComponent() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  return (
    <div>
      <input type="number" value={a} onChange={e => setA(parseInt(e.target.value))} />
      <input type="number" value={b} onChange={e => setB(parseInt(e.target.value))} />
      <ExpensiveComponent a={a} b={b} />
    </div>
  );
}

```

在上面的例子中，ParentComponent 渲染了一个 ExpensiveComponent，它根据输入的 a 和 b 值进行乘法计算。使用 useMemo 可以确保只有在 a 或 b 改变时才重新计算结果，而不会在每次输入变化时都进行昂贵的乘法运算。


注意事项：
+ 性能优化：useMemo 主要用于优化性能，避免不必要的计算。它适用于那些在渲染过程中可能重复计算但结果又不经常变化的情况。

+ 记忆化计算：useMemo 会记住上一次的计算结果，并在依赖项没有变化时直接返回上一次的结果，从而节省计算时间。

+ 与 useCallback 区别：useMemo 用于缓存复杂表达式的计算结果，而 useCallback 用于缓存函数引用。它们都是为了避免在每次渲染时都重新计算或创建。

##### 6. useRef

useRef 返回的对象在组件的整个生命周期内保持不变，但是可以更新其 .current 属性。

+ 访问 DOM 元素：通过 useRef 可以访问和操作 DOM 元素，而不需要直接操作 DOM。

```jsx
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // 获取输入框焦点
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

+ 存储任意可变数据：可以存储组件中需要保持持久性的数据，而不触发重新渲染。

+ 管理副作用：结合 useEffect 使用 useRef 可以在组件渲染之间共享数据，并且可以在不触发重新渲染的情况下执行副作用操作。

```jsx
function Timer() {
  const intervalRef = useRef(null);

  useEffect(() => {
    // 创建定时器
    intervalRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);

    // 组件卸载时清除定时器
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // 空依赖数组，仅在组件挂载和卸载时执行

  return (
    <div>
      <p>Timer Component</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  );
}

// 在上面的示例中，intervalRef 用于存储定时器的 ID，并且在组件卸载时清除定时器。这里展示了如何结合 useEffect 和 useRef 来管理副作用和持久数据。
```

注意事项：
+ 不会引发重新渲染：更新 ref 对象的 .current 属性并不会触发组件的重新渲染。

+ 可用于存储任何可变数据：useRef 可以用于存储任何可变的数据，不仅仅是 DOM 元素的引用。

+ 与 createRef 的区别：useRef 返回的 ref 对象在组件的整个生命周期内保持不变，而 createRef 每次渲染都会返回一个新的 ref 对象。

##### 7. useLayoutEffect

useLayoutEffect 是 React 中的一个 Hook，与 useEffect 类似，但它会在所有 DOM 变更之后同步调用 effect。它比 useEffect 更早地执行，这意味着它会在浏览器执行绘制之前执行，因此可以在 effect 中读取布局并同步触发重新渲染

```jsx
import React, { useLayoutEffect, useState, useRef } from 'react';

function MeasureElement() {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    // 获取元素宽度并更新状态
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width);
    }
  }, []); // 空依赖数组，只在组件挂载时执行一次

  return (
    <div>
      <div ref={elementRef}>Measure me!</div>
      <p>Width: {width}px</p>
    </div>
  );
}

```

使用场景：
+ 测量 DOM 元素：在需要获取或测量 DOM 元素的尺寸或位置时，可以使用 useLayoutEffect 进行同步操作，确保获取的数据是最新的。

+ 触发动画或转场效果：在需要在元素布局变化之前触发动画或转场效果时，可以使用 useLayoutEffect 来在布局完成后立即执行相关操作。

+ 同步更新状态：在某些情况下，需要在更新 DOM 之前同步更新 React 组件的状态，可以使用 useLayoutEffect 来确保状态更新的时机。

注意事项：
+ 尽量避免在 useLayoutEffect 中进行耗时的操作，因为它会阻塞浏览器渲染。
+ 如果可能的话，优先考虑使用 useEffect，因为它在浏览器完成绘制后才执行副作用，对性能影响较小


#### 受控组件和非受控组件

在 React 中，表单元素（如 `<input>`、`<textarea>` 和 `<select>`）有两种不同的工作方式：受控组件（controlled components）和非受控组件（uncontrolled components）。这两者在状态管理和数据流控制上有所不同。

##### 受控组件（Controlled Components）

受控组件指的是由 React 组件本身管理其表单元素的状态（比如输入框的值），并通过 props 将当前的值和状态更新的处理函数传递给表单元素。这种方式使得 React 成为了单一数据源的真正来源。

特点和优势：

+ 数据流单向性：数据由 React 组件管理，并且通过 props 和 setState 方法传递。
+ 严格的数据控制：可以在 React 组件中进行验证、格式化或拦截用户输入。
+ 状态可预测：任何时候，通过组件的状态可以完全控制输入框中的值。

```jsx
import React, { useState } from 'react';

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
}
```

##### 非受控组件（Uncontrolled Components）
非受控组件是指表单元素的状态由 DOM 自身管理。React 组件不控制输入框的值，而是在需要时从 DOM 中读取值

特点和优势：

+ 直接访问 DOM：通过 ref 可以直接访问 DOM 元素，方便获取和操作输入框的值。
+ 适用简单场景：在一些简单的场景下，非受控组件可以减少代码量和复杂度。


```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Initial Value" />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}
```

#### react-redux常用API

1. `<Provider>`
`<Provider>` 是 React Redux 提供的顶层组件，用于将 Redux 的 store 注入整个应用程序的组件树中，使得所有的子组件都能够访问 Redux 中的状态。

2. `connect()`
connect() 是 React Redux 提供的函数，用于连接 Redux 的状态（state）和动作（actions）到 React 组件的属性（props）。它是通过高阶组件（Higher Order Component，HOC）的形式来实现的。
```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
3. `useSelector`
useSelector 是 React Redux 提供的 Hook，用于在函数式组件中选择和获取 Redux store 中的状态数据。

```jsx
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector(state => state.counter);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
```

4. `useDispatch`
useDispatch 是 React Redux 提供的 Hook，用于在函数式组件中获取 dispatch 函数，从而可以派发（dispatch）action。

```jsx
import { useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
```

5. `connectAdvanced`
6. `createSelectorHook`

#### React中组件之间如何通信

1. Props
父组件向子组件传递数据:
```jsx
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'Hello from parent';

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ data }) => {
  return <p>{data}</p>;
};

export default ChildComponent;

```

子组件向父组件传递数据（通过回调函数）：

```jsx
// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [childData, setChildData] = useState('');

  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  return (
    <div>
      <p>Data from child: {childData}</p>
      <ChildComponent onChildData={handleChildData} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ onChildData }) => {
  const sendDataToParent = () => {
    const data = 'Hello from child';
    onChildData(data);
  };

  return <button onClick={sendDataToParent}>Send Data to Parent</button>;
};

export default ChildComponent;

```

2. Context API
3. Redux


#### React 中如何进行性能优化

1. 使用生产环境构建
确保在生产环境中使用优化过的构建版本，通常通过打包工具如 Webpack 的生产模式构建应用，可以减少文件大小、优化代码以及移除开发模式下的调试工具和日志输出。

2. 减少渲染次数
React 的 Virtual DOM 可以高效地处理组件的重新渲染，但是避免不必要的重新渲染可以进一步提升性能。主要的方法包括：

使用 PureComponent 或 React.memo：这些优化组件的重新渲染，仅在组件的 props 或状态变化时进行重新渲染。

React.memo 是 React 提供的一个高阶组件（Higher-Order Component），用于优化函数组件的性能。它类似于 PureComponent，但适用于函数组件。

使用 React.memo 的场景和作用：
减少不必要的重新渲染：

默认情况下，React 中的函数组件每次父组件重新渲染时都会重新执行并返回新的 JSX。如果组件的 props 没有变化，但组件本身没有使用 React.memo，React 仍然会重新渲染该组件。
使用 React.memo 可以帮助避免这种情况，它会记住上一次渲染时的 props，并在下一次渲染时对比当前 props 和上一次的 props 是否相同。只有在 props 发生变化时，才会触发重新渲染。
优化性能：

对于计算开销较大的函数组件或需要频繁更新的组件，使用 React.memo 可以显著减少不必要的计算和渲染，提升组件的性能和响应速度。

```jsx

import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.data}</div>;
  }
}

// 或者使用 React.memo（函数组件）
const MyFunctionalComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

```

3. 使用 Keys 进行列表项的唯一标识
在渲染列表时，为每个列表项指定一个唯一的 key 属性，帮助 React 识别每个列表项的变化，避免重新创建和销毁 DOM 元素。


4. 懒加载和分割代码
使用懒加载（Lazy Loading）和代码分割（Code Splitting）来减少初始加载时需要加载的代码量，提高首屏加载速度和整体性能。React 提供了 React.lazy() 和 Suspense 来实现组件的懒加载。

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const MyComponent = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </React.Suspense>
);
```

5. 使用 Memoization 优化计算密集型操作
对于一些计算密集型的操作或昂贵的计算，可以使用 Memoization 技术（如 useMemo Hook 或 React.memo）来缓存计算结果，避免不必要的重复计算。

6. 使用虚拟化技术处理长列表
对于需要展示大量数据的长列表，可以使用虚拟化技术（如 react-virtualized 或 react-window）来动态渲染可视区域内的元素，减少 DOM 节点的数量，提升渲染性能。

7. 避免内存泄漏
确保及时清理不再使用的资源和事件监听器，特别是在组件卸载时。使用 useEffect Hook 来处理清理操作。

#### 什么是 React 的 Code Splitting？如何实现？

1. 使用 React.lazy 和 Suspense
2. Webpack 的 SplitChunksPlugin
3. 使用动态 import
```javascript
import('./LazyComponent').then(module => {
  // module.default 是动态导入的组件
  const LazyComponent = module.default;

  // 使用 LazyComponent
});

```
  
