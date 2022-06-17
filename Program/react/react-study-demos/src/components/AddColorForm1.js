import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddColorForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const {_title, _color} = this.refs
    e.preventDefault()
    this.props.onNewColor(_title.value, _color.value)
    console.log("_title Ref>>>>", _title)
    console.log("_color Ref>>>>", _color)
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="color title..." required/>
        <input ref="_color" type="color" required/>
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
