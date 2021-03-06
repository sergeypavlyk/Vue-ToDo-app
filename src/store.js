import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskName: '',
    todos: [],
  },

  strict: true,

  getters: {
    taskName: ({ taskName }) => taskName,
    allTodos: ({ todos }) => todos,
  },

  mutations: {
    updateTaskName (state, newTaskName) {
      state.taskName = newTaskName
    },

    addTodo (state) {
      if (state.taskName !== '') {
        state.todos.push({ title: state.taskName, completed: false, id: state.todos.length + 1 })
      }
      state.taskName = ''
    },

    selectItem ({todos}, id) {
      const index = todos.findIndex(item => item.id === id);
      const oldItem = todos[index];
      todos.splice(index, 1,  { ...oldItem, completed: !oldItem.completed })
    },

    removeItem ({todos}, id) {
      const index = todos.findIndex(item => item.id === id);
      todos.splice(index, 1)
    },

    removeAllChecked (state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    },

    setTodos (state, fetchedTodos) {
      state.todos = fetchedTodos
    }
  },

  actions: {
    fetchTodos ({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(todos => {
          const firstTen = todos.splice(0, 10)
          commit('setTodos', firstTen)
        })
    }
  }
})
