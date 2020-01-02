<template>
  <ul>
    <TodoItem @removeItem="removeTodo" :todos="todos"/>  
  </ul>
</template>

<script>
  import TodoItem from './TodoItem';

  export default {
    name: 'ToDoList',
    components: { TodoItem },
    props: {
      todos: Array,
      removeItem: Function
    },
    methods: {
      removeTodo(i) {
        const index = this.todos.indexOf(i)
        this.todos.splice(index - 1, 1)
      }
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
  }
</style>