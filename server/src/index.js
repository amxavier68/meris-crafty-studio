const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/default.env'});

const app = express();

app.set('views', './server/views');
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.render( 'base', { 
    title: 'Seamus Control Panel',
    message: "This will be the entry point to a new content management system." 
  });
});

app.post("/", (req, res) => {
  console.log(req.params);
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Dashboard", message: "Dashboard Route, yet to be implemented"});
});

const PORT = process.env.PORT || 3001;
const MODE = process.env.NODE_ENV || 'production';

app.listen(PORT, () => console.log(`Listening on port: ${PORT}, running in ${MODE} mode.`) );