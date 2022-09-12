import axios from 'axios';

const getStudents = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/student');
    return response;
  } catch (error) {
    new Error(error)
  }
}

const createStudent = async (student) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/student', {
      ...student
    });
    return response;
  } catch (error) {
    new Error(error)
  }
}

const updateStudent = async (student) => {
  try {
    const response = await axios.patch(`http://localhost:3000/api/v1/student/${student.id}`, {
      ...student
    });
    return response;
  } catch (error) {
    new Error(error)
  }
}

const deleteStudent = async (id) => {
  try{
    const response = await axios.delete(`http://localhost:3000/api/v1/student/${id}`);
    return response;
  } catch (error) {
    new Error(error)
  }
};

export { getStudents, createStudent, updateStudent, deleteStudent };