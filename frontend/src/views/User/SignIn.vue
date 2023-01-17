<template>
    <Signin :method="signin" :errors="errors"/>
</template>
<script>
import Signin from '../UserSignIn.vue'
import axios from 'axios'
import { pick } from 'lodash'
export default {
    data () {
        return {
            errors: []
        }
    },
    components : {
        Signin
    },
    methods: {
        signin (email, password) {
            axios.post('http://localhost:3000/auth/sign_in', { email: email, password: password }, {withCrentials: true})
            .then((response) => {
                const authHeaders = pick(response.headers,
                                        ["access-token","client","expiry","uid","token-type"])
                this.$store.commit('auth', authHeaders)

                this.$store.commit('user', response.data.data)
                this.$store.commit('setAuthentication', true)
                const contents = {
                    tokens: authHeaders,
                    user: response.data.data
                }
                this.$cookies.set('session',
                                JSON.stringify(contents),
                                { expires: 60 * 5})
                this.$router.push({ name: 'home' })
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>