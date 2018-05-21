import home from './components/home/home.vue';
import detail from './components/detail/detail.vue';
import classDetail from './components/detail/classDetail.vue';
import classTeacher from './components/detail/classTeacher.vue';
import classQA from './components/detail/classQA.vue';

const routers = [
    {
        path: '/home',
        component:home,
    },
    {
        path:'/detail',
        component:detail,
        children:[
            {
                name:'classDetail',
                path:'/detail/classDetail',
                component:classDetail
            },
            {
                name:'classTeacher',
                path:'/detail/classTeacher',
                component:classTeacher
            },
            {
                name:'classQA',
                path:'/detail/classQA',
                component:classQA
            }
        ],
    }

];
export default routers;