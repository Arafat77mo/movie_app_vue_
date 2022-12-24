
<template>
    
    <div id="m_table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer container text-black my-5 d-flex  justify-content-center ">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="d-flex  justify-content-end "><router-link to="/create/category" class="btn m-btn col-3  m-btn--hover-brand btn-success text-white m-3 ">Create Category</router-link>
</div>

                            <table
                                class="table table-striped- bg-white  table-bordered table-hover table-checkable dataTable no-footer dtr-inline"
                                id="m_table_1" role="grid" aria-describedby="m_table_1_info" style="width: 1150px;">
                                <thead>
                                <tr role="row">
                                    <th>
                                        <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">
                                            <input type="checkbox" value="" class="m-group-checkable">
                                            <span></span>
                                        </label>
                                    </th>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>Option</th>

                                    
                                </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd" v-for="category in categories" :key="category.id">
                                        <td width="5%" class=" dt-right" tabindex="0">
                                            <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">
                                                <input type="checkbox" value="" class="m-checkable">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td
                      class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                    >
                      {{ category.id }}
                    </td>
                    <td class=" ">
                      {{ category.name }}
                    </td>
                   
                                        <td width="15%">


                                           
                                                <a          :href="'/update/category/'+category.id" class="btn m-btn m-btn--hover-brand btn-info text-white me-2">Update</a>
                                            <a      @click="deleteCat(category.id)" class="btn m-btn m-btn--hover-brand btn-danger text-white">Delet</a>

                                        </td>
                                        
                                    </tr>
                                
                                </tbody>
                            </table>
                    </div>
                </div>

    </div>
  </template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Alert } from 'bootstrap';

export default {

 data() {

return {

    categories:[],


}
 },   
    methods:{

        deleteCat(id) {
            alert('are you sure to delet')
            axios.post('auth/destroy_cat/'+id)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },


    
 



// mounted
mounted(){
            // get api from laravel backend
            axios
                .get('/auth/category')
                .then((res) => {
                    console.log(res.data.data);

                    // assign state catogery with response data
                    this.categories = res.data.data
                })
                .catch((error) => {
                    console.log(error.res.data);
                });
       
    },

};
</script>
<style scoped>
.table,.r{
    border-radius: 10px;
}
.table-bordered{
  border-radius: 10px !important;

} 
</style>