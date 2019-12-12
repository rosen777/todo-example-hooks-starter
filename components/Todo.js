import React from 'react'

export default ({todo, handleClick, handleDoubleClick}) => {
  const style = {
    textDecoration: todo.completed && 'line-through',
    color: todo.completed && 'rgba(0,0,0,0.5)'
  }
  return (
    <li
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={style}
    >
      { todo.title }
    </li>
  )
}
