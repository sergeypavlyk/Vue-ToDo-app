<template>
  <div>
    <h1 class="header">Vue todo App!</h1>
    <input type="text" class="input" v-model="taskName" placeholder="Add todo" @keyup.enter="addTodo">     
      
    <ToDoList :todos="todos"/>

    <button class="delete-all" :class="{ 'delete-all__visible': todos.length > 1 }" @click="removeAllChecked">Delete all checked items</button>
    <p class="counter">{{todos.length}}</p>
  </div>
</template>

<script>
  import ToDoList from './TodoList'; 

  export default {
    name: 'Todo',
    components: {
      ToDoList,
    },
    data: () => {
      return {
        todos: [],
        taskName: ''
      };
    },
    methods: {
      addTodo() {
        if (this.taskName) {
          this.todos.push({ text: this.taskName, done: false })
          this.taskName = ''
        }
      },
      removeAllChecked() {
        this.todos = this.todos.filter(todo => todo.done === false)
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
    cursor: pointer;
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    font-size: 24px;
    cursor: pointer;
  }

  .delete-all__visible {
    display: block;
  }

  .header {
    color: brown;
    text-align: center;
  }

  .input {
    text-align: center;
    margin: 0 auto;
    display: block;
    height: 30px;
    width: 300px;
  }
</style>
