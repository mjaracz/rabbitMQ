#!/usr/bin/env node
const amqp = require('amqplib/callback_api');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser);
app.use('/', (req, res) => {

});

try {
  amqp.connect('amqp://localhost', (errorConnection, connection) => {
    if(errorConnection) throw new Error(errorConnection);
    connection.createChannel((errorChannel, channel) => {
      if(errorChannel) throw new Error(errorChannel);
      const queue = 'hello';
      console.log('waiting for message from queue: ' + queue + ' To exit press CTRL+C', queue);
      channel.assertQueue(queue, {
        durable: false
      });

      channel.consume(queue, msg => {
        console.log('Variable from queue: ', msg.content.toString());
      }, {
        noAck: true
      });
    })
  })
}
catch (e) {
  console.error(e);
}