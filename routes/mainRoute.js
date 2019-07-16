#!/usr/bin/env node

const express = require('express');
const route = express.Router();

const amqp = require('amqplib/callback_api');
const connectToQueue = require('../utils/connectToQueue');

route.get('/api', (req, res) => {
  try {
    connectToQueue()
      .then(connection => console.log(connection));
  }
  catch (e) {
    console.error(e.message);
    res.send(500);
  }
});

module.exports = route;
