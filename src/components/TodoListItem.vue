<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="todo in todos"
        :key="todo.id"
      >
        <td>{{ todo.id }}</td>
        <td>{{ todo.task }}</td>
        <!-- 以下２種類のbuttonの@clickについて -->
        <!-- idを付与する前の_todosを操作するため引数は(todo.id - 1) -->
        <td>
          <button @click="changeTodoStatus(todo.id - 1)">
            {{ todo.status }}
          </button>
        </td>
        <td>
          <button @click="deleteTodo(todo.id - 1)">
            削除
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  },
  methods: {
    changeTodoStatus(index) {
      this.$store.dispatch('changeTodoStatus', index)
    },
    deleteTodo(index) {
      this.$store.dispatch('deleteTodo', index)
    }
  }
}
</script>
