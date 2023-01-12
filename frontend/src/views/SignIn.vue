<template>
    <div>
        <h1>Sign in</h1>
        <form >
                <label><b>Email</b></label>
                <input type="text" v-model="email" placeholder="enter email">
                <label><b>Password</b></label>
                <input type="password" v-model="password" placeholder="Enter password">
                <button type="submit" v-on:click="login">SignIn</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login ()  {
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