<template>
  <ul>
      <li v-for="(todo, i) in todos" :key="i" class="flex">
        <label>
          <input type="checkbox" v-model="todo.done">
        </label>
        <del v-if="todo.done">{{ todo.text }}</del>
        <span v-else>{{ todo.text }}</span>
        <span class="space"></span>
        <button class="remove" @click="removeItem(i)">X</button>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'ToDoList',
    props: {
      todos: Array,
      counter: Number,
      removeItem: Function
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  span {
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
  }

  .space {
    flex-grow: 1;
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    font-size: 24px;
    cursor: pointer;
  }

  .remove {
    margin-left: 20px;
    font-weight: bolder;
    cursor: pointer;
  }

  ul {
    padding: 0;
  }

  li {
    margin: 8px 0;
  }

  del {
    color: rgba(0, 0, 0, 0.3);
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
  }

  .flex {
    display: flex;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
</style>