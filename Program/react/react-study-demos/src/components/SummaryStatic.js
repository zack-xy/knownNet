import React, { Component } from 'react'
import PropTypes from 'prop-types'  // React v15.5之后需要显示引入

export default class SummaryStatic extends Component {

  // 使用类的静态属性
  static propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) => 
        (typeof props[propName] !== 'string') ?
            new Error('A title must be a string') :
            (props[propName].length > 20) ?
                new Error('title is over 20 characters') : null
  }

  static defaultProps = {
    ingredients: 0,
    steps: 1,
    title: "[recipe]"
  }

  render() {
    const { ingredients, steps, title } = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients |</span>
          <span>{steps} Steps |</span>
        </p>
      </div>
    )
  }
}
