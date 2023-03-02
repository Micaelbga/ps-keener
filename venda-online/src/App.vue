<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

</script>

<template>
  <header>
    <NavBar/>  
  </header>

  <RouterView />
</template>

<style >

body{
  background-color: aquamarine;
}
</style>
