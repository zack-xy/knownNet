import React, { Component } from 'react'
import HomePage from './HomePage'
import {ThemeProvider} from './Context'

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "blue"
      }
    }
  }
  render() {
    const {theme} = this.state
    return (
      <div>
        <h1>ContextPage</h1>
        {/* 通过props传递参数 */}
        {/* <HomePage theme={theme} /> */}

        {/* 通过context传递参数 */}
        <ThemeProvider value={theme}>
          <HomePage />
        </ThemeProvider>
      </div>
    )
  }
}
