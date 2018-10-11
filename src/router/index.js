import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '/login',
  component: () =>
      import('@/views/login/index'),
  hidden: true
},
{
  path: '/authredirect',
  component: () =>
      import('@/views/login/authredirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
      import('@/views/errorPage/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
      import('@/views/errorPage/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  hidden: true,
  redirect: '/dashboard/index'
},
{
  path: '/dashboard',
  component: Layout,
  redirect: '/dashboard/index',
  children: [{
    path: 'index',
    name: 'dashboard',
    meta: {
      title: 'dashboard',
      icon: 'sides'
    },
    component: () =>
        import('@/views/dashboard/index')
  }]
},

{
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: 'example',
  meta: {
    title: 'example',
    icon: 'archives'
  },
  children: [{
    path: 'table',
    name: 'table',
    component: () =>
          import('@/views/table/index'),
    meta: {
      title: 'Table',
      icon: 'tasks'
    }
  },
  {
    path: 'tree',
    name: 'tree',
    component: () =>
          import('@/views/tree/index'),
    meta: {
      title: 'tree',
      icon: 'posts'
    }
  },
  {
    path: 'chartTable',
    name: 'chartTable',
    component: () =>
          import('@/views/chartTable/index'),
    meta: {
      title: 'chartTable',
      icon: 'posts'
    }
  },
  {
    path: 'tabsTable',
    name: 'tabsTable',
    component: () =>
          import('@/views/tabsTable/index'),
    meta: {
      title: 'tabsTable',
      icon: 'posts'
    }
  },
  {
    path: 'tabs',
    name: 'tabs',
    component: () =>
      import('@/views/tabs/index'),
    meta: {
      title: 'tabs',
      icon: 'posts'
    }
  }
  ]
},

{
  path: '/form',
  component: Layout,
  children: [{
    path: 'index',
    name: 'form',
    component: () =>
        import('@/views/form/index'),
    meta: {
      title: 'form',
      icon: 'eventLog'
    }
  }]
},

{
  path: '/charts',
  component: Layout,
  children: [{
    path: 'index',
    name: 'echarts',
    component: () =>
        import('@/views/echarts/index'),
    meta: {
      title: 'echarts',
      icon: 'data'
    }
  }]
},

{
  path: '/dialog',
  component: Layout,
  children: [{
    path: 'index',
    name: 'dialog',
    component: () =>
        import('@/views/dialog/index'),
    meta: {
      title: 'dialog',
      icon: 'data'
    }
  }]
},
{
  path: '/slot',
  component: Layout,
  children: [{
    path: 'index',
    name: 'slot',
    component: () =>
        import('@/views/slot/index'),
    meta: {
      title: 'slot',
      icon: 'data'
    }
  }]
},
{
  path: '/transition',
  component: Layout,
  children: [{
    path: 'index',
    name: 'transition',
    component: () =>
        import('@/views/transition/index'),
    meta: {
      title: 'transition',
      icon: 'data'
    }
  }]
},
{
  path: '/characteristic',
  component: Layout,
  children: [{
    path: 'index',
    name: 'characteristic',
    component: () =>
      import('@/views/vueCharacteristic/index'),
    meta: {
      title: 'characteristic',
      icon: 'data'
    }
  }]
},
{
  path: '/iscroll',
  component: Layout,
  children: [{
    path: 'index',
    name: 'iscroll',
    component: () =>
      import('@/views/iscroll/index'),
    meta: {
      title: 'iscroll',
      icon: 'data'
    }
  }]
}
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

]
