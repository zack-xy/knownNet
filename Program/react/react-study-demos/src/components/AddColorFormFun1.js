import React, {useRef} from 'react'
import PropTypes from 'prop-types';

const AddColorFormFun = ({onNewColor = f => f}) => {
  const _title = useRef(null);
  const _color = useRef(null);
  const submit = e => {
    e.preventDefault()
    onNewColor(_title.current.value, _color.current.value)
    _title.current.value = ''
    _color.current.value = '#000'
    _title.current.focus()
  }
  return (
    <form onSubmit={submit}>
      <input ref={_title} type="text" placeholder="color title..." required/>
      <input ref={_color} type="color" required/>
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
