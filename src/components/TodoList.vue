<template>
  <ul>
    <TodoItem  
      v-for="todo in todos" 
      @removeItem="$emit('remove', todo.id)"
      @toggle="$emit('toggle', todo.id)"
      :key="todo.id"  
      :id="todo.id"  
      :title="todo.title"
      :completed="todo.completed"
    />  
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

    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
  }
</style>