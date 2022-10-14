import * as bodyParser from 'body-parser'
import express from 'express'
import expressPinoLogger from 'express-pino-logger'
import { logger } from './utils/Logger'

class App {
    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware()
        this.routes()
    }

    // Configure express middleware
    private middleware(): void {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(expressPinoLogger({ logger: logger }))
    }

    private routes(): void {
        this.express.get('/', (req, res) => {
            res.send('This App works')
        })

        this.express.get('/api/fitness_plans', (req, res) => {
            res.json([])
        })

        // handling undefined routes
        this.express.use('*', (req, res, next) => {
            res.status(404)
            res.json({ error: 'Not found' })
        })
    }
}

export default new App().express