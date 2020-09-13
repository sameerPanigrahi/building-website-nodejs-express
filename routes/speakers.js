const speakersRouter = require('express').Router();

module.exports = (params) => {
  const { speakersService } = params;

  speakersRouter.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
    return response.json(speakers);
  });

  speakersRouter.get('/:shortname', (request, response) => {
    return response.send(`Details Page of ${request.params.shortname}`);
  });

  return speakersRouter;
};
