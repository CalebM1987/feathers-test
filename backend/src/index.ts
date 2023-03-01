import * as dotenv from 'dotenv'
dotenv.config()

import { app } from './app'
import { logger } from './logger'
import https from 'https';
import fs from 'fs'
import path from 'path'

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason))

process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason))

if (process.env.USE_SSL == '1'){
  logger.info('using SSL for localhost')
  const server = https
    .createServer(
      {
        key: fs.readFileSync(path.resolve('./cert/localhost.key')),
        cert: fs.readFileSync(path.resolve('./cert/localhost.crt')),
      },
      app.callback()
    )
    .listen(port)
  
  // Call app.setup to initialize all services and SocketIO
  app.setup(server)
  
  // HTTPS ONLY!
  server.on('listening', () => logger.info(`Feathers app listening on https://${host}:${port}`))
} else {
  // FOR HTTP ONLY!
  app.listen(port).then(() => {
    logger.info(`Feathers app listening on http://${host}:${port}`)
  })
}
