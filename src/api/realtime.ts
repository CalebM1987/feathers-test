import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import { createClient } from 'backend'
import { apiBase } from './url'
import { user, accessToken, scope } from '@/store'
import { AuthenticationResult } from '@feathersjs/authentication';

const connection = socketio(io(apiBase.value))

export const realtimeClient = createClient(connection, {
  path: 'api/v1/authentication',
  storageKey: 'aahtoken'
})

export function handleAuthResponse(resp: AuthenticationResult){
  console.log('resp??', resp)
  user.value = resp.user
  accessToken.value = resp.accessToken
  
  if (resp.user.googleId){
    scope.value = 'google'
  }
  else if (resp.user.facebookId){
    scope.value = 'facebook'
  } else {
    scope.value = 'local'
  }
}

export const login = async ({ email, password }: { email: string; password: string})=> {
  try {

    const resp = await realtimeClient.authenticate({
      strategy: 'local',
      email,
      password
    })
    handleAuthResponse(resp)
  } catch(err){
    console.warn('local login failed: ', err)
  }
}

export const logout = async ()=> {
  const resp = await realtimeClient.logout()
  user.value = undefined
  accessToken.value = undefined
  scope.value = undefined
  console.log('user logged out', resp)
}