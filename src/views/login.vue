<template>
    <div class=" d-flex  justify-content-center ">

        <div class="vue-tempalte  box col-sm-5">
            <form @submit.prevent="submit">
                <h3>Sign In</h3>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" v-model="email" class="form-control " />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" v-model="password" class="form-control " />
                </div>
                <button type="submit" class="btn  btn-lg btn-block">Sign In</button>



            </form>
        </div>
    </div>

</template>
<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        const submit = async () => {
            const response = await axios.post('/login', {
                email: email.value,
                password: password.value,
            });
            localStorage.setItem('token', response.data.user.token);
            localStorage.setItem('LoggedUser',JSON.stringify(response.data.user) );

            await router.push({ path: '/' });
        };

        return {
            email,
            password,
            submit,
        };
    }
}
</script>
<style scoped>
div {
    margin: 30px;
}

.box {

    padding: 50px;
    border-radius: 20px;

    font-weight: 400;

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