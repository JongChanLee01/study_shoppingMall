import axios from 'axios'
 
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
 
export async function test1() {
  const response0 = await axios.get('/students/1');
  const student0: Student = response0.data;
  console.log('test1', student0);
 
  const student1: Student = {...student0, name: '홍길동'};
 
  await axios.put('/students/1', student1);
  const response2 = await axios.get('/students/1');
  console.log('test1', response2.data);
 
  await axios.put('/students/1', student0);
  const response3 = await axios.get('/students/1');
  console.log('test1', response3.data);
}
 
export async function test2() {  
  const student1: Student = { id: 0, studentNo: '201014099', name: '임꺽정',
                              phone: '111', email: 'h@a.c', sex: '남', departmentId: 1 };
 
  await axios.post('/students', student1);
  const response1 = await axios.get('/students');
  const students1 = response1.data;
  const length = students1.length;
  console.log('test2', length, students1[length-1]);
 
  await axios.delete('/students/' + students1[length-1].id);
  const response2 = await axios.get('/students');
  console.log('test2', response2.data.length);
}