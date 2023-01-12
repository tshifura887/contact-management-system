<template>
    <div>
        <h1>Sign in</h1>
        <form >
            <div>
                <label><b>Email</b></label>
                <input type="text" v-model="email" placeholder="enter email">
            </div>
            <div>
                <label><b>Password</b></label>
                <input type="password" v-model="password" placeholder="Enter password">
            </div>
            <div>
                <label><b>Password Confirmation</b></label>
                <input type="password" v-model="password" placeholder="Enter password">
            </div>
            <button type="submit" v-on:click="signup">SignUp</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: "",
            password_confirmation: ""
        }
    },
    methods: {
        signup ()  {
           axios.post('http://localhost:3000/auth/sign_in', 
           {
            email: this.email,
            password: this.password
           }).then(response => {
            console.log(response.data)
           })
        }
    }
}
</script>