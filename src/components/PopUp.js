import React from 'react'

function PopUp({img, title, content}) {
  return (
    <div>
        <img src={img} />
        <div>{title}</div>
        <div>{content}</div>
    </div>
  )
}

export default PopUp