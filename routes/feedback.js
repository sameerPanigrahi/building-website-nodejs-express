const feedbackRouter = require('express').Router();

module.exports = () => {
  feedbackRouter.get('/', (request, response) => {
    response.send('feedback list');
  });

  feedbackRouter.post('/', (request, response) => {
    response.send('Feedback form posted');
  });

  return feedbackRouter;
};
