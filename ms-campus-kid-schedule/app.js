const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });
const express = require('express');
const cors = require('cors');

const { RootRouter } = require('./src/modules/root/routes');
const { StudentRouter } = require('./src/modules/student/routes');
const { EnrollmentRouter } = require('./src/modules/enrollment/routes');
const { GroupRouter } = require('./src/modules/group/routes');
const { PeriodRouter } = require('./src/modules/period/routes');
const { ScheduleRouter } = require('./src/modules/schedule/routes');
const { SubjectPeriodRouter } = require('./src/modules/subject-period/routes');
const { TeacherRouter } = require('./src/modules/teacher/routes');

console.log(
  `Server running on port ${process.env.PORT} in the ${env} env`
);

const app = express();
app.set('trust proxy', true);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', RootRouter);
app.use('/api/students', StudentRouter);
app.use('/api/enrollments', EnrollmentRouter);
app.use('/api/groups', GroupRouter);
app.use('/api/periods', PeriodRouter);
app.use('/api/schedules', ScheduleRouter);
app.use('/api/subject-periods', SubjectPeriodRouter);
app.use('/api/teachers', TeacherRouter);

module.exports = app;
