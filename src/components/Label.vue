<template>
  <div>
    <div v-for="label in labels" :key="label.id">
      <h1>{{ label.title }}</h1>
    </div>
    <input v-model="input" placeholder="Add Label" />
    <button @click.prevent="addLabel">Add</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState('labels', ['labels'])
  },
  created() {
    this.$store.dispatch('labels/loadLabels')
  },
  methods: {
    addLabel() {
      let payload = {
        title: this.input
      }
      this.$store.dispatch('labels/postLabel', payload)
      this.input = ''
    }
  }
}
</script>

<style scoped></style>
