<template>
  <div>
    <h1>Todoリスト</h1>
    <TodoTypeSwitcher />
    <TodoListItem />
    <TodoInputForm />
  </div>
</template>

<script>
import TodoTypeSwitcher from './components/TodoTypeSwitcher'
import TodoListItem from './components/TodoListItem'
import TodoInputForm from './components/TodoInputForm'

export default {
  components: {
    TodoTypeSwitcher,
    TodoListItem,
    TodoInputForm
  }
}
</script>
