import React, { Component } from 'react'
import {ThemeConext} from './Context'
import UserPage from './UserPage'

export default class HomePage extends Component {
  // 声明一个static contextType
  static contextType = ThemeConext
  render() {
    /** 通过props传递themeColor
     * const {themeColor} = this.props.theme
    */
  
    const {themeColor} = this.context
    return (
      <div>
        <h1 className={themeColor}>HomePage</h1>
        <UserPage />
      </div>
    )
  }
}
