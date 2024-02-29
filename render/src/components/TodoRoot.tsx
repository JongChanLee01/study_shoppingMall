import React from 'react'
import './TodoRoot.css'
import type * as types from '../types'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
 
type Props = {
  todoList: types.Todo[],
  addTodo: types.AddTodoFunc
}
 
function TodoRoot({ todoList, addTodo }: Props) {
  return (
    <div className="todoRoot">
      <h1>할일</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} />      
    </div>
  )
}
 
export default TodoRoot;