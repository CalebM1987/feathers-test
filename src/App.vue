<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { restClient } from '@/api';
import { user } from '@/store';
import Login from '@/views/Login.vue';
import CurrentUser from '@/views/CurrentUser.vue';


const leftDrawerOpen = ref(false)
const toggleLeftDrawer = ()=> leftDrawerOpen.value = !leftDrawerOpen.value
onMounted(()=> setTimeout(()=> leftDrawerOpen.value = false, 250))
</script>

<template>
  <q-layout view="hHh lpR fFf">

<q-header elevated class="bg-primary text-white">
  <q-toolbar>
    <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      Feathers Test
    </q-toolbar-title>
  </q-toolbar>
</q-header>

<q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
  <!-- drawer content -->
</q-drawer>

<q-page-container>
  <div class="main-container q-pa-md">
    <div class="row justify-center">
      <div class="col-4">
        <current-user v-if="user" />
        <login v-else/>
      </div>
    </div>
  </div>
</q-page-container>

</q-layout>
</template>
  

<style lang="scss">
@import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
@import "@fortawesome/fontawesome-free/css/brands.min.css";

.hr-lines{
  position: relative;
  text-align: center;
}

.hr-lines:before{
  content:" ";
  height: 1px;
  width: 45%;
  background: lightgray;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
}

.hr-lines:after{
  content:" ";
  height: 1px;
  width: 45%;
  background: lightgray;
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
}
</style>
