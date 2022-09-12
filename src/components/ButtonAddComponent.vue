<template>
  <v-container>
    <v-btn small @click="add" fab dark color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "ButtonAddComponent",
  methods: {
    add() {
      this.$emit("add");
    },
  },
};
</script>

<style>
</style>