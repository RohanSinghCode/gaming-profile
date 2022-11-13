import Router from "vue-router";
import Vue from 'vue';

Vue.use(Router);
import LoginLayout from '../layout/LoginLayout';
import LoginSignup from '../pages/LoginSignup'

const routes = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: LoginLayout,
      children: [
        {
          path: '/',
          name: 'Login',
          component: LoginSignup
        }
      ]
    }
  ],
});


export default routes;
