const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/default.env'});

const appRouter = require('../routes/appRouter');
const dashRouter = require('../routes/dashRouter');

const app = express();

app.set('views', './server/views');
app.set('view engine', 'pug');

app.use("/", appRouter);
app.use("/dashboard", dashRouter);

const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV || 'production';

app.listen(PORT, () => console.log(`Listening on port: ${PORT}, running in ${MODE} mode.`) );