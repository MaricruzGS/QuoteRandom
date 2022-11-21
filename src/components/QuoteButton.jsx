import React from 'react'

const QuoteButton = ({getNewValue, backgroundColorObject }) => {
  return (
    <button onClick={getNewValue} style={backgroundColorObject}>
        <i className='bx bx-right-arrow'></i>
    </button>
  )
}

export default QuoteButton