require('dotenv').config({
  path: `${__dirname}/.env`,
});

const Nexmo = require('nexmo');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/dist`));

const userAcl = {
  paths: {
    '/v1/users/**': {},
    '/v1/conversations/**': {},
    '/v1/sessions/**': {},
    '/v1/devices/**': {},
    '/v1/image/**': {},
    '/v3/media/**': {},
    '/v1/applications/**': {},
    '/v1/push/**': {},
    '/v1/knocking/**': {},
  },
};

privateKey = Buffer.from(process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), 'utf-8');

// endpoint that doesn't authenticate the user
// it will simply return a JWT with every request
app.get('/api/jwt/:user', (req, res) => {
  const jwt = Nexmo.generateJwt(privateKey, {
    application_id: process.env.APP_ID,
    sub: req.params.user,
    exp: new Date().getTime() + 86400,
    acl: userAcl,
  });

  res.json({ user_jwt: jwt });
});

app.get('/api/schedule.json', (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./public/data/nexmo-schedule.json', 'utf8')));
});

app.get('/api/schedule/:talkId', (req, res) => {
  res.json(JSON.parse(fs.readFileSync('./public/data/nexmo-schedule.json', 'utf8')).filter((talk) => {
    return talk.id == req.params.talkId
  })[0]);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server started ${port}`);
