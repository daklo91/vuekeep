<template>
  <div>
    <div v-for="(label, index) in labels" :key="label.id">
      <h1>{{ label.title }}</h1>
      <button v-on:click="deleteLabel(label.id, index)">
        DELETE
      </button>
      <input
        ref="input"
        :value="label.title"
        @keyup.enter="renameLabel($event.target.value, label.id, index)"
      />
      <button
        @click.prevent="renameLabel($refs.input[index].value, label.id, index)"
      >
        EDIT
      </button>
    </div>
    <input @keyup.enter="addLabel" v-model="input" placeholder="Add Label" />
    <button @click.prevent="addLabel">Add</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      input: '',
      rename: ''
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
        title: this.input,
        id: Math.floor(Math.random() * 10000000)
      }
      if (payload.title !== '') {
        this.$store.dispatch('labels/postLabel', payload)
      }
      this.input = ''
    },
    deleteLabel(id, index) {
      let payload = { id, index }
      this.$store.dispatch('labels/deleteLabel', payload)
    },
    renameLabel(e, id, index) {
      let newTitle = e
      let payload = { newTitle, id, index }
      this.$store.dispatch('labels/renameLabel', payload)
      this.rename = ''
    }
  }
}
</script>

<style scoped></style>
