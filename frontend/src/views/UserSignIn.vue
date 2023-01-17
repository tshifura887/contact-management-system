<template>
    <div class="signin form__wrapper">
        <div class="form__content-wrapper">
            <h3>Sign in with your email</h3>
            <div v-for="error in errors" :key="error" class="errors">
            {{ error }}
            </div>
            <form  @submit.prevent="mounted" class="form">
                <div class="form__item">
                    <input type="text" v-model="email" placeholder="Email address" class="input">
                </div>
                <div class="form__item">
                    <input type="password" v-model="password" placeholder="Password" class="input">
                </div>
                <button class="button" type="submit">Sign In</button>
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
        }
    },
    props: {
        method: {type: Function},
        errors: {type: Array}
    },
    methods: {
        mounted () {
            this.method(this.email, this.password)
        }
    } 
}
</script>