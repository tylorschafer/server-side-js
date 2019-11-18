const environment = process.env.NODE_ENV || 'development'
const configuration = require('../../knexfile')[environment]
const database = require('knex')(configuration)

module.exports = {
  environment: environment,
  configuration: configuration,
  database: database
}
