import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List Student',
    component: () => import('../components/list-student/ListStudentComponent.vue')
  },
  {
    path: '/create-student',
    name: 'Create Student',
    component: () => import('../components/create-student/CreateStudentComponent.vue')
  },
  {
    path: '/edit-student/:id',
    name: 'Edit Student',
    component: () => import('../components/edit-student/EditStudentComponent.vue')
  },
  {
    path: '/delete-student/:id',
    name: 'Delete Student',
    component: () => import('../components/delete-student/DeleteStudentComponent.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
