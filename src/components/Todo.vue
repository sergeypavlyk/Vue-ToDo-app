<template>
  <div>
    <h1 class="header">Vue todo App!</h1>
    <input type="text" class="input" v-model="taskName" placeholder="Add todo" @keyup.enter="addTodo">     
      
    <ToDoList :removeItem="removeTodo" :todos="todos" :counter="counter"/>

    <button class="delete-all" :class="{ 'delete-all__visible': todos.length > 1 }" @click="removeAllChecked">Delete all checked items</button>
    <p class="counter">{{counter}}</p>
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
        taskName: '',
        counter: 0,
      };
    },
    methods: {
      removeTodo(i) {
        const index = this.todos.indexOf(i)
        this.todos.splice(index - 1, 1)
        this.counter = this.todos.length
      },
      
      addTodo() {
        this.todos.push({ text: this.taskName, done: false })
        this.counter = this.todos.length
      },
      removeAllChecked() {
        this.todos = this.todos.filter(todo => todo.done === false)
        this.counter = this.todos.length
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
