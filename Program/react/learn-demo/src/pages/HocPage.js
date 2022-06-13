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

@foo
class ChildClass extends Component {
  render() {
    return (
      <div className="border">
        Child-class-{this.props.name}
      </div>
    )
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h1>HocPage</h1>
        <Foo name="zack" />
        <ChildClass name="zack-class"/>
      </div>
    )
  }
}
