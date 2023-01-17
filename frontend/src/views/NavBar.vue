<template>
    <nav class="navbar">
        <router-link to="/">Home</router-link>
        <div>Search bar</div>
        <div v-if="$route.path == '/'">
            <router-link to="/user/signup"><font-awesome-icon :icon="['fa', 'fa-user']"/> Signin / Register</router-link>
        </div>
    </nav>
</template>
<script>
import axios from 'axios'

export default {
    name: 'NavBar',
    components: {
      
    },
    methods: {
        logout () {
            axios.delete('http://localhost:3000/auth/sign_out', 
                {
                    headers:  this.$cookies.get('session').tokens
                }, 
                {
                    withCrentials: true
                }
            )
        }
    }
}
</script>
<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}
</style>