import React from 'react'
import './styles.css'
import { TodoslistProps } from './types'
import SingleTodo from './SingleTodo'

const TodoList: React.FC<TodoslistProps> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
      
    </div>
  )
}

export default TodoList;
