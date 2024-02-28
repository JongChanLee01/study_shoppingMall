import axios from 'axios';

type Student = {
  id: number,
  studentNo: string,
  name: string,
  phone: string,
  email: string,
  sex: string,
  departmentId: number
}
 
axios.defaults.baseURL = 'http://localhost:3000';
 
export function test1() {
  let students: Student[] = [];
  axios.get('/students')
    .then(response => {
      students = response.data;
      console.log('test1', students);
    })
}
 
export function test2() {
  let students: Student[];
  let student: Student;
  axios.get('/students')
    .then(response => {
      students = response.data;
      return students[0].id;       // 이전의 then 콜백 함수의 리턴 값이
    })                               // 다음 then 콜백 함수의 파라미터로 전달된다.
    .then(id => {
      axios.get('/students/' + id)
        .then(response => {
          student = response.data;
          console.log('test2', student);
        })
    })
}
 
export function test3(id: number) {
  let student: Student;
  axios.get('/students/' + id)
    .then(response => {
      student = response.data;
      console.log('test3', student);
    })
    .catch(error => {                // 에러가 발생하면, catch 콜백 함수가 호출된다.
      console.log('test3', error);
    })
}