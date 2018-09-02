<template>
    <div class="mdl-card mdl-card-nexmo mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"><a href="https://developer.nexmo.com" target="_blank">made with 💜 by <br> <img src="https://dashboard.nexmo.com/resources/img/nexmo-logo-w-vonage.svg" /></a></h2>
        </div>
        <div class="mdl-card__supporting-text">
            We've sponsored the live captioning for EMF Camp this year, and we've built a couple of apps to facilitate access to the live captions:
            <ul>
                <li>
                    the transcription app - uses Nexmo In-App voice to transmit audio one way from the stage computers to the lovely captioners at <a href="https://twitter.com/whitecoatcapxg">White Coat</a>.
                </li>
                <li>
                    this schedule app - uses Nexmo In-App Messaging to enhance the schedule with the live captions coming in, as well as make them accessible after the event is done.
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.mdl-card-nexmo {
  margin: 18px auto;
  width: 50%;
}
.mdl-card-nexmo .mdl-card__title {
  background-size: cover;
  background-image: url("../assets/nexmo.jpg");
}
.mdl-card-nexmo .mdl-card__title-text {
  padding: 0 24px;
}
.mdl-card-nexmo .mdl-card__title a {
  text-decoration: none;
  font-size: 32px;
  color: #ffffff;
}
</style>
