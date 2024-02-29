import React, { useState } from 'react'
import CounterA from './CounterA'
import CounterB from './CounterB'


// 하나의 파일에서 여러개 컴포넌트 구현 가능

// function CounterA() {
//     console.log("CounterA 호출됨");
//     const [value, setValue] = useState<number>(0);  
//     return (
//       <div className="box">
//         <h1>CounterA</h1>
//         <button onClick={() => setValue(value + 1)}>
//           { value }
//         </button>
//       </div>
//     )
// }

// function CounterB() {
//     console.log("CounterB 호출됨");
//     const [value, setValue] = useState<number>(0);  
//     return (
//       <div className="box">
//         <h1>CounterB</h1>
//         <button onClick={() => setValue(value + 1)}>
//           { value }
//         </button>
//       </div>
//     )
// }

function GroupComponent() {
  console.log('GroupComponent 호출됨');  
  const [value, setValue] = useState<number>(0);  
  return (
    <div className='box'>
      <h1>GroupComponent</h1>
      <button onClick={() => setValue(value + 1)}>
        { value }
      </button>
      <CounterA />
      <CounterB />
    </div>
  )
}
 
export default GroupComponent;