<template>
  <li class="flex">
    <label>
      <input type="checkbox" @change="$emit('toggle')" :checked="completed">
    </label>
    <span :class="{'throught': completed }">{{ title }}</span>
    <span class="space"></span>
    <button class="remove" @click="$emit('removeItem')">X</button>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todos: Array,
      removeItem: Function,
      title: String,
      completed: Boolean,
    },
  }
</script>

<style scoped>
  span {
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
  }

  .throught {
    text-decoration: line-through;
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