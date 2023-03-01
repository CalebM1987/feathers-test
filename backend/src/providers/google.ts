import { Params } from "@feathersjs/feathers";
import { OAuthStrategy } from "@feathersjs/authentication-oauth/lib";
import { logger } from "../logger";

export class GoogleStrategy extends OAuthStrategy {
  async getEntityData(profile: any, existing: any, params: Params) {
    console.log('profile????', profile)

    // this will set 'googleId'
    const baseData = await super.getEntityData(profile, existing, params);
    logger.info('google OAuth baseData: ', baseData)

    // this will grab the picture and email address of the Google profile
    return {
      ...baseData,
      profilePicture: profile.picture,
      email: profile.email
    };
  }
}
