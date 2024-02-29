import React, { useState } from 'react'
import type * as types from '../types'
import TodoRoot from './TodoRoot';
 
const data : types.Todo[] = [
  {id: 1, title: '프론트엔드 과제', done: false},
  {id: 2, title: '백엔드 과제', done: true},
  {id: 3, title: '웹프 시험공부', done: false}
];
 
function TodoContainer() {
  const [todoList, setTodoList] = useState<types.Todo[]>(data);
 
  const addTodo : types.AddTodoFunc = (title: string) => {
    // todoList 배열에서 마지막 항목의 인덱스
    const lastIndex = todoList.length - 1;

    // 마지막 항목의 id
    const lastId = todoList[lastIndex].id;

    // 새 할일 객체 생성
    const todo = {id: lastId + 1, title: title, done: false};
    
    // todoList 배열의 모든 원소와
    // 새 todo 객체가 들어있는 새 배열을 만들어서 상태 변경
    setTodoList([...todoList, todo]);
  }
 
  return <TodoRoot todoList={todoList} addTodo={addTodo} />;
}
 
export default TodoContainer