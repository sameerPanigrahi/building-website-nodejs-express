const router = require('express').Router();
const speakersRoutes = require('./speakers');
const feedbackRoutes = require('./feedback');

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome Admin' });
  });

  router.use('/feedback', feedbackRoutes());
  router.use('/speakers', speakersRoutes());

  return router;
};
