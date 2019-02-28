import home from './components/home/home.vue';
import detail from './components/detail/detail.vue';
import classDetail from './components/detail/classDetail.vue';
import classTeacher from './components/detail/classTeacher.vue';
import classQA from './components/detail/classQA.vue';
import login from './components/login/login.vue';
import index from './components/index/index.vue';
import customs from './components/customs/customs.vue';
import distribution from './components/distribution/distribution.vue';
import write from './components/write/write.vue';
import declare from './components/declare/declare.vue';

const routers = [

    {
        path: '/home',
        component:home,
        meta:{
            requireAuth:true,
            title:'test'
        }
    },
    {
        path:'/login',
        component:login,
        meta:{
            requireAuth:true
        }
    },
    {
        path:'/index',
        component:index,
        meta:{
            requireAuth:true
        }
    },
    {
        path:'/customs',
        component:customs,
        meta:{
            requireAuth:true
        }
    },
    {
        path:'/distribution',
        name:'distribution',
        component:distribution,
        meta:{
            requireAuth:true
        }
    },
    {
      path:'/write',
      name:'write',
      component:write,
      meta:{
          requireAuth:true
      }
    },
    {
        path:'/declare',
        component:declare,
        meta:{
            requireAuth:true
        }
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