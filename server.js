const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const routes = require('./routes');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./resources/data/feedback.json');
const speakersService = new SpeakersService('./resources/data/speakers.json');

const app = express();

const port = 3000;

app.set('trust proxy', 1); // in case the app is hosted in a web server like nginx that uses reverse proxy
app.use(
  cookieSession({
    name: 'session',
    keys: ['random keys'], // use any random keys you want to add
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './resources/static')));
app.use(
  '/',
  routes({
    // eslint-disable-next-line object-shorthand
    feedbackService: feedbackService,
    // eslint-disable-next-line object-shorthand
    speakersService: speakersService,
  })
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on ${port}`);
});
