const router = require('express').Router();
const speakersRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

module.exports = (params) => {
  router.get('/', (request, response) => {
    if (!request.session.visitCount) {
      request.session.visitCount = 1;
    }
    request.session.visitCount += 1;
    // eslint-disable-next-line no-console
    console.log(`Number of visits :>> ${request.session.visitCount}`);

    response.render('pages/index', { pageTitle: 'Welcome Admin' });
  });

  router.use('/feedback', feedbackRoutes(params));
  router.use('/speakers', speakersRoutes(params));

  return router;
};
