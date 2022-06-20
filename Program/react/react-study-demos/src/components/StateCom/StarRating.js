import PropTypes from 'prop-types'
import React from 'react'
import Star from './Star'

const StarRating = ({className='', starsSelected=0, totalStars=5, onRate=f=>f}) => 
  <div className={className}>
    <div>
    {[...Array(totalStars)].map((n, i) => 
      <Star key={i}
            selected={i<starsSelected}
            onClick={()=>onRate(i+1)}
      />
    )}
    </div>
    <p>{starsSelected} of {totalStars} stars</p>
  </div>


StarRating.propTypes = {
  totalStars: PropTypes.number
}

StarRating.defaultProps = {
  totalStars: 5
}

export default StarRating

