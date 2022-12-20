
<template>
    
    <div id="m_table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer container text-black my-5 d-flex  justify-content-center ">
                <div class="row">
                    <div class="col-sm-12">
                      
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>BirthDay</th>
                                    <th>created at</th>
                                    <th>Option</th>

                                    
                                </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd" v-for="user in users" :key="user.id">
                                        <td width="5%" class=" dt-right" tabindex="0">
                                            <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">
                                                <input type="checkbox" value="" class="m-checkable">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td
                      class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                    >
                      {{ user.id }}
                    </td>
                    <td class=" ">
                      {{ user.name }}
                    </td>
                    <td class=" ">
                      {{ user.email }}
                    </td>
                    <td class=" ">
                      {{ user.birthdate}}
                    </td>
                    <td class=" ">
                      {{ user.created_at }}
                    </td>
                                        <td width="15%">


                                           
                                                <router-link to="/create/users" class="btn m-btn m-btn--hover-brand btn-info text-white">+ Add</router-link>
                                            
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
import sidbar from '@/components/G/sidbar.vue'

export default {
    components:{
        sidbar
    },
  setup() {
    // reactive state
    let users = ref([]);
    // mounted
    onMounted(() => {
      // get api from laravel backend
      axios
        .get('/auth/users')
        .then((res) => {
          console.log(res.data.data);

          // assign state users with response data
          users.value = res.data.data;
        })
        .catch((error) => {
          console.log(error.res.data);
        });
    });

    return {
      users
    };
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