import React from 'react'

function Button({ title, action, width, height }) {
  return (
    <div 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: width, height: height, backgroundColor: 'blue' }} 
        onClick={() => action()}
    >
        {title}
    </div>
  )
}

export default Button