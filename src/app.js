import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import logger from './logger.js'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import middleware from './middleware/index.js'
import services from './services/index.js'
import appHooks from './app.hooks.js'
import channels from './channels.js'

const app = express(feathers())

// Load app configuration
app.configure(configuration())
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
// Host the public folder
app.use('/', express.static(app.get('public')))

// Set up Plugins and providers
app.configure(express.rest())

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware)
// Set up our services (see `services/index.js`)
app.configure(services)
// Set up event channels (see channels.js)
app.configure(channels)

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger }))

app.hooks(appHooks)

export default app
