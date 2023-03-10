import { type HookContext } from "@feathersjs/feathers";
import { logger } from "../logger";

export async function checkIfEmailExists(context: HookContext){
  const { data: { email, password, googleId, facebookId, githubId }, service } = context
  const isOauth = Boolean(googleId || facebookId || githubId)
  if (!email){
    throw new Error('missing email or password')
  }

  // check if record exists with email, if total is > 0
  // there is already a user with this email address in the database
  const { total } = await service.find({
    query: {
      email,
    }
  })
  
  if (total && !isOauth){
    logger.info(`found duplicate email address: "${email}"`)
    throw new Error(`Email already exists: "${email}"`)
  }
}