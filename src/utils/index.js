import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/v1/student';

const getStudents = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response;
  } catch (error) {
    new Error(error)
  }
}

const createStudent = async (student) => {
  try {
    const response = await axios.post(apiUrl, {
      ...student
    });
    return response;
  } catch (error) {
    new Error(error)
  }
}

const updateStudent = async (student) => {
  try {
    const response = await axios.patch(`${apiUrl}/${student.id}`, {
      ...student
    });
    return response;
  } catch (error) {
    new Error(error)
  }
}

const deleteStudent = async (id) => {
  try{
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response;
  } catch (error) {
    new Error(error)
  }
};

export { getStudents, createStudent, updateStudent, deleteStudent };