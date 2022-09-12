<template>
  <v-container style="height:100%">
    <v-card :width="width" style="height:85vh%">
      <v-data-table
        height="100%"
        :headers="headers"
        :items="items"
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
  </v-container>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    height:{
      type: String,
      required: true,
    },
    width:{
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
  },
  methods: {
    editItem(item) {
      this.$emit("edit", item);
    },

    deleteItem(item) {
      this.$emit("delete", item);
    },
  },
};
</script>

<style>
</style>