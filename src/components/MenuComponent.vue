<template>
  <v-container style="height: 100vh">
    <v-card height="100%" :width="width">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Desafio </v-list-item-title>
            <v-list-item-subtitle> Portal de estudantes </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link @click="reloadPage">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "MenuComponent",
  props: {
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [{ title: "Alunos", icon: "mdi-account-circle" }],
      right: null,
    };
  },

  methods: {
    reloadPage() {
      this.$router.go()
    },
  }
};
</script>