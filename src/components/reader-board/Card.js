import React from 'react'

function Card({image, title, text, action}) {
  return (
    <div 
        style={{ width: '200px', height: '120px', backgroundColor: 'wheat' }}  
        onClick={() => action()} 
    >
        <div>{title}</div>
        <div>{text}</div>
    </div>
  )
}

export default Card

// 이미지, 제목, 내용
// 클릭했을때 액션