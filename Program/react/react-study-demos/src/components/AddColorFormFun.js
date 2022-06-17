import React from 'react'
import PropTypes from 'prop-types';

const AddColorFormFun = ({onNewColor = f => f}) => {
  let _title,_color
  const submit = e => {
    e.preventDefault()
    onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }
  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input} type="text" placeholder="color title..." required/>
      <input ref={input => _color = input} type="color" required/>
      <button onClick={submit}>ADD</button>
    </form>
  )
}

AddColorFormFun.propTypes = {
  onNewColor: PropTypes.func
}


AddColorFormFun.defaultProps = {
  onNewColor: f=>f
}


export default  AddColorFormFun
