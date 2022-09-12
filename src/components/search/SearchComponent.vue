<template>
<v-container>
  <v-text-field
    v-model="searchData"
    append-icon="mdi-magnify"
    :label="label"
    single-line
    hide-details
    @input="search"
  ></v-text-field>
</v-container>
</template>

<script>
export default {
  name: 'SearchComponent',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data: () => ({
    searchData: ''
  }),

  methods: {
    search() {
      this.$emit('search', this.searchData)
    }
  }

};
</script>

<style>
</style>