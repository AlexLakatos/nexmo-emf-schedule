<template>
  <div class="home">
    <div v-if="day" class="mdl-tabs">
      <div class="mdl-tabs__tab-bar">
        <a :class="(day == 'friday') ? 'mdl-tabs__tab is-active' : 'mdl-tabs__tab'" href="/schedule/friday">Friday</a>
        <a :class="(day == 'saturday') ? 'mdl-tabs__tab is-active' : 'mdl-tabs__tab'" href="/schedule/saturday">Saturday</a>
        <a :class="(day == 'sunday') ? 'mdl-tabs__tab is-active' : 'mdl-tabs__tab'" href="/schedule/sunday">Sunday</a>
      </div>

      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col" v-for="track in Object.keys(timeline)" :key="track">

          <div class="mdl-card mdl-shadow--2dp">
            <div :class="'mdl-card__title mdl-card--expand stage-' + track">
              <h2 class="mdl-card__title-text">Stage {{ track.toUpperCase() }}</h2>
            </div>
          </div>

          <ul class="mdl-list">
            <li class="mdl-list__item mdl-list__item--two-line" v-for="talk in timeline[track]" :key="talk.id">
              <span class="mdl-list__item-primary-content">
                <i class="mdl-list__item-avatar">
                  <span>{{ talk.start_time }}</span>
                  <span class=mdl-list__divider>-</span>
                  <span>{{ talk.end_time }}</span>
                </i>
                <span>{{ talk.speaker }}</span>
                <span class="mdl-list__item-sub-title">{{ talk.title }}</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <router-link class="mdl-list__item-secondary-action" :to="{ name: 'talk', params: { slug: talk.slug } }"><i class="material-icons">chevron_right</i></router-link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mdl-tabs__tab.is-active {
  outline: none;
}

.mdl-tabs__tab.is-active::after {
  height: 2px;
  width: 100%;
  display: block;
  content: " ";
  bottom: 0;
  left: 0;
  position: absolute;
  background: rgb(103, 58, 183);
  -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s
    alternate forwards;
  animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate
    forwards;
  transition: all 1s cubic-bezier(0.4, 0, 1, 1);
}

.mdl-list__item-avatar {
  border-radius: 0;
  width: 48px;
  height: 48px;
  background-color: #4051b5;
}

.mdl-list__item-avatar span {
  line-height: 1px;
  font-size: 16px;
  position: relative;
  top: -3px;
}

.mdl-list__item-avatar .mdl-list__divider {
  display: block;
  text-align: center;
  position: relative;
  top: 2.5px;
}

.mdl-list__item-secondary-action .material-icons {
  font-size: 48px;
}

.mdl-tabs.is-upgraded .mdl-tabs__panel.is-active {
  display: flex;
}

.mdl-tabs__tab {
  padding: 0 100px;
}

.mdl-card {
  width: 100%;
}

.mdl-card__title {
  background-size: cover;
}

.mdl-card__title-text {
  background-color: #4051b5;
  padding: 5px;
  color: #fff;
}

.mdl-card__title.stage-a {
  background-image: url("../assets/stagea.jpg");
}
.mdl-card__title.stage-b {
  background-image: url("../assets/stageb.jpg");
}
.mdl-card__title.stage-c {
  background-image: url("../assets/stagec.jpg");
}

@media (max-width: 479px) {
  .mdl-tabs__tab {
    padding: 0 16px;
  }
}
</style>


<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      timeline: {
        a: undefined,
        b: undefined,
        c: undefined
      },
      day: undefined
    };
  },
  created() {
    axios
      .get("https://nexmo-emf-schedule.herokuapp.com/data/nexmo-schedule.json")
      .then(response => {
        this.day = this.$route.params.day;
        var dayString = "";
        switch (this.day) {
          case "friday":
            dayString = "2018-08-31";
            break;
          case "saturday":
            dayString = "2018-09-01";
            break;
          case "sunday":
            dayString = "2018-09-02";
            break;

          default:
            break;
        }
        this.timeline.a = response.data
          .filter(
            talk =>
              talk.venue === "Stage A" &&
              talk.start_date.indexOf(dayString) === 0
          )
          .sort(this.sortByDate);
        this.timeline.b = response.data
          .filter(
            talk =>
              talk.venue === "Stage B" &&
              talk.start_date.indexOf(dayString) === 0
          )
          .sort(this.sortByDate);
        this.timeline.c = response.data
          .filter(
            talk =>
              talk.venue === "Stage C" &&
              talk.start_date.indexOf(dayString) === 0
          )
          .sort(this.sortByDate);
      })
      .catch(console.error);
  },
  methods: {
    sortByDate(a, b) {
      a = Date.parse(a.start_date.replace(/\ /, "T"));
      b = Date.parse(b.start_date.replace(/\ /, "T"));
      return a > b ? 1 : a < b ? -1 : 0;
    }
  }
};
</script>
