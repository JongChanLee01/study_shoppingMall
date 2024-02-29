import React, { useState } from 'react'
import './App.css'
import GroupComponent from './components/GoupComponent';
import TodoContainer from './components/TodoContainer';


type Person = {
  name : string,
  age: number,
  height: number
}

function App() {
  console.log('App 호출됨');
  // useState<number>(0)에서 <number>는 타입을 표시해주는 것
  const [value, setValue] = useState<number>(0);    

  // 두번째 box
  const [arr, setArr] = useState<number[]>([0,0]);
  const increaseAt = (index: number) => {
    arr[index] = arr[index] + 1;
    setArr([...arr]);
  }


  const [person, setPerson] = useState<Person>({name: '홍길동', age: 16, height: 180});
  const increase = (key: string) => {
    if(key === "height") person.height++;
    else if(key === "age") person.age++;
    // setPerson(person);
    setPerson({...person});
  };

  return (
    <div className='wrap'>
      <TodoContainer />
      <hr/>
      <div className="box">
        <h1>App</h1>
        <button onClick={() => setValue(value + 1)}>
          { value }
        </button>
        <GroupComponent />
      </div>
      <hr/>
      {/* 두번째 박스 */}
      <div className="box2">
        <h1>App</h1>
        <p>{ arr.join(", ") }</p>
        <button onClick={()=>increaseAt(0)}>a[0]++</button>
        <button onClick={()=>increaseAt(1)}>a[1]++</button>
      </div>
      <hr/>

      <div className="box2">
        <h1>App</h1>
        <p>{ person.age }, { person.height }</p>
        <button onClick={() => increase("age")} >age++</button>
        <button onClick={() => increase("height")} >height++</button>
      </div>
    </div>
  );
}
 
export default App;
