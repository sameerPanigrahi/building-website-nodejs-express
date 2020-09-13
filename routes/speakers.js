const speakersRouter = require('express').Router();

module.exports = () => {
  speakersRouter.get('/', (request, response) => {
    return response.send('Speakers List');
  });

  speakersRouter.get('/:shortname', (request, response) => {
    return response.send(`Details Page of ${request.params.shortname}`);
  });

  return speakersRouter;
};
