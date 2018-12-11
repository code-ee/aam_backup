<template>
  <div class="content">
     <div class="holder">
      <h1> This is an about page </h1>
      <img src="../assets/img/narwhal.png">
      <p> {{ msg }} </p>
  </div> 
  </div>  
  
</template>

<script>
export default {
  name: 'about',
  data() {
      return {
        msg : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/About.css" scoped>

</style>
