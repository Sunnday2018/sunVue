import Vue from 'vue'
import Router from 'vue-router'
/*import Index from '@/components/Index'
import Sun from '@/components/Sun'
import UploadMedia from '@/components/UploadMedia'
import Manager from '@/components/Manager'*/

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/web',
            name: 'Sun',
            component: (resolve) => require(['../components/Sun.vue'], resolve)
        },{
            path: '/',
            name: 'Index',
            component: (resolve) => require(['../components/Index.vue'], resolve)
        },{
            path: '/web/uploadMedia',
            name: 'uploadMedia',
            component: (resolve) => require(['../components/UploadMedia.vue'], resolve)
        },{
            path: '/web/manager',
            name: 'manager',
            component: (resolve) => require(['../components/Manager.vue'], resolve)
        },{
            path: '*',
            redirect: '/'
        }
    ]
})
