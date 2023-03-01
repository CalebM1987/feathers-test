// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'
import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'
import { GoogleStrategy, FacebookStrategy } from './providers'
import type { Application } from './declarations'

declare module './declarations' {
  interface ServiceTypes {
    'api/v1/authentication': AuthenticationService
  }
}

export const authentication = (app: Application) => {
  const authentication = new AuthenticationService(app)

  authentication.register('jwt', new JWTStrategy())
  authentication.register('local', new LocalStrategy())
  authentication.register('google', new GoogleStrategy())
  authentication.register('facebook', new FacebookStrategy())
  authentication.register('github', new OAuthStrategy())

  app.use('api/v1/authentication', authentication)
  app.configure(oauth())
}
