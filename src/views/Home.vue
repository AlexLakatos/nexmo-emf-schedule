<template>
  <div class="home">
    <div v-if="timeline['sunday']['c']" class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div class="mdl-tabs__tab-bar">
          <a href="#friday" v-on:click="activeTab = 'friday'" class="mdl-tabs__tab is-active">Friday</a>
          <a href="#saturday" v-on:click="activeTab = 'saturday'" class="mdl-tabs__tab">Saturday</a>
          <a href="#sunday" v-on:click="activeTab = 'sunday'" class="mdl-tabs__tab">Sunday</a>
      </div>

      <div :class="day === activeTab ? 'mdl-tabs__panel mdl-grid is-active' : 'mdl-tabs__panel mdl-grid'" :id="day" v-for="day in Object.keys(timeline)" :key="day">
        <div class="mdl-cell mdl-cell--4-col" v-for="track in Object.keys(timeline[day])" :key="track">
          
          <div class="mdl-card mdl-shadow--2dp">
            <div :class="'mdl-card__title mdl-card--expand stage-' + track">
              <h2 class="mdl-card__title-text">Stage {{ track.toUpperCase() }}</h2>
            </div>
          </div>
          
          <ul class="mdl-list">
            <li class="mdl-list__item mdl-list__item--two-line" v-for="talk in timeline[day][track]" :key="talk.id">
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
                <router-link class="mdl-list__item-secondary-action" :to="{ name: 'talk', params: { slug: talk.slug } }"><i class="material-icons">chevron_right</i></router-link>            </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
        friday: {
          a: undefined,
          b: undefined,
          c: undefined
        },
        saturday: {
          a: undefined,
          b: undefined,
          c: undefined
        },
        sunday: {
          a: undefined,
          b: undefined,
          c: undefined
        }
      },
      activeTab: "friday"
    };
  },
  created() {
    axios
      .get("data/nexmo-schedule.json")
      .then(response => {
        this.timeline["friday"]["a"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage A" &&
              talk.start_date.indexOf("2018-08-31") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["friday"]["b"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage B" &&
              talk.start_date.indexOf("2018-08-31") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["friday"]["c"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage C" &&
              talk.start_date.indexOf("2018-08-31") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["saturday"]["a"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage A" &&
              talk.start_date.indexOf("2018-09-01") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["saturday"]["b"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage B" &&
              talk.start_date.indexOf("2018-09-01") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["saturday"]["c"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage C" &&
              talk.start_date.indexOf("2018-09-01") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["sunday"]["a"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage A" &&
              talk.start_date.indexOf("2018-09-02") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["sunday"]["b"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage B" &&
              talk.start_date.indexOf("2018-09-02") === 0
            );
          })
          .sort(this.sortByDate);
        this.timeline["sunday"]["c"] = response.data
          .filter(talk => {
            return (
              talk.venue === "Stage C" &&
              talk.start_date.indexOf("2018-09-02") === 0
            );
          })
          .sort(this.sortByDate);
      })
      .catch(console.error);
  },
  methods: {
    sortByDate(a, b) {
      a = new Date(a.start_date);
      b = new Date(b.start_date);
      return a > b ? 1 : a < b ? -1 : 0;
    }
  }
};
</script>
