import {createRouter, createWebHashHistory} from 'vue-router'


// 2. 路由列表
const routes = [
  { meta: {
      title: "在线商城-首页",
      keepAlive: true
    },
    path: '/',
    component: () => import("../views/Home.vue")
  },
  { meta: {
      title: "在线商城-用户登录",
      keepAlive: true
    },
    path: '/login',
    component: () => import("../views/Login.vue")
  },
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

export default router