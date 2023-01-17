<template>
    <div>
        <Signup :method="signup" :errors="errors"/>
    </div>
</template>
<script>
import axios from 'axios'
import { pick } from 'lodash'
import Signup from '../UserSignUp.vue'

export default {
    data() {
        return {
            errors: [],
        }
    },
    components: {
        Signup
    },
    methods: {
        signup (email, password, password_confirmation, first_name, last_name) {
            axios.post('http://localhost:3000/admin_auth', 
                {
                    password: password, 
                    email: email, 
                    password_confirmation: password_confirmation, 
                    first_name: first_name,
                    last_name: last_name
                }, 
                {
                    withCrentials: true
                })
            .then((response) => {
                const authHeaders = pick(response.headers,
                                        ["access-token","client","expiry","uid","token-type"])
                this.$store.commit('auth', authHeaders)

                this.$store.commit('user', response.data.data)

                const contents = {
                    tokens: authHeaders,
                    user: response.data.data
                }

                this.$cookies.set('session',
                                JSON.stringify(contents),
                                { expires: '14D' })
                this.$router.push({ name: 'home' })
                console.log(response)
            }).catch(error => {
                this.errors = error.response.data.errors.full_messages
            })
        }
    }
}
</script>