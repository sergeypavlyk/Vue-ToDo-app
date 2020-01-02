<template>
  <div class="Todo">
    <h1 class="header">Vue todo App!</h1>
    <input type="text" class="input" placeholder="Add todo" @keyup.enter="addTodo">     
      
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="flex">
        <label>
          <input type="checkbox" v-model="todo.done">
        </label>
        <del v-if="todo.done">{{ todo.text }}</del>
        <span v-else>{{ todo.text }}</span>
        <span class="space"></span>
        <button class="remove" @click="removeTodo(todo.id)">X</button>
      </li>
    </ul>

    <button class="delete-all" @click="removeTodo(todo.done)">You can delete all checked items here</button>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    
    data: function() {
      return {
        todos: []
      };
    },

    methods: {
      addTodo({target}){
        this.todos.push({text: target.value, done: false, id: Date.now()})
        target.value = ''
      },

      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      }
    }
  }
</script>

<style scoped>
  .delete-all  {
    width: 250px;
    height: 36px;
    margin: 0 auto;
    display: none;
    margin-top: 30px;
  }

  .delete-all__visible {
    display: block;
  }

  span {
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
  }
  .space {
    flex-grow: 1;
  }

  .header {
    color: brown;
    text-align: center;
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    font-size: 24px;
  }

  .input {
    text-align: center;
    margin: 0 auto;
    display: block;
    height: 30px;
    width: 300px;
  }

  .remove {
    margin-left: 20px;
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
