const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    password: 'pgsql',
    host: 'localhost',
    port: 5432,
    database: 'automated-test-api'
})

module.exports = db