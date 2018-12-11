<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/decision">Decision</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>

<style src='./assets/css/App.css'>
</style>
