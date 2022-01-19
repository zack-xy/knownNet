import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: 'omg'
  }
  static propTypes = {
    msg: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    console.log("constructor");
  }
  static getDerivedStateFromProps (props, state) {
    console.log("getDerivedStateFromProps")
    const { counter } = state
    return counter > 5 ? { counter: 0 } : null
  }
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState)
    return {
      msg: "getSnapshotBeforeUpdate"
    }
  }
  // componentWillMount () {
  //     console.log("componentWillMount")
  // }
  componentDidMount () {
    console.log("componentDidMount")
  }
  shouldComponentUpdate (nextProps, nextState) {
    const { counter } = this.state
    console.log("shouldComponentUpdate", nextState)
    return counter < 10
  }
  // componentWillUpdate () {
  //     console.log("componentWillUpdate");
  // }
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
  }
  setCount = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    console.log("render", this.props)
    const { counter } = this.state
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{counter}</p>
        <button onClick={this.setCount}>改变counter</button>
        {counter % 3 && <Child count={counter} />}
      </div>
    )
  }
}
class Child extends Component {
  componentWillUnmount () {
    console.log("Child componentWillUnmount")
  }
  // 初次渲染不会执行，只有在已挂载的组件接收新的props的时候，才会执行
  // componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps", nextProps);
  // }
  render () {
    console.log("Child Render");
    const { count } = this.props
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}