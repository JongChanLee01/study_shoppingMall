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
  const response = await axios.get('/students');
  const students: Student[] = response.data;
  console.log('test1', students);
}
 
export async function test2() {
  const response = await axios.get('/students');
  const students: Student[] = response.data;
  const id: number = students[0].id;
  const student: Student = await axios.get('/students/' + id);
  console.log('test2', student);
}
 
export async function test3(id: number) {
  try {
    const response = await axios.get('/students/' + id);
    const student: Student = response.data;
    console.log('test3', student);
  }
  catch (error) {
      console.log('test3', error);
  }
}