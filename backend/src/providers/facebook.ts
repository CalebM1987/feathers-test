import { Params } from '@feathersjs/feathers'
import {
  AuthenticationService,
  JWTStrategy,
  AuthenticationRequest
} from '@feathersjs/authentication'
import {
  OAuthStrategy,
  OAuthProfile
} from '@feathersjs/authentication-oauth'
import axios from 'axios'
import { logger } from '../logger'

export class FacebookStrategy extends OAuthStrategy {
  async getProfile(authResult: AuthenticationRequest, _params: Params) {
    // This is the OAuth access token that can be used
    // for Facebook API requests as the Bearer token
    const accessToken = authResult.access_token

    const { data } = await axios.get('https://graph.facebook.com/me', {
      headers: {
        authorization: `Bearer ${accessToken}`
      },
      params: {
        // There are
        fields: 'id,name,email'
      }
    })

    return data
  }

  async getEntityData(profile: OAuthProfile, existing: any, params: Params) {
    // `profile` is the data returned by getProfile
    const baseData = await super.getEntityData(profile, existing, params)
    logger.info('OAuth facebook data: ', baseData, profile)

    return {
      ...baseData,
      email: profile.email
    }
  }
}