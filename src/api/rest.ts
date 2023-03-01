import rest from '@feathersjs/rest-client'
import { createClient } from 'backend'
import { apiBase } from './url'
import authentication from '@feathersjs/authentication-client'

const connection = rest(apiBase.value).fetch(window.fetch.bind(window))

export const restClient = createClient(connection, {
  storageKey: 'aahtoken',
  path: 'api/v1/authentication'
})

// restClient.configure(authentication({
  
// }))
