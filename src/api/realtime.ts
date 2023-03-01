import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import { createClient } from 'backend'
import { apiBase } from './url'

const connection = socketio(io(apiBase.value))

export const realtimeClient = createClient(connection, {
  path: 'api/v1/authentication',
  storageKey: 'aahtoken'
})
