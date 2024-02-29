import React from 'react'
import type * as types from '../types'
import TodoItem from './TodoItem'
 
type Props = {
  todoList: types.Todo[]
}
 
function TodoList({ todoList }: Props) {
  const trlist = todoList.map(todo => <TodoItem todo={todo} key={todo.id} />);
  return (
    <table>
      <thead>
        <tr><td>id</td><td>할일</td></tr>
      </thead>
      <tbody>
        {trlist}
      </tbody>
    </table>
  )
}
 
export default TodoList