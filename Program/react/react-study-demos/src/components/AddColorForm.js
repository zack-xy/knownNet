import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this._title = React.createRef()  // 创建ref
    this._color = React.createRef()  // 创建ref
  }

  submit(e) {
    const {_title, _color} = this
    e.preventDefault()
    this.props.onNewColor(_title.current.value, _color.current.value)
    console.log("_title Ref>>>>", _title)
    console.log("_color Ref>>>>", _color)
    _title.current.value = ''
    _color.current.value = '#000'
    _title.current.focus()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref={this._title} type="text" placeholder="color title..." required/>
        <input ref={this._color} type="color" required/>
        <button onClick={this.submit}>ADD</button>
      </form>
    )
  }
}


AddColorForm.propTypes = {
  onNewColor: PropTypes.func
}


AddColorForm.defaultProps = {
  onNewColor: f=>f
}
