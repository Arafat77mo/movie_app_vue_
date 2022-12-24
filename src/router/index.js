import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginview from '../views/login'
import SignUpView from '../views/SignUpView'
import dasgoboardView from  '../views/DashboardView.vue'
import UsersVue from '../views/UsersVue'
import AddUser from '../views/AddUserView' 
import CreateMovie from '../views/CreateMovieView'
import Movie from '../views/ViewMovie'
import UpdateCaregory from '../views/UpdateCaregory'
import CreateCategory from '../views/CreateCategory.vue'
import Category from '../views/ViewCategory.vue'

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;

if(localStorage.getItem('LoggedUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}
const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter : guardMyroute,

    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginview
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    beforeEnter : guardMyroute,

    component:dasgoboardView
  },
  {
    path: '/users',
    name: 'UsersVue',
    beforeEnter : guardMyroute,

    component:UsersVue
  },
  {
    path: '/create/users',
    name: 'AddUser',
    beforeEnter : guardMyroute,

    component:AddUser
  },
  {
    path: '/create/movie',
    name: 'CreateMovie',
    beforeEnter : guardMyroute,

    component:CreateMovie
  },
  {
    path: '/movie',
    name: 'ViewMovie',
    beforeEnter : guardMyroute,

    component:Movie
  },
  {
    path: '/update/category/:id',
    name: 'UpdateCategory',
    beforeEnter : guardMyroute,

    component:UpdateCaregory
  },
  {
    path: '/create/category',
    name: 'CreateCategory',
    beforeEnter : guardMyroute,

    component:CreateCategory
  },
  {
    path: '/category',
    name: 'ViewCategory',
    beforeEnter : guardMyroute,

    component:Category
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
