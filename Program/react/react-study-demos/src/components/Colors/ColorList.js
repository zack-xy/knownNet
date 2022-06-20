import React from 'react'
import Color from './Color'
import { css } from '@emotion/css'

const ColorList = ({colors = [], onRate=f=>f, onRemove=f=>f}) => 
    <div className={css`
        display: flex;
        flex-wrap: wrap;
      `}>
      {(colors.length === 0) ? 
          <p>No Colors Listed. (Add a Color)</p> :
          colors.map(color => 
            <Color key={color.id} 
                   {...color}
                   onRate={(rating)=>onRate(color.id, rating)}
                   onRemove={()=> onRemove(color.id)}
            />
          )
      }
    </div>

ColorList.propTypes = {

}

export default ColorList
