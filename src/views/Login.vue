<script lang="ts" setup>
import { ref } from 'vue'
import { login, apiBase } from '@/api'
import { providers } from '@/types'
import SocialLogin from '@/components/SocialLogin.vue';

const email = ref('devtest@dev.com')
const password = ref('devtest')

const reset = ()=> {
  email.value = ''
  password.value = ''
}

</script>

<template>
  <div class="login-container q-pa-lg q-mt-xl login-container">
    <p class="text-h6 text-center" style="color: gray;">Please Sign In</p>
    <div class="q-pb-md socials-container">
      <!-- socials login -->
      <div class="socials-registration mt-3" v-for="provider of providers">
        <social-login :provider="provider"></social-login>
      </div>
  
      <div class="w-100 my-4">
        <div class="hr-lines">OR</div>
      </div>

    </div>

    <q-form
      @submit="login({ email, password })"
      @reset="reset"
      class="q-gutter-md local-auth-form"
    >
    <q-input
        filled
        v-model="email"
        label="email"
        hint="type your email address"
        lazy-rules
        :rules="[ val => val && val.length >= 5 || 'Please type something']"
      />

      <q-input
        filled
        class="q-my-md"
        type="password"
        v-model="password"
        label="password"
        lazy-rules
        :rules="[val => val && val.length >= 5]"
        @keyup.enter="login"
      />

      <q-btn color="primary" @click="login({ email, password })" type="submit">Sign In</q-btn>
    </q-form>
  </div>

</template>

<style>
.login-container {
  border-radius: 10px;
  border: 1px solid lightgray;
}
</style>