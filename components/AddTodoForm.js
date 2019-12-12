import React, { useState } from 'react'

export default ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Enter a new todo here!'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
    </form>
  )
}