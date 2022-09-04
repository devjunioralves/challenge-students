<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="9">
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Digite sua busca"
                single-line
                hide-details
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" to="/create-student" fab dark color="indigo">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="students"
              :search="search"
              sort-by="ra"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Registro Acadêmico",
        value: "ra",
      },
      { text: "Nome", value: "name" },
      { text: "CPF", value: "cpf" },
      { text: "Ações", value: "actions", filterable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      ra: "",
      name: "",
      cpf: "",
    },
    defaultItem: {
      ra: "",
      name: "",
      cpf: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.students = [
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
        {
          ra: 12345,
          name: "Student Name",
          cpf: "123.123.123-12",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
      } else {
        this.students.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>