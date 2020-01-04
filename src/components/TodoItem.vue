<template>
  <li class="flex">
    <label>
      <input type="checkbox" @change="selectItem(id)" :checked="completed">
    </label>
    <span :class="{'throught': completed }">{{ title }}</span>
    <span class="space"></span>
    <button class="remove" @click="removeItem(id)">X</button>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',

    props: {
      todos: Array,
      title: String,
      completed: Boolean,
      id: Number,
    },

    methods: {
      removeItem(id) {
        this.$store.commit('removeItem', id)
      },

      selectItem(id) {
        this.$store.commit('selectItem', id)
      }
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

  label {
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 30px
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
    margin: 15px auto;
    justify-content: center;
    align-items: center
  }
</style>