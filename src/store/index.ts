import { ref } from 'vue'
import { User, SocialProviders } from '@/types'

export const user = ref<User>()

export const accessToken = ref<string>()

export const scope = ref<SocialProviders | 'local'>()
