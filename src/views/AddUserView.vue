<template>
  <div class=" d-flex  justify-content-center ">
        <div class="col-sm-5 box">
            <form @submit.prevent="submit">
                <h3>Create User</h3>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" v-model="name" name="name" class="form-control form-control-lg" />
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" v-model="email" name="email" class="form-control form-control-lg" />
                </div>
                <div class="form-group">
                    <label>Birthday</label>
                    <input type="date" v-model="birthdate" name="birthdate" class="form-control form-control-lg" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="password" name="password" class="form-control form-control-lg" />
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
export default {
    name: 'AddUser',
    setup() {
        const name = ref('');
        const email = ref('')
        const birthdate = ref('');
        const password = ref('');
        const router = useRouter();
        const validation = ref([]);

        const submit = async () => {
            await axios
                .post('/auth/creat_user', {
                    name: name.value,
                    email: email.value,
                    birthdate: birthdate.value,
                    password: password.value,
                })
                .then(() => {
                    router.push({ path: '/users' });
                })
                .catch((error) => {
                    validation.value = error.response.data;
                });
        };
        return {
            name,
            email,
            birthdate,
            password,
            submit,
            validation,
        };
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