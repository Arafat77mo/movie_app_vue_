<template>
    <div class=" d-flex  justify-content-center ">
        <div class="col-sm-5 box">
            <form @submit.prevent="submit">
                <h3>Create Movie</h3>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" v-model="title" name="title" class="form-control form-control-lg" />
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" v-model="description" name="description" class="form-control form-control-lg" />
                </div>
                <div class="form-group">
                    <label>Rate</label>
                    <input type="number" v-model="rate" name="rate" class="form-control form-control-lg" />
                </div>
                <label>Category</label>
                <select class="form-control chosen-rtl select" name='category_id' v-model="category_id"
                    id='category_id'>
                    <option selected value="3">- Chose Category - </option>
                    <option v-for="categories in category" :key='categories.id' value='{{categories.id}}'>
                        {{ categories.name }} </option>

                </select>
                <div class="form-group">
                    <label>Image</label>
                    <input type="file"   accept="image/*"   @change="onFileChange" name="image"
                        class="form-control form-control-lg" />
                </div>
                

                <button type="submit" class="btn btn-dark btn-lg btn-block">Create User</button>

            </form>
        </div>
    </div>
</template>
  
<script>


import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useImageUpload } from "@/composables/useImageUpload.js";

export default {
    name: 'CreateMovie',

    data() {

        return {

            catogery:[],


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
                            this.catogery = res.data.data
                        })
                        .catch((error) => {
                            console.log(error.res.data);
                        });
               
            },


    setup() {
        const title = ref('');
        const description = ref('')
        const rate = ref();
        const category_id = ref();
        const router = useRouter();
        const validation = ref([]);
        const image = ref('');

        const onFileChange = (e) => {
      image.value = e.target.files[0];
    };

         const submit = async () => {
      if (!image.value) {
        alert('please fill the filed');
      } else {
        const formdata = new FormData();
        formdata.append('image', image.value);
        await axios.post(
          'http://localhost:8000/', formdata
         

        ).then(resp => {
           image = resp.data.image
           let data = {
            title: title.value,
            description: description.value,
            rate: rate.value,
            category_id: category_id.value,
            image: image.value,
             
           }
        
           axios.post('auth/store', data)
        })
        .then(() => {
          router.push({
            name: '/create/movie',
          });
        })
        .catch((error) => {
          console.log(error);
        });
      }
    };
            
            return {
                title,
                description,
                rate,
                category_id,
                onFileChange,
                submit,
                image,
                validation,
            };
       

    }

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