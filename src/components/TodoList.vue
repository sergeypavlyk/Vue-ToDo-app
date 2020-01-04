<template>
  <ul>
    <TodoItem  
      v-for="(todo, index) in allTodos"
      :key="index"  
      :id="todo.id"  
      :title="todo.title"
      :completed="todo.completed"
    />  
  </ul>
</template>

<script>
  import TodoItem from './TodoItem';
  import { mapGetters } from 'vuex';

  export default {
    name: 'ToDoList',

    components: { TodoItem },

    computed: mapGetters ([
      'allTodos'
    ])
  }
</script>

<style scoped>
  ul {
    padding: 0;
  }
</style>