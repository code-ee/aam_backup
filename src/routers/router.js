import Vue from 'vue';
import Router from 'vue-router';
import ToDo from '../components/ToDo.vue';
import Decision from '../components/Decision.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'toDo',
            component: ToDo
        },
        {
            path: '/decision',
            name: 'decision',
            component: Decision
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});