import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router';
Vue.use(VueRouter);

new Vue({
    router,
    vuetify,
    render: h => h(App),
    components: { App }
}).$mount('#app')
