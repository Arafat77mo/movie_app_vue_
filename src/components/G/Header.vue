<template>
    
            <div id="nav">
            <nav class="container navbar navbar-expand-lg text-white">
              <a class="navbar-brand color mx-3 col-sm-2" >Movie <span class="nav-color">App</span> </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav"> 
                  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </a>
          <ul class="dropdown-menu dropdown-menu-light ">
            <li><router-link class="dropdown-item nav-link" to="/movie"> All Movie</router-link></li>
            <li><router-link class="dropdown-item nav-link" to="/users"> All Users</router-link></li>
            <li><router-link class="dropdown-item nav-link" to="/category"> All Catogery</router-link></li>
          </ul>
        </li>
                  <li class="nav-item">
                    <router-link to="/" class="nav-item nav-link color">Home</router-link>
                </li>
                 
                  <li class="nav-item" v-if="login">
                <a class="nav-link btn text-white"  @click="Logout">Logout</a>

                </li>
                  <li class="nav-item" v-else>
                    <router-link to="/login" class="nav-link color"  >Login</router-link>

              </li>
                <li class="nav-item">
                    <router-link to="/sign_up" class="nav-link color"  v-show="!login">Sign Up</router-link>

                </li>
               

                </ul>
              </div>
                  
              
          </nav>
           </div>
           
     
</template>

<script>
import Header from "./Header.vue";
import { useRouter } from  'vue-router';



export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter();
    const login =null;
    const Logout = () => {
      localStorage.clear();
      router.push({ path: '/login' });
    };
    return { Logout ,
    login:localStorage.getItem('token') };
  },
};
</script>

<style scoped>

    
  
router-link-exact-active {
        color: #42b983;
    }
  
div {
  background: #2a2b38 !important;
}
#nav {
  font-weight: 400;
}
.color {
  color: white;
}
.color:hover{
    color:  #616883 ;

  }
.nav-color{
    color: #616883 ;
}
</style>

