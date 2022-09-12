import * as api from '../../utils';

const state = () => ({
  students: [],
  student: {},
  error: '',
  statusCode: ''
})

const mutations = {
  setStudents(state, students) {
    state.students = students;
  },

  createNewStudent: (state, student) => {
    state.student.unshift(student)
  },

  updateStudent: (state, student) => {
    state.students.unshift(student)
  },

  deleteStudent: (state, student) => {
    state.statusCode = student.status
  },

  error(state, data) {
    return state.error = data
  },
}

const getters = {
  studentList: state => state.students,
  student: state => state.student,
  error: state => state.error
};

const actions = {
  getStudents({ commit}) {
    api
      .getStudents()
      .then(response => {
        commit('setStudents', response.data)
      }).catch(error => {
        commit('error', error)
      })
  },

  createStudent({ commit }, student) {
    api
      .createStudent(student)
      .then(response => {
        commit('createNewStudent', response.data)
      }).catch(error => {
        commit('error', error)
      })
  },

  updateStudent({ commit }, student) {
    api
      .updateStudent(student)
      .then(response => {
        commit('updateStudent', response.data)
      }).catch(error => {
        commit('error', error)
      })
  },

  deleteStudent({ commit }, id) {
    api
      .deleteStudent(id)
      .then(response => {
        commit('deleteStudent', response.data)
      }).catch(error => {
        commit('error', error)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}