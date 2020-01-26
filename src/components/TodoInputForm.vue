<template>
  <div>
    <h2>新規タスクの追加</h2>
    <input
      v-model="newTask"
      type="text"
    >
    <button @click="addTodo(newTask)">
      追加
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTodo(item) {
      this.$store.dispatch('addTodo', item)
      this.newTask = ''
    }
  }
}
</script>
