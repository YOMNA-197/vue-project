import { auth } from '@/firebase/config'
import HomeView from '@/Views/HomeView.vue'
import LoginView from '@/Views/LoginView.vue'
import RegisterView from '@/Views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'login',
      path:'/login',
      component:LoginView,
      meta:{
        requireAuth: false
      }
    },
    {
      name:'register',
      path:'/register',
      component:RegisterView,
      meta:{
        requireAuth: false
      }
    },
    {
      name:'home',
      path:'/home',
      component:HomeView,
      meta:{
        requireAuth: true
      }
    },
  ],
})

router.beforeEach((to,from,next)=>{
  const user = auth.currentUser;
  if(to.meta.requireAuth && !user){
    next('/login')
  }
  else{
    next()
  }

});

export default router
