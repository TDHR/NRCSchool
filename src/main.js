import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routers.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from 'axios';
import store from './store/index';
import 'jquery';

const api_root = process.env.NODE_ENV ==='production' ? '':'/api';
Vue.prototype.apiRoot = api_root;
Vue.prototype.$http = axios;
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
    },
    // beforeEach(to,from,next){
    //     if(to.meta.title){
    //         document.title = to.meta.title;
    //     }
    //     if(to.matched.some(record => record.meta.requireAuth)){
    //         if(sessionStorage.getItem('userName')){
    //             if(to.path === '/login'){
    //                 next('/home')
    //             }else {
    //                 next();
    //
    //             }
    //         }else {
    //             if(to.path === '/login'){
    //                 next();
    //             }else {
    //                 next('/login');
    //             }
    //         }
    //     }
    // }
});

router.beforeEach((to,from,next) => {
    if(to.meta.title){
        document.title = to.meta.title;
    }
    if(to.matched.some(record => record.meta.requireAuth)){
        if(sessionStorage.getItem('userName')){
            if(to.path === '/login'){
                next('/index')
            }else {
                next();

            }
        }else {
            if(to.path === '/login'){
                next();
            }else {
                next('/login');
            }
        }
    }
})
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app');
router.push('/login');
