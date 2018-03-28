const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(__dirname + "/dist"));

const apiKey = require('./ApiKey');

app.post('/weather', (req, res) => {
  console.log(req.body.query);
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: req.body.query,
      appid: apiKey.value,
      units: 'metric',
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error.response.data);
    });
});

app.listen(process.env.PORT || 5000);