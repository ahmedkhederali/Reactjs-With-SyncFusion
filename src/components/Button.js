import React from 'react'

function Button({
  color,bgColor,text,borderRadius,size
}) {
  return (
    <button type='button' 
    style={{
        color:color,
        background:bgColor,
        borderRadius:borderRadius
        }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button
