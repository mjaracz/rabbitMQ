#!/usr/bin/env node
const amqp = require('amqplib/callback_api');
const {ErrorConnection, ErrorChannel} = require('./errorType');
const queue = 'jsonData';

const connectToQueue = async () => {
  await amqp.connect('amqp://localhost',  (errorConnection, connection) => {
    if(errorConnection) throw new ErrorConnection(errorConnection.message);
    connection.createChannel((errorChannel, channel) => {
      if(errorChannel) throw new ErrorChannel(errorChannel.message);
      channel.assertQueue(queue, {
        durable: false
      });
      return new Promise(connection);
    });

  })
};

module.exports = connectToQueue;