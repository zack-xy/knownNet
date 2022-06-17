import React, { Component } from 'react'
import AddColorForm1 from './AddColorForm1'
import AddColorForm from './AddColorForm'
import AddColorFormFun1 from './AddColorFormFun1'
import AddColorFormFun from './AddColorFormFun'

export default class ColorFormUse extends Component {

  logColor = (title, color) => {
    console.log(`New Color: ${title} | ${color}`)
  }

  render() {
    return (
      <div className="color-list">
        <h2>class组件写法1</h2>
        <AddColorForm1 onNewColor={this.logColor} />
        <h2>class组件</h2>
        <AddColorForm onNewColor={this.logColor} />
        <h2>函数式组件写法1</h2>
        <AddColorFormFun1 onNewColor={this.logColor}/>
        <h2>函数式组件写法2</h2>
        <AddColorFormFun onNewColor={this.logColor}/>
        <div>ColorForm组件的使用，ref</div>
      </div>
    )
  }
}
