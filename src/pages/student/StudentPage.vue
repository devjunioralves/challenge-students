<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <v-row
        >
          <v-col
            cols="3"
            class="mr-0"
            height="100vh"
          >
            <MenuComponent
              height="100vh"
              width="250"
            />
          </v-col>
          <v-col
          cols="9"
          height="100vh"
          >
            <v-row v-if="!isEdit && !isCreate" class="d-flex align-end" height="100px">
              <v-col
              cols="8">
                <SearchComponent
                :label="searchLabel"
                v-on:search="search"
                />
              </v-col>
              <v-col
                cols="1"
                md="2" offset-md="2"
              >
                <ButtonAddComponent
                v-on:add="addStudent"
                />
              </v-col>
            </v-row>
            <v-row
            :style="{height:'calc(100vh - 100px)'}">
              <v-col cols="12" height="100vh">
                <ListComponent
                  v-if="!isEdit && !isCreate"
                  width="max-width"
                  height="max-height"
                  :items="studentList"
                  :search="searchText"
                  :headers="listHeaders"
                  v-on:edit="edit"
                  v-on:delete="deleteItem"
                />
                <FormComponent
                  v-else
                  width="max-width"
                  height="576"
                  :fields="fields"
                  :formData="studentData"
                  :isEdit="isEdit"
                  v-on:submit="submit"
                />
              </v-col>
            </v-row>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import MenuComponent from '@/components/MenuComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import ListComponent from '@/components/ListComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import ButtonAddComponent from '@/components/ButtonAddComponent.vue'

import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'StudentPage',
  components: { MenuComponent, SearchComponent, ListComponent,FormComponent, ButtonAddComponent },

  data: () => ({
    isEdit: false,
    studentData: {},
    isCreate: false,
    searchLabel: 'Digite sua busca',
    searchText: '',
    listHeaders: [
      {
        text: "Registro Acadêmico",
        value: "ra",
      },
      { text: "Nome", value: "name" },
      { text: "CPF", value: "cpf" },
      { text: "Ações", value: "actions", filterable: false },
    ],
    fields: [
      { key: "ra", label: "Registro Acadêmico", counter: 8, rules: 'required', required: true, mask: '########' },
      { key: "name", label: "Nome", counter: 50 ,rules: 'required', required: true },
      { key: "cpf", label: "CPF", rules: {
        required: true,
        regex: '[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'
      }, required: true, mask: "###.###.###-##", counter: 14 },
      { key: "email", label: "Email", rules: 'required', required: true },
    ]
  }),

  created() {
    this.getStudents();
  },

  computed:{
    ...mapState('students', ['students', 'error']),
    ...mapGetters('students', ['studentList', 'student', 'error'])
  },

  methods: {
    ...mapActions('students', ['getStudents', 'createStudent', 'updateStudent', 'deleteStudent']),

    search(data) {
      this.searchText = data;
    },

    async submit(student) {
      const action = this.isEdit ? 'atualizado' : 'cadastrado'
      if (this.isEdit) {
        this.updateStudent(student)
      } else {
        this.createStudent(student)
      }
      if(!this.error){
        await this.$swal({
          title: 'Sucesso!',
          text: `Aluno ${action} com sucesso!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else {
        await this.$swal({
          title: 'Erro!',
          text: `Aluno não foi ${action}!`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      
      this.getStudents()
      this.$router.go()
    },

    edit(student) {
      this.studentData = student
      this.isCreate = true
      this.isEdit = true
    },

    async deleteItem(item){
      const {id} = item
      this.deleteStudent(id)

      if (!this.error){
        await this.$swal({
          title: 'Sucesso!',
          text: `Aluno excluído com sucesso!`,
          icon: 'success',
          confirmButtonText: 'Ok',
          timer: 2000
        })
      } else {
        await this.$swal({
          title: 'Erro!',
          text: `Houve um erro ao excluir o aluno!`,
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
      this.$router.go()
    },

    addStudent(){
      this.isCreate = true
    }
  }
}
</script>