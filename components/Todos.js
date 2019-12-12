import React from 'react'

import Todo from './Todo'

export default ({todos, completeTodo, deleteTodo}) =>
  <ul>
    {
      todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          handleClick={() => completeTodo(todo.id)}
          handleDoubleClick={() => deleteTodo(todo.id)}
        />
      )
    }
  </ul>
