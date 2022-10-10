const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });
const express = require('express');
const cors = require('cors');

const { RootRouter } = require('./src/modules/root/routes');
const { StudentRouter } = require('./src/modules/student/routes');

const { LoggingAssistant } = require('./src/assistants');

LoggingAssistant.devLog(
  `Server running on port ${process.env.PORT} in the ${env} env`
);

const app = express();
app.set('trust proxy', true);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', RootRouter);
app.use('/api/students', StudentRouter);

module.exports = app;

// TODO set aliases for associations
// TODO centalize request management blocks
// TODO complete all seeders and refactor to table definitions
