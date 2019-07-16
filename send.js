#!/usr/bin/env node
const amqp = require('amqplib/callback_api');
const {ErrorConnection, ErrorChannel} = require('./utils/errorType');

amqp.connect('amqp://localhost', (errorConnection, connection) => {
  try {
    if(errorConnection) throw new ErrorConnection(errorConnection.message);
    connection.createChannel((errorChannel, channel) => {
      if(errorChannel) throw new ErrorChannel(errorChannel.message);
      const queue = 'hello';
      const msg = 'Hello world';
      channel.assertQueue(queue, {
        durable: false
      });
      setInterval(() => {
        channel.sendToQueue(queue, Buffer.from(msg));
      }, 3000)
    });
  }
  catch (e) {
    console.error(e.message)
  }
});
