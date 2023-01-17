import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

// axios.interceptors.response.use((response) => {
//     if (response.headers['access-token']) {
    
//         const authHeaders = pick(response.headers, ["access-token","client","expiry","uid","token-type"])
//         store.commit('auth', authHeaders)
//         var session = VueCookies.get('session')
//         console.log(session)
//         session['tokens'] = authHeaders
//         VueCookies.set('session', JSON.stringify(session), { expires: '14D' })
//     }
//     return response

//     }, (error) => {
//         if (router.currentRoute.name !== 'signin'){
//             store.commit('user', null)
//             router.push({ name: 'signin' })
//         }
//         return Promise.reject(error)
//     })
// axios.interceptors.request.use((config) => {
//     const headers = store.getters['auth']

//     config.headers = headers
//     return config
// })


createApp(App).use(router).use(VueCookies).use(store).use(router).mount('#app')