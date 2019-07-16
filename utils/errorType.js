class ErrorConnection extends Error {
  constructor(message) {
    super();
    this.name = 'ConnectionError';
    this.message = message;
  }
}
class ErrorChannel extends Error {
  constructor(message) {
    super();
    this.name = "ChannelError";
    this.message = message
  }
}

module.exports = {
  ErrorConnection,
  ErrorChannel
};