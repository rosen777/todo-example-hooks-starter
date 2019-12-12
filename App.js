import React, {useState, useEffect} from 'react'
import uuid from 'uuid'
import Title from './components/Title'
import AddTodoForm from './components/AddTodoForm'
import Todos from './components/Todos'
import './style.css'

const App = props => {

const [todos, setTodos] = useState([])

const addTodo = title => {
   const newTodo = {
     id: uuid(),
     title,
     completed: false
   }
   setTodos([newTodo, ...todos])
 }

 const completeTodo = todoId => {
       const newTodos = todos.map(todo => todo.id === todoId ?
       {...todo, completed: !todo.completed} :
       todo
   )
   setTodos(newTodos)
 }


 const deleteTodo = todoId => {
   const filteredTodos = todos.filter(todo => todo.id !== todoId)
   setTodos(filteredTodos)
 }

 const getTodos = () => 
   fetch('https://jsonplaceholder.typicode.com/todos/')
   .then(resp => resp.json())
   .then(setTodos)

 useEffect(() => getTodos(), [])

return (
     <div>
       <Title />
       <AddTodoForm addTodo={addTodo} />
       <Todos
         todos={todos}
         completeTodo={completeTodo}
         deleteTodo={deleteTodo}
       />
     </div>
   )
}

// const App = props => {
//  const [todos, setTodos] = useState([])

//  const addTodo = title => {
//    const newTodo = {
//      id: uuid(),
//      title,
//      completed: false
//    }
//    setTodos([newTodo, ...todos])
//  }


//  const completeTodo = todoId => {
//    const newTodos = todos.map(todo => todo.id === todoId ?
//        {...todo, completed: !todo.completed} :
//        todo
//    )
//    setTodos(newTodos)
//  }

//  const deleteTodo = todoId => {
//    this.setTodos(todos.filter(todo => todo.id !== todoId))
//  }

//  const getTodos = () =>
//    fetch('https://jsonplaceholder.typicode.com/todos/')
//      .then(resp => resp.json())
//      .then(setTodos)

//   useEffect(() => getTodos(), [])

//    return (
//      <div>
//        <Title />
//        <AddTodoForm addTodo={addTodo} />
//        <Todos
//          todos={todos}
//          completeTodo={completeTodo}
//          deleteTodo={deleteTodo}
//        />
//      </div>
//    )

// }

export default App
