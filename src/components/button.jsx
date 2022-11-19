import React from 'react'
import propTypes from 'prop-types'
const button = ({color , text , onClick}) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor:color}} onClick={onClick} >{text}</button>
    </div>
  )
}

button.defaultProps={
color:'steelblue'

}
button.propTypes={
text: propTypes.string,
color: propTypes.string,
}

export default button
