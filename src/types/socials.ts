export const providers = ['google', 'facebook'] as const

export type SocialProviders = typeof providers;