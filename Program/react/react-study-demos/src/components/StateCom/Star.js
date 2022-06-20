import React from 'react'
import PropTypes from 'prop-types'
import './Star.css'
import { FaStar } from "react-icons/fa";

const Star = ({selected=false, onClick=f=>f}) => 
    <FaStar color={selected ? "red" : "grey"} onClick={onClick} />;
    // <div className={selected? "star selected":"star"} onClick={onClick}>
    // </div>

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Star
