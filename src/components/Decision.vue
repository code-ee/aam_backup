<template>
  <div class="content">
    <div class="holder">

      <h1> {{ msg }} </h1>
      <button v-on:click="answer = makeDecision()">Make Decision</button>
      <p class="answer">{{ answer }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'decision',
  data() {
    return {
      msg: 'Click the magic button to get your answer.',
      answer: ''
    }
  },
  methods: {
    makeDecision() {
      var binary = Math.round(Math.random());
      if (binary === 1) {
        return 'yes';
      } else {
        return 'no';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/Decision.css" scoped>

</style>
