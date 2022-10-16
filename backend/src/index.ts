import dotenv from 'dotenv';
import path from 'path';
import http from 'http'
import App from './app'
import { logger } from './utils/Logger'


dotenv.config({path: path.join(__dirname, '../../', '.env.local')});

const port = process.env.BACKEND_PORT || 8001;

App.set('port', port)
const server = http.createServer(App)
server.listen(port)

server.on('listening', function(): void {
  const addr = server.address()
  const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr?.port}`
  logger.info(`Server is listening on ${bind}`, null)
})

module.exports = App