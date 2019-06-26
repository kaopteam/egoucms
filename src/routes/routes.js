import login from '../page/Login.vue'
import Admin from '../page/Admin.vue'
import Reg from '../page/Reg.vue'
const routes = [
  // {
  //   path: '/',
  //   name: '默认首页',
  //   redirect: '/admin'
  // },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/Reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      // { path: '/userList', name: '用户列表', component: 'userList' }
      {
        // 文章列表单独一个组件(可以删除并且编辑，编辑的时候需要跳转到另一个路由)
        path: '/',
        redirect: '/cardManage',
        name: '默认页'
        // component: () => import('../page/content.vue')
      },
      {
        path: '/cardManage',
        name: '卡管理',
        // meta: { auth: false, scrollToTop: true },
        component: () => import('../page/admin/cardManage.vue')
      },
      {
        path: '/createCard',
        name: '卡生成',
        component: () => import('../page/admin/createCard.vue')
      },
      {
        path: '/bindingCard',
        name: '绑卡记录',
        component: () => import('../page/admin/bindingCard.vue')
      },
      {
        path: '/activationRecord',
        name: '激活记录',
        component: () => import('../page/admin/activationRecord.vue')
      },
      {
        path: '/memberManage',
        name: '会员管理',
        component: () => import('../page/admin/memberManage.vue')
      },
      {
        path: '/agentManage',
        name: '代理商管理',
        component: () => import('../page/admin/agentManage.vue')
        // children: [
        //   {
        //     path: '/creatagentManage',
        //     name: '创建代理商',
        //     component: () => import('../page/admin/agentManage.vue')
        //   }
        // ]
      },
      {
        path: '/creatAgentManage',
        name: '创建代理商',
        component: () => import('../page/admin/creatAgentManage.vue')
      },
      {
        path: '/newPromoter',
        name: '新增推广员',
        component: () => import('../page/admin/newPromoter.vue')
      },
      {
        path: '/newBusiness',
        name: '新增商家',
        component: () => import('../page/admin/newBusiness.vue')
      },
      {
        path: '/test',
        name: '创建代理商',
        component: () => import('../page/admin/test.vue')
      },
      {
        path: '/promoterManage',
        name: '推广员管理',
        component: () => import('../page/admin/promoterManage.vue')
      },
      {
        path: '/businessManage',
        name: '商家管理',
        component: () => import('../page/admin/businessManage.vue')
      },
      {
        path: '/businessInsert',
        name: '新增商家',
        component: () => import('../page/admin/businessInsert.vue')
      },
      {
        path: '/DRPSet',
        name: '分销设置',
        component: () => import('../page/admin/DRPSet.vue')
      },
      {
        path: '/DRPOrder',
        name: '分销订单',
        component: () => import('../page/admin/DRPOrder.vue')
      },
      {
        path: '/settlement',
        name: '结算记录',
        component: () => import('../page/admin/settlement.vue')
      },
      {
        path: '/DRPOrder',
        name: '分销订单',
        component: () => import('../page/admin/DRPOrder.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../page/NotFound.vue')
  }
]
// {
//   path: '/home',
//   name: 'home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'about',
//   component: () => import('../page/About.vue')
// }
export default routes
