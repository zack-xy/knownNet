import React, { Component } from 'react'
export default class SetStateComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount () {
    document.getElementById('test').addEventListener('click', this.setCounter)
  }
  changeValue = (v) => {
    // this.setState({
    //     counter: this.state.counter + v
    // })
    // console.log('counter', this.state.counter);
    this.setState(state => {
      return {
        counter: state.counter + v
      }
    })
  }
  setCounter = () => {
    this.changeValue(1)
    this.changeValue(2)
  }
  render () {
    return (
      <div>
        <h3>SetStateComponent</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="test">原生事件:{this.state.counter}</button>
      </div>
    )
  }
}