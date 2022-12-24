<template>
    
    <div class=" d-flex  justify-content-center ">
          <div class="col-sm-5 box">
              <form @submit.prevent>
                  <h3>Update Category</h3>
                  <div class="form-group">
                      <label>Name Category</label>
                      <input type="text" v-model="name" name="name" class="form-control form-control-lg" />
                  </div>
                  <button type="submit" class="btn btn-dark btn-lg btn-block"  @click="updateCategory">Update Category</button>
              </form>
              <router-link to="/category" class="btn m-btn col-7  m-btn--hover-brand btn-success text-white m-3 ">Go To Category</router-link>
 </div>
                        <h4 class="text-white ">{{ message }}</h4> 
</div>     

  </template>
  
  <script>
  
  
      import {onMounted , ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  export default {
      name: 'AddCategory',




      data() {

return {

    Id: this.$route.params.id,
    categories: null,
    message: '',

}


      },

      mounted() {

axios
  .get('auth/show_cat/'+this.Id)
  .then(response => {
    this.categories = response.data.data
    console.log(this.categories)

  })


},
     
  methods: {
    
    updateCategory() {
      axios.post('auth/update_cat/'+this.categories.id, {
      name: this.name



      })
        .then(response => {
          console.log(response.data);
          this.message = 'The category was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

 mounted() {
    this.getCat(this.$route.params.id);
  },


},

  
  }
  
  
  
  </script>
  
  <style scoped>
  div {
      margin: 20px;
      padding: 5px;
  
  }
  
  .box {
      border-radius: 15px;
      background-color: rgb(255, 255, 255);
  
  }
  
  button {
      background-color: #616883;
      color: white;
  
  }
  
  ;
  
  button:hover {
      background-color: #828ab1 !important;
      color: rgb(5, 5, 5);
  
  }
  
  ;
  
  button {
      padding: 1.3em 3em;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
  }
  
  button:hover {
      background-color: #23c483;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
  }
  
  button:active {
      transform: translateY(-1px);
  }
  </style>