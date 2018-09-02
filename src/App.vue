<template>
    <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"><a href="/">EMF Camp Schedule</a></span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link mdl-layout--large-screen-only" href="/">Home</a>
          <a href="https://developer.nexmo.com" target="_blank" class="love">made with 💙 by <br> <img src="https://dashboard.nexmo.com/resources/img/nexmo-logo-w-vonage.svg" /></a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style>
.mdl-layout-title {
  margin-top: 15px;
}

a.love {
  margin-bottom: 0;
  line-height: 18px;
  margin-left: 14px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
}

.love img {
  width: 100px;
}

@media (max-width: 479px) {
  .mdl-layout-title {
    font-size: 18px;
  }
}

@media (min-width: 480px) {
  .mdl-layout-title {
    font-size: 32px;
    margin-top: 6px;
  }
  .mdl-navigation__link {
    font-size: 18px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mdl-navigation__link{
  margin-top: 20px;
}

.mdl-layout__header-row {
  padding: 0 16px;
}

.mdl-layout-title img {
  margin-top: -8px;
  margin-right: 10px;
}

.mdl-layout__header a {
  color: #ffffff;
  text-decoration: none;
}
</style>
