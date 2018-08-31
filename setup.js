require('dotenv').config({ path: `${__dirname}/.env` });

const Nexmo = require('nexmo');
const axios = require('axios');
const jsonfile = require('jsonfile');

const nexmo = new Nexmo(
  {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    applicationId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
  },
  { debug: false },
);

json = [];
createdConversations = 0;
schedule = undefined;

function createConversation(index) {
  if (index === schedule.length) {
    jsonfile.writeFile('./nexmo-schedule.json', schedule, (err) => {
      console.log(err);
    });
    return;
  }
  nexmo.conversations.create(
    { display_name: schedule[index].id },
    (err, res) => {
      if (err) {
        console.log('Failed to create conversation ', index, err);
        createConversation(index);
      }
      if (res) {
        schedule[index].conversation_id = res.id;
        nexmo.conversations.members.add(
          res.id,
          { action: 'join', user_id: process.env.USER_ID, channel: { type: 'app' } },
          (err, res) => {
            if (err) {
              console.log('Failed to add user to conversation ', err);
            }
            if (res) {
              schedule[index].member_id = res.id;
              console.log('Created conversations', index + 1, '/', schedule.length);
              createConversation(index + 1);
            }
          },
        );
      }
    },
  );
}

axios
  .get('https://www.emfcamp.org/schedule.json')
  .then((response) => {
    schedule = response.data;
    createConversation(0);
  })
  .catch((error) => {
    console.log(error);
  });
