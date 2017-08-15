//connections to the database through our .env file and requires pg promise


const pg       = require('pg-promise')({});

const pgConfig = {  host:  'localhost'   ,
                    port:   5432  ,
                    database: 'jobsliberia',
                    // user:     process.env.PG_USER,
                    // password: process.env.PG_PASSWORD,
                  };

const db       = pg(pgConfig);

module.exports = db;

// PG_HOST=localhost
// PG_PORT=5432
// PG_DATABASE=jobsliberia
// JWT_SECRET=jobalo
// process.env.PG_HOST
// process.env.PG_PORT
// database: process.env.PG_DATABASE
