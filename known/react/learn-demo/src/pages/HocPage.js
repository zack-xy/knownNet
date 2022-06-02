import React, { Component } from 'react'

// 是一个函数，参数是组件，返回值也是组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  )
}

function Child(props) {
  return (
    <div className="border">
      Child-{props.name}  
    </div>
  )
}

const Foo = foo(Child)

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h1>HocPage</h1>
        <Foo name="zack" />
      </div>
    )
  }
}
