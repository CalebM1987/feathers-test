import { ref } from 'vue'
import { User } from '@/types'

export const user = ref<User>()

export const accessToken = ref<string>()