import { useState, useEffect } from 'react';
import './App.css';
import Profile from "./Profile.js";
import Message from './components/Message';
import type { Person } from './components/PersonTable'
import PersonTable from './components/PersonTable';
// import { test1, test2, test3 } from "./test_axios1";
// import { test1, test2, test3 } from "./test_axios2";
// import { test1, test2 } from "./test_axios3";

function App() {
  let persons1 : Person [] = [
    {id: 31, name:'홍길동', age: 16},
    {id: 32, name:'임꺽정', age: 19},
    {id: 33, name:'전우치', age: 20}
  ];

  let persons2 = persons1.slice(0);
  persons2.reverse();

  // 변수값 변경 예제
      
  // 아래 상태일때는 렌더링이 되지않음
  // 따라서 아래에 p태그에서는 count가 변경되지 않음
  // let count = 0;
  // const increase = () => { ++count; console.log(count); };
  // const decrease = () => { --count; console.log(count); };


  // 위의 문제를 해결하기 위해서
  // useState Hook 사용
  const [count, setCount] = useState(0);
  const increase = () => { setCount(count + 1); };
  const decrease = () => { setCount(count - 1); };

  // input 구현 예제
  const [message, setMessage] = useState('hello');

  // checkbox 구현
  const [value, setValue] = useState(true);
  // 체크박스 수정
  const helloTag = <div id="hello">Hello React.js</div>;


  // select 태그 구현
  const [color, setColor] = useState('green');

  // radio 태그 구현
  const [gender, setGender] = useState('여자');


  // 학생정보 연습문제
  const [studentName, setStudentName] = useState('');
  const [studentNum, setStudentNum] = useState('');
  const [studentMajor, setStudentMajor] = useState('');


  // useEffect(()=>{
  //   test1();
  //   test2();
  //   // test3(1);
  //   // test3(400); // 404 에러
  // });


  // 0229 입력폼
  const [name2, setName2] = useState("");
  const [age2, setAge2] = useState(NaN);
  const [gender2, setGender2] = useState("");
  const [departmentId, setDepartmentId] = useState(0);


  // 0229 입력폼 예제2
  const [student2, setStudent2] = useState({name: "", age: NaN, gender: "", departmentId: 0});
  const handler = (e: any) => setStudent2({...student2, [e.target.name]: e.target.value});

  return (
    <div className="App">
      {/* axios 실습 */}
      <h1>axios 테스트</h1>


      <hr/>
      <Profile />
      <hr/>
      {/* 03 리액트 기초 실습 */}
      <div>
        <Message value="안녕하세요" color="blue" />
      </div>
      <hr/>

      <div>
        <PersonTable persons={persons1} />
        <hr/>
        <PersonTable persons={persons2} />
      </div>
      <hr/>

      {/* 변수값 변경 예제 */}
      <div>
        <p>{ count }</p>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
      <hr/>


      {/* input 구현 예제 */}
      <div>
        <p>{ message }</p>
        <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} />
      </div>


      {/* checkbox 구현 */}
      <div id="app">
        <p>{ value ? "true" : "false" }</p>
        <hr/>
        <input type="checkbox" checked={value} onChange={(e)=>setValue(e.target.checked)}/>
        {/* 체크박스 수정 */}
        { value ? helloTag : null}
      </div>
      <hr/>

      {/* select 태그 구현 */}
      <div id="app2" className={color}>
        <h1>select</h1>
        {/* 옵션 안에 값들이 value값으로 넘어감
        그러고 나서 위에 className으로 값이 넘어감 */}
        <select onChange={(e) => setColor(e.target.value)} value={color}>
          <option>yellow</option>
          <option>green</option>
          <option>blue</option>
          <option>red</option>
        </select>
      </div>
      <hr/>


      {/* radio 태그 구현 */}
      <div id="app3">
        <p>{ gender }</p>
        <label>
          <input type="radio" name="gender" 
                onChange={(e) => setGender('남자')} checked={ gender === '남자' } />
          <span>남자</span>
        </label>

        <label>
          <input type="radio" name="gender" 
                onChange={(e) => setGender('여자')} checked={ gender === '여자' } />
          <span>여자</span>
        </label>
      </div>
      <hr/>

      <form action="">
        <fieldset>
          <legend>학생 정보 입력</legend>
            이름 :<input type="text" name="student_name" onChange={(e)=>setStudentName(e.target.value)} value={studentName} placeholder='홍길동'/><br/>
            학번 :<input type="text" name="student_num" onChange={(e)=>setStudentNum(e.target.value)} value={studentNum} placeholder='202412345'/><br/>
            학과 :
            <select name="student_major" id="student_major" onChange={(e) => setStudentMajor(e.target.value)} value={studentMajor}>
              <option>===학과선택===</option>
              <option>컴퓨터정보공학</option>
              <option>전자전기공학</option>
              <option>철도경영물류</option>
            </select>
        </fieldset>
        <hr/>
        <div id="student_info">
          <span>이름 : </span>{studentName}<br/>
          <span>학번 : </span>{studentNum}<br/>
          <span>학과 : </span>{studentMajor}<br/>
        </div>
      </form>
      <hr/>

      <div id="app4">
        <h1>입력폼</h1>
        <div className="control">
          <input type="text" placeholder='이름' name='name' onChange={handler} />
          {/* <input type="text" placeholder='이름' onChange={(e)=>setName2(e.target.value)} value={name2} /> */}
        </div>

        <div className="control">
          <input type="number" placeholder='나이' min="0" step="1"
          name='age' onChange={handler} value={student2.age} />
          {/* <input type="number" placeholder='나이' min="0" step="1"
          onChange={(e)=>setAge2(parseInt(e.target.value))} value={age2} /> */}
        </div>

        <div className="control">
          <label>
            <input type="radio" name='gender' value="남자" onChange={handler} checked={student2.gender === "남자"} />
            {/* <input type="radio" name='gender' onChange={(e)=>setGender2("남자")} checked={gender2 === "남자"} /> */}
            <span>남자</span>
          </label>
          <label>
            <input type="radio" name='gender' value="여자" onChange={handler} checked={student2.gender === "여자"} />
            {/* <input type="radio" name='gender' onChange={(e)=>setGender2("여자")} checked={gender2 === "여자"} /> */}
            <span>여자</span>
          </label>
        </div>

        <select value={student2.departmentId} name='departmentId' onChange={handler}>
        {/* <select value={departmentId}
        onChange={(e)=>setDepartmentId(parseInt(e.target.value))}> */}
          <option value={0}>학과를 선택하세요</option>
          <option value={1}>소프트웨어</option>
          <option value={2}>컴퓨터공학</option>
          <option value={3}>정보통신</option>
          <option value={4}>인공지능</option>
        </select>
        <hr/>
        <h1>입력된 값</h1>
        <div className="control">이름: {student2.name}</div>
        <div className="control">나이: {student2.age}</div>
        <div className="control">성별: {student2.gender}</div>
        <div className="control">학과: {student2.departmentId}</div>
        {/* <div className="control">이름: {name2}</div>
        <div className="control">나이: {age2}</div>
        <div className="control">성별: {gender2}</div>
        <div className="control">학과: {departmentId}</div> */}
      </div>
      <hr/>
    </div>
  );
}

export default App;
