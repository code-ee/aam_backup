<template>
  <div class="container">
    <div class="holder">

      <form @submit.prevent="addTask">
        <input type="text" placeholder="Enter something you have to do." v-model="task" v-validate="'min:4'" name="task">

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('task')">{{ errors.first('task') }}</p>
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="task in tasks" :key='task.id'>{{ task.description }}
            <i class="fa fa-minus-circle" v-on:click="remove(task)"></i>
          </li>
        </transition-group>
      </ul> 

      <p> These are the tasks on your to-do list.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toDo',
  data() {
    return {
      task: '',
      tasks: [
        {
          'id': 0,
          'description': 'Kiss Boyfriend'
        },
        {
          'id': 1,
          'description': 'Get Fruit'
        },
        {
          'id': 2,
          'description': 'Smoke Weed'
        }
      ]
    }
  },
  methods: {
    addTask() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.id = this.tasks.length;
          this.tasks.push(
            {
              'id': this.id,
              'description': this.task
            }
          );
          this.id = this.tasks.length;
          this.task = '';
        } else {
          console.log('Not Valid');
        }
      });
    },
    remove(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/ToDo.css" scoped>

</style>
