<script lang="ts" setup>
import { ref, computed } from 'vue'
import { apiBase } from '@/api';

interface Props {
  provider: 'google' | 'facebook'
}

const props = withDefaults(defineProps<Props>(), {
  provider: 'google'
})

const displayName = computed(()=> props.provider.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()))

const oauthLogin = ()=> {
  window.location.href = `${apiBase.value}/oauth/${props.provider}`
}

</script>
<template>
  <div 
    class="social-login q-my-md q-py-sm row justify-center w-100" 
    :class="`social-login--${provider}`"
    @click="oauthLogin"
  >
    <div class="social-icon q-mr-lg">
      <i class="fa-brands" :class="`fa-${provider}`"></i>
    </div>
    <div class="mt-1 social-btn-message">Continue with {{ displayName }}</div>
</div>

</template>

<style lang="scss">

.social-login {
  font-size: 1.15rem;
  border-radius: 10px;
  vertical-align: middle;
  color: white;
  cursor: pointer;
  text-align: center;
  &--google {
    background-color: #DB4437;
  }
  &--facebook {
    background-color: #1877f2;
  }
}

.social-icon {
  height: 28px;
  width: 28px;
}
</style>