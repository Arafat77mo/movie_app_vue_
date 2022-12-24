
<template>
    
    <div id="m_table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer container text-black my-5 d-flex  justify-content-center ">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="d-flex  justify-content-end "><router-link to="/create/movie" class="btn m-btn col-3  m-btn--hover-brand btn-success text-white m-3 ">Add Movie</router-link>
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
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Option</th>

                                    
                                </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" class="odd" v-for="movie in movies" :key="movie.id">
                                        <td width="5%" class=" dt-right" tabindex="0">
                                            <label class="m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand">
                                                <input type="checkbox" value="" class="m-checkable">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td
                      class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                    >
                      {{ movie.id }}
                    </td>
                    <td class=" ">
                      {{ movie.title }}
                    </td>
                    <td class=" ">
                      {{ movie.description}}
                    </td>
                    <td class=" ">
                      {{ movie.rate}}
                    </td>
                    <td class=" ">
                      {{ movie.name }}
                    </td>
                    <td class=" " >
                        <img v-bind:src="url + movie.image" alt="" class="img-fluid image mt-1">
                    </td>
                                        <td width="15%">


                                            <router-link to="/update/movie/+{{movie.id}}" class="btn m-btn m-btn--hover-brand btn-info text-white me-2">Update</router-link>
                                            <a      @click="deleteMovie(movie.id)" class="btn m-btn m-btn--hover-brand btn-danger text-white">Delet</a>

                                           
                                            
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

export default {
    
    
  setup() {
    // reactive state
    let movies = ref([]);
    // mounted
    onMounted(() => {
      // get api from laravel backend
      axios
        .get('/auth/movies')
        .then((res) => {
          console.log(res.data.data);

          // assign state movies with response data
          movies.value = res.data.data;
        })
        .catch((error) => {
          console.log(error.res.data);
        });
    });

    return {
      movies,
      url: 'http://localhost:8000/public/',
    };
  },
  methods:{

deleteMovie(id) {
    alert('are you sure to delet')
    axios.post('auth/destroy/'+id)
.then(response => {
  console.log(response.data);
})
.catch(e => {
  console.log(e);
});
}
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