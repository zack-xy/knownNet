import React, { Component } from 'react'
import {ThemeConsumer} from './Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h1>ConsumerPage</h1>

        <ThemeConsumer>
          {
            themeContext => <div className={themeContext.themeColor}>consumer</div>
          }
        </ThemeConsumer>
      </div>
    )
  }
}
