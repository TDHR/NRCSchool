import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routers.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
const router = new VueRouter({

    mode: 'history',
    routes,
    scrollBehavior(to,from,savePosition){
        if(savePosition){
            return savePosition;
        }else {
            return {x:0,y:0};
        }
    }
});


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app');
router.push('/home');
