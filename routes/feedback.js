const feedbackRouter = require('express').Router();

module.exports = (params) => {
  const { feedbackService } = params;
  feedbackRouter.get('/', async (request, response) => {
    const feedback = await feedbackService.getList();
    response.json(feedback);
  });

  feedbackRouter.post('/', (request, response) => {
    response.send('Feedback form posted');
  });

  return feedbackRouter;
};
