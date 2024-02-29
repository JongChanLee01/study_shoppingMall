import React from 'react';
import type * as types from '../types';
 
type Props = {
  todo: types.Todo
}
 
function TodoItem({ todo }: Props) {
  return (
    <tr>
      <td>{ todo.id }</td>
      <td>{ todo.title }</td>
    </tr>
  )
}
 
export default TodoItem;