import { ref } from 'vue'

const protocol = import.meta.env.VITE_USE_SSL == '1' ? 'https': 'http'
export const apiBase = ref(`${protocol}://localhost:3030`)