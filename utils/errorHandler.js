const errorHandler = (action) => {
  action
    .catch((Reason) => {
      console.error(Reason.message)
    })
};

module.exports = errorHandler;
