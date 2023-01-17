<template>
  <NavBar/>
  <router-view :key="$route.fullPath"/>
</template>
<script>
import NavBar from '@/views/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.errors {
    color: red;
}
.form__content-wrapper {
  margin-top: 5%;
  width: 25rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FAF9F6;
  padding: 3rem;
  gap: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
.form__item {
  display: flex;
  flex-direction: column; 
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.input {
  border: none;
  height: 2.5rem;
  background: #FAF9F6;
  padding-left: 10px;
}
.button {
  margin-top: 1rem;
  height: 3rem;
  border: none;
  background: #183a1d;
  color: white;
  border-radius: 5px;
}
.form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
} 
.form__item label {
  text-align: start;
}
</style>
