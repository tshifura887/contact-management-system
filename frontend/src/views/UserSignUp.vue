<template>
    <div class="signup form__wrapper">
        <div class="form__content-wrapper">
            <h1>Sign Up</h1>
            <p>Already have an account? <router-link to="/user/signin">Sign In</router-link></p>
            <div v-for="error in errors" :key="error" class="errors">
                {{ error }}
            </div>
            <form  @submit.prevent="mounted" class="form">
                <div class="form__item">
                    <label>First Name</label>
                    <input type="text" v-model="first_name" class="input">
                </div>
                <div class="form__item">
                    <label>Last Name</label>
                    <input type="text" v-model="last_name" class="input">
                </div>
                <div class="form__item">
                    <label>Email</label>
                    <input type="text" v-model="email" class="input">
                </div>
                <div class="form__item">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="input">
                </div>
                <div class="form__item">
                    <label for="password_confirmation">Password Confirmation</label>
                    <input type="password" v-model="password_confirmation" class="input">
                </div>
                <button class="button" type="submit">Create Account</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            password_confirmation: "",
            first_name: "",
            last_name: ""
        }
    },
    props: {
        method: {type: Function},
        errors: {type: Array}
    }, 
    methods: {
        mounted () {
            this.method(this.email, this.password, this.password_confirmation, this.first_name, this.last_name)
        }
    }
}
</script>
