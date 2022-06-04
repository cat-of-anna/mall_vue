import {createRouter, createWebHashHistory} from 'vue-router'
import store from "../store";


// 2. 路由列表
const routes = [
  { meta: {
      title: "在线商城-首页",
      keepAlive: true
    },
    path: '/',
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  { meta: {
      title: "在线商城-用户登录",
      keepAlive: true
    },
    path: '/login',
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    meta: {
      title: "在线商城-用户中心",
      keepAlive: true,
      authorization: true
    },
    path: '/user',
    name: "User",
    component: () => import("../views/User.vue")
  },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

// 导航守卫
router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  // 如果，没登录
  if (to.meta.authorization &&!store.getters.getUserInfo) {
    next({"name": "Login"});
  }else{
    // 如果登录了
    next();
  }
})

export default router