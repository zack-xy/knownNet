import React from 'react'
import PropTypes from 'prop-types'  // React v15.5之后需要显示引入

const SummaryFun = ({ ingredients, steps, title }) => {
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


// 无状态函数式组件限制props
SummaryFun.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired
}

SummaryFun.defaultProps = {
  ingredients: 1,
  steps: 1
}

export default SummaryFun
