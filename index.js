const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mainRoute = require('./routes/mainRoute');
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', mainRoute);

app.listen(port, () => {
  console.log('server start on PORT 8080')
});
