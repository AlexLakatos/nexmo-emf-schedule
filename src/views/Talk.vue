<template>
  <div>
    <div v-if="loading">
      <h1 class="mdl-typography--display-1">Loading...</h1>
      <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    </div>
    <div v-if="!loading">
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text speaker">{{ talk.speaker }}</h2>
            <h2 class="mdl-card__title-text">{{ talk.title }}</h2>
        </div>
        <div class="mdl-card__menu">
            <span class="mdl-chip">
                <span class="mdl-chip__text">{{ talk.venue }}</span>
            </span>
            <span class="mdl-chip" v-if="live">
                <span class="mdl-chip__text">Live</span>
            </span>
        </div>
        <div class="mdl-card__supporting-text">
            {{ talk.description }}
        </div>
        <div class="mdl-card__supporting-text caption">
            {{ caption }}
        </div>
        </div>
    </div>
  </div>
</template>

<style>
.mdl-typography--display-4,
.mdl-progress {
  width: 100%;
}

.mdl-card {
  width: calc(100% - 40px);
  margin: 20px;
}

.mdl-card__title {
  background-color: #4051b5;
  color: #ffffff;
  flex-flow: column;
}

.mdl-chip {
  background-color: #ffffff;
  color: #673ab7;
  margin-left: 5px;
}

.mdl-card__title-text {
  align-self: flex-start;
  text-align: left;
  margin: 10px 0;
}

.mdl-card__title-text.speaker {
  text-transform: capitalize;
}

.mdl-card__supporting-text {
  width: 97%;
  text-align: left;
  margin: 0 auto;
  padding: 16px 0;
}

.mdl-card__supporting-text.caption {
  border-top: 3px solid #4051b5;
}

@media (max-width: 479px) {
  .mdl-card {
    width: 100%;
    margin: 0;
  }

  .mdl-card__supporting-text {
    width: 90%;
  }
}
</style>

<script>
import axios from 'axios';
import ConversationClient from 'nexmo-stitch';

export default {
  name: 'talk',
  data() {
    return {
      loading: true,
      talk: undefined,
      caption: 'There is no caption yet, please check back later.',
      live: false,
    };
  },
  methods: {
    getConversation(app) {
      console.log('*** Logged into app', app);
      return app.getConversation(this.talk.conversation_id);
    },
    setConversation(conversation) {
      conversation.getEvents().then((events) => {
        if (
          events.size > 1 &&
          this.caption === 'There is no caption yet, please check back later.'
        ) {
          this.caption = '';
        }

        events.forEach((value, key) => {
          if (value.type === 'text') {
            this.caption += value.body.text;
          }
        });

        this.loading = false;
      });
      conversation.on('text', (sender, message) => {
        this.live = true;

        if (
          this.caption === 'There is no caption yet, please check back later.'
        ) {
          this.caption = '';
        }

        this.caption += message.body.text;
      });
    },
    loginAndGetConversation() {
      axios
        .get('https://nexmo-emf-schedule.herokuapp.com/api/jwt/schedule')
        .then((response) => {
          // JSON responses are automatically parsed.
          new ConversationClient({ debug: false, rtcstats_enabled: false })
            .login(response.data.user_jwt)
            .then(this.getConversation)
            .then(this.setConversation);
        })
        .catch(console.error);
    },
  },
  mounted() {
    axios
      .get('https://nexmo-emf-schedule.herokuapp.com/data/nexmo-schedule.json')
      .then((response) => {
        // JSON responses are automatically parsed.
        this.talk = response.data.filter((talk) => {
          if (talk.slug === this.$route.params.slug) return talk;
        })[0];
      })
      .then(this.loginAndGetConversation)
      .catch(console.error);
  },
};
</script>
