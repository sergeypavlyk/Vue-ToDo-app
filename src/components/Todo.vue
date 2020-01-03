<template>
  <div>
    <h1 class="header">Vue todo App!</h1>
    <input type="text" :value="taskName" class="input" @input="updateTaskName" placeholder="Add todo" @keyup.enter="addTodo">     

    <ToDoList @toggle="toggle" />

    <button class="delete-all" :class="{ 'delete-all__visible': allTodos.length > 1 }" @click="removeAllChecked">Delete all checked items</button>
    <p class="counter">{{allTodos.length}}</p>
  </div>
</template>

<script>
  import ToDoList from './TodoList';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Todo',

    components: {
      ToDoList,
    },

    computed: mapGetters ([
      'allTodos',
      'taskName'
    ]),

    created() {
      this.$store.dispatch('fetchTodos')
    },

    methods: {
      updateTaskName (e) {
        this.$store.commit('updateTaskName', e.target.value)
      },

      addTodo() {
        this.$store.commit('addTodo')
      },

      toggle(id) {
        this.$store.commit('selectItem', id)
      },

      removeTodo(id) {
        this.$store.commit('removeItem', id)
      },

      removeAllChecked() {
        this.$store.commit('removeAllChecked')
      }
    }
  }
</script>

<style scoped lang="scss">
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
